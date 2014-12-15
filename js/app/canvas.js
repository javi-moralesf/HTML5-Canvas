/**
 * Created by @javi_moralesf on 30/11/14.
 */

'use strict';
define([], function () {

    /*
     Context Class is the top level class of our application. Context Class contains all the information regarding the
     canvas element and all the children that will be paint on it.
     */
    function Canvas(context_type) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext(context_type);
        document.body.insertBefore(this.canvas, document.body.firstChild);
    }

    Canvas.prototype.init = function (width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    };

    Canvas.prototype.loaded = function () {
        return this.ctx;
    };

    Canvas.prototype.drawImage = function (source, x, y, width, height) {
        this.ctx.drawImage(source, x, y, width, height);
    };

    return Canvas;
});