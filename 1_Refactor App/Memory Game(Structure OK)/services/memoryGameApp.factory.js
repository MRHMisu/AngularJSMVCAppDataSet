/**
 * Created by Misu Be Imp on 7/11/2016.
 */
memoryGameApp.factory('game', function() {
    var tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
        'that-guy', 'zeppelin'];

    return new Game(tileNames);
});