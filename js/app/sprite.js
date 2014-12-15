/**
 * Created by @javi_moralesf on 30/11/14.
 */

'use strict';
define(['base'], function (Base) {

    function Sprite() {
        //Call the super constructor
        Base.call(this);
        this.sprite = null;
        this.render = null;
        this.loaded = false;
        this.printed = false;
        this.path = null;
    }

    // correct inheritance
    Sprite.prototype = new Base();
    Sprite.prototype.constructor = Sprite;

    /*
     Setters
     */
    Sprite.prototype.setPath = function (path) {
        this.path = path;
    };

    Sprite.prototype.isLoaded = function () {
        if (!this.sprite.complete || (typeof this.sprite.naturalWidth !== "undefined" && this.sprite.naturalWidth === 0)) {
            return false;
        }
        return true;
    };

    Sprite.prototype.process = function () {
        if(!this.path || this.loaded){
            return;
        }
        if(this.sprite == null){
            this.sprite = new Image();
            this.sprite.src = this.path;
        }
        if(!this.loaded && this.isLoaded()){
            this.render = document.createElement('canvas');
            this.render.width = this.width;
            this.render.height = this.height;
            var context = this.render.getContext('2d');
            context.drawImage(this.sprite, 0, 0, this.width, this.height);
            this.loaded = true;
        }
    };

    Sprite.prototype.print = function (canvas) {
        if(this.printed || !this.loaded || !canvas.loaded()){
            return;
        }

        canvas.drawImage(this.render, this.x, this.y, this.width, this.height);
        this.printed = true;
    };

    return Sprite;
});