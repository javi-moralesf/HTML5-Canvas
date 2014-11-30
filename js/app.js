/**
 * Created by @javi_moralesf on 30/11/14.
 */


requirejs.config({
    baseUrl: 'js/app',
    paths: {
        lib: '../lib'
    }
});

define(function (require) {
    var Engine = require('engine');
    var Sprite = require('sprite');
    var Polyfill = require('lib/polyfill');

    var engine = new Engine('2d');
    engine.setWidth(600);
    engine.setHeight(600);

    var sprite_1 = new Sprite();
    sprite_1.setPath("assets/monet1.jpg");
    sprite_1.setX(0);
    sprite_1.setY(0);
    sprite_1.setWidth(390);
    sprite_1.setHeight(312);

    engine.addChild(sprite_1);

    engine.start();
});