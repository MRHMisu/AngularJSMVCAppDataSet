var facebookApp = angular.module('facebookApp', ["ui.router"]);

facebookApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "/partial/login.html",
            controller: 'loginController'
        })

    .state('register-user', {
        url: "/register-user",
        templateUrl: "/partial/register-user.html",
        controller: "createUserController"
    })
     .state('home', {
         url: "/home",
         templateUrl: "/partial/home.html"
     })
        .state('user-profile', {
            parent: 'home',
            url: "/user-profile",
            templateUrl: "/partial/user-profile.html",
            controller: "detailsUserController"
        })
        .state('update-user-profile', {
            parent: 'home',
            url: "/update-user-profile",
            templateUrl: "/partial/update-user-profile.html",
            controller: "updateUserController"
        })
    .state('apps-selection-page', {
        parent: 'home',
        url: "/apps-selection",
        templateUrl: "/partial/apps-selection-page.html"
    })
    .state('movi-poster-appform', {
        parent: 'home',
        url: "/movi-poster-appform",
        templateUrl: "/partial/movie-poster-app-form.html",
        controller: "moviePosterAppController"
    })
     .state('baby-dance-step-appform', {
         parent: 'home',
         url: "/baby-dance-step-appform",
         templateUrl: "/partial/baby-dance-setp-app-form.html",
         controller: "babyDanceStepAppController"
     })
    .state('app-result', {
        parent: 'home',
        url: "/app-result/:resultId",
        templateUrl: "/partial/app-result.html",
        controller: "appResultController"
    })

});