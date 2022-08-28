import $ from '../core';

$.prototype.addAttribute = function(attributeName, value) {
    for(let i = 0; i < this.length; i++){
      if(!attributeName){
        return this;
      }
      if (!value) {
         this[i].setAttribute(attributeName, value = '');
      }
      this[i].setAttribute(attributeName, value);
    }
    return this;
  };

  $.prototype.showAttribute = function(attributeName) {
      for(let i = 0; i < this.length; i++){
       if(!this[i].getAttribute(attributeName)){
        continue;
       };
       return this[i].getAttribute(attributeName);
      }
    };

  $.prototype.deleteAttribute = function(attributeName) {
    if(!attributeName){
      return this;
    }
      for(let i = 0; i < this.length; i++){ 
        this[i].removeAttribute(attributeName);
      }
      return this;
    };

    $.prototype.toggleAttr = function (name, value) {
      for (let i = 0; i < this.length; i++) {
          if (this[i].hasAttribute(name)) {
              this[i].removeAttribute(name);
          } else if (name && !value) {
              this[i].setAttribute(name, '');
          } else {
              this[i].setAttribute(name, value);
          }
      }
      return this;
  };