/**
 * Created by @javi_moralesf on 30/11/14.
 */

'use strict';
define(['base'], function (Base) {

    /*
     Engine Class is the top level class of our application. Engine Class contains all the information regarding the
     canvas element and all the children that will be paint on it.
     */
    function Engine(context_type) {
        //Call the super constructor
        Base.call(this);
        //Set the default context.
        if(typeof context_type == 'undefined'){
            context_type = '2d';
        }
        this.canvas = document.createElement('canvas');
        document.body.insertBefore(this.canvas, document.body.firstChild);
        this.context = this.canvas.getContext(context_type);
        this.loaded = false;
        this.timepoint = 0;
    }

    // correct inheritance
    Engine.prototype = new Base();
    Engine.prototype.constructor = Engine;

    /*
     Start print looping
     */
    Engine.prototype.loop = function () {
        if (this.context) {
            this.timepoint = new Date().getTime();
            this.process();
            this.print();
        }
        window.requestAnimFrame(this.loop.bind(this, null));
    };

    Engine.prototype.start = function () {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.loaded = true;
        this.loop();
    };

    return Engine;
});