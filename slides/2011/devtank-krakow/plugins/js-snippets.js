/**
 * JS Snippets 0.0.1;
 *
 * A plugin for CSSS that evals JS code from textareas.
 * 
 * by marcoos
*/

(function() {

function insertAfter(element, refElement) {
    var parentNode = refElement.parentNode;
    if (refElement.nextSibling) {
        parentNode.insertBefore(element, refElement.nextSibling);
    } else {
        parentNode.appendChild(element);
    }
}

if (!Array.forEach) {
    Array.forEach = function (obj, fun /*, thisp*/) {
        var thisp = arguments[2];
        return Array.prototype.forEach.call(obj, fun, thisp);
    };
}

var self = window.JSSnippet = function(element) {
    var me = this,
        activator = document.createElement("a");
        
    this.element = element;
    element.spellcheck = false;
    
    activator.innerHTML = "Uruchom";
    activator.href = "#";
    activator.addEventListener("click", function (e) {
        e.preventDefault();
        me.run();
    }, false);
    
    insertAfter(activator, element);
}

self.prototype = {
    run: function () {
        var fun = new Function(this.element.value);
        fun();
    }
};

self.applyTo = function (selector) {
    
    Array.forEach(document.querySelectorAll(selector), function (elem) {
        new JSSnippet(elem);
    });
};


})();
