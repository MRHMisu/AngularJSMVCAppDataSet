/**
 * Created by Misu Be Imp on 7/13/2016.
 */
'use strict';

/* Controllers */

angular.module('myApp').controller('projectorController', constructor);
constructor.$inject = ['Storage'];

function constructor(Storage) {

    var vm=this;
    vm.startBalance = Storage.loadObject('startBalance');

    vm.expenses = Storage.loadObject('expenses');

    vm.incomes = Storage.loadObject('incomes');

    vm.nonRecurring = Storage.loadObject('nonRecurring');

    vm.storageSupport = Storage.supported();


    vm.save = function () {
        Storage.saveObject(vm.expenses, 'expenses');
        Storage.saveObject(vm.incomes, 'incomes');
        Storage.saveObject(vm.startBalance, 'startBalance');
        Storage.saveObject(vm.nonRecurring, 'nonRecurring');
    }

    vm.clear = function () {
        Storage.clear();
        vm.startBalance = [];
        vm.expenses = [];
        vm.incomes = [];
        vm.nonRecurring = [];
        vm.initForm();
    }

    vm.addExpense = function () {
        var newEmptyExpense = {active: true, name: '', amount: 0, frequency: 1};
        vm.expenses.push(newEmptyExpense);
    }

    vm.removeExpense = function (index) {
        vm.expenses.splice(index, 1);
    }

    vm.addIncome = function () {
        var newEmptyIncome = {active: true, name: '', amount: 0, frequency: 1};
        vm.incomes.push(newEmptyIncome);
    }

    vm.removeIncome = function (index) {
        vm.incomes.splice(index, 1);
    }

    vm.addTransaction = function () {
        var newEmptyTransaction = {active: true, name: '', amount: 0, month: 1};
        vm.nonRecurring.push(newEmptyTransaction);
    }

    vm.removeTransaction = function (index) {
        vm.nonRecurring.splice(index, 1);
    }

    vm.tallyTransactions = function () {

        var total = 0;
        var oneOff = 0;

        for (var m = 0; m < vm.nonRecurring.length; m++) {
            oneOff = vm.convertToNumber(vm.nonRecurring[m].amount);
            if (oneOff != 0) {
                if (vm.nonRecurring[m].active) {
                    total = total + oneOff;
                }
            }
        }

        return total;
    }

    vm.monthlyIncome = function () {
        var total = 0;
        var thisMonth;
        for (var i = 0; i < vm.incomes.length; i++) {
            thisMonth = vm.convertToNumber(vm.incomes[i].amount);
            if (thisMonth != 0) {
                if (vm.incomes[i].active) {
                    total = total + (thisMonth * vm.incomes[i].frequency);
                }
            }
        }
        return total;
    }

    vm.monthlyExpense = function () {
        var total = 0;
        var thisMonth;
        for (var i = 0; i < vm.expenses.length; i++) {
            thisMonth = vm.convertToNumber(vm.expenses[i].amount);
            if (thisMonth != 0) {
                if (vm.expenses[i].active) {
                    total = total + (thisMonth * vm.expenses[i].frequency);
                }
            }
        }
        return total;
    }

    vm.monthlyNet = function () {

        var income = vm.monthlyIncome();
        var expense = vm.monthlyExpense();

        return income - expense;
    }

    vm.montlyProjection = function () {

        var monthByMonth = [];
        var runningTotal = 0;
        var oneOff = 0;

        for (var i = 0; i < 12; i++) {
            runningTotal = runningTotal + vm.monthlyNet();

            // add applicable one-off transations
            for (var m = 0; m < vm.nonRecurring.length; m++) {
                if (vm.convertToNumber(vm.nonRecurring[m].month) == i + 1) {
                    oneOff = vm.convertToNumber(vm.nonRecurring[m].amount);
                    if (oneOff != 0) {
                        if (vm.nonRecurring[m].active) {
                            runningTotal = runningTotal + oneOff;
                        }
                    }
                }
            }

            monthByMonth[i] = runningTotal;
        }

        return monthByMonth;

    }

    vm.getMonthLabel = function (monthAhead) {

        var d = new Date;
        var currentMonth = d.getMonth();
        var year = d.getFullYear();
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var futureMonth = currentMonth + monthAhead;
        if (futureMonth > 11) {
            futureMonth = futureMonth - 12;
            year = year + 1;
        }
        return monthNames[futureMonth] + ' ' + year;
    }

    vm.positiveNegative = function (value) {
        if (value > 0) {
            return "positive";
        }
        if (value < 0) {
            return "negative";
        }
    }


    vm.convertToNumber = function (value) {

        var floatNumber = parseFloat(value);

        if (floatNumber) {

            return floatNumber;

        } else {

            return 0;

        }

    }

    vm.roundDown = function (number) {

        //return Math.round(number*100)/100;
        return Math.round(number);

    }

    vm.initForm = function () {
        if (vm.incomes.length < 1) {
            vm.addIncome();
        }
        if (vm.expenses.length < 1) {
            vm.addExpense();
        }
        if (vm.nonRecurring.length < 1) {
            vm.addTransaction();
        }
    }

    vm.initForm();

    Socialite.load('social-buttons');


}