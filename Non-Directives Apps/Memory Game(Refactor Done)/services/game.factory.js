angular.module('memoryGameApp').factory('game', function() {
    var tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
        'that-guy', 'zeppelin'];

    return new Game(tileNames);
});