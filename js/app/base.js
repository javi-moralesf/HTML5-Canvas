/**
 * Created by @javi_moralesf on 30/11/14.
 */

'use strict';
define([], function () {

    /*
     Base Class is the top level class of our application. Base Class contains all the information regarding the
     canvas element and all the children that will be paint on it.
     */
    function Base() {
        this.context = null;
        this.width = 0;
        this.height = 0;
        this.x = 0;
        this.y = 0;
        this.children = [];
    }

    /*
     Setters
     */
    Base.prototype.setWidth = function (width) {
        this.width = width;
    };
    Base.prototype.setHeight = function (height) {
        this.height = height;
    };
    Base.prototype.setX = function (x) {
        this.x = x;
    };
    Base.prototype.setY = function (y) {
        this.y = y;
    };


    Base.prototype.addChild = function (child) {
        child.context = this.context;
        this.children.push(child);
    };

    Base.prototype.process = function () {
        for(var i in this.children){
            this.children[i].process();
        }
    };

    Base.prototype.print = function () {
        for(var i in this.children){
            this.children[i].print();
        }
    };


    return Base;
});