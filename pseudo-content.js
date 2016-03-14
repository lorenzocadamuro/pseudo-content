"use strict";

(function(root, factory) {
  // AMD && CommonJS support
  if (typeof define === 'function' && define['amd']) {
    define(function() { return factory; });
  } else if (typeof module !== 'undefined' && module['exports']) {
    module['exports'] = factory;
  } else if (typeof root !== 'undefined') {
    root['pseudoContent'] = factory;
  }
})(this, function(elm, pseudoelement) {
  elm = (function(elm) {
    if (elm) {
      if (typeof elm === 'object' && elm.nodeType === 1) {
        return elm;
      } else if (typeof elm === 'string') {
        return document.querySelector(elm);
      } else {
        return null;
      }
    }
  })(elm);

  switch (pseudoelement) {
    case 'before': pseudoelement = ':before'; break;
    case 'after': pseudoelement = ':after'; break;
    default: pseudoelement = ':before';
  }

  var content = null;

  return {
    get: function() {
      if (elm) {
        content = window.getComputedStyle(elm, pseudoelement).getPropertyValue("content").slice(1, -1);
      }
      return content;
    },
    is: function(value) {
      return value === this.get() ? true : false;
    }
  };
});
