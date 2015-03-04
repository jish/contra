"use strict";

(function (exports) {

  var Contra = exports.Contra = {};

  var a = 65,
      b = 66;
  var left = 37,
      up = 38,
      right = 39,
      down = 40;

  var handlers = [];
  var pattern = [up, up, down, down, left, right, left, right, b, a];
  var position = 0;

  var check = function check(evt) {
    if (pattern[position] === evt.keyCode) {
      position++;
    } else {
      position = 0;
    }

    if (position === pattern.length) {
      win();
      position = 0;
    }
  };

  var win = function win() {
    var body = document.getElementsByTagName("body")[0];
    body.className = body.className + " contra";

    for (var i = 0, l = handlers.length; i < l; i++) {
      handlers[i].call();
    }
  };

  var initialize = function initialize() {
    if (document.addEventListener) {
      document.addEventListener("keyup", check);
    } else if (document.attachEvent) {
      document.attachEvent("onkeypress", check);
    }
  };

  Contra.addHandler = function (handler) {
    handlers.push(handler);
  };

  initialize();
})(undefined);