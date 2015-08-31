Object.prototype.mixin = function(module) {
  for(method in module.prototype){
      if(module.prototype.hasOwnProperty(method)) {
          this.prototype[method] = module.prototype[method];
      }
  }
};
var Tags = function() {};
Tags.prototype.listTags = function() {
    return [];
};
