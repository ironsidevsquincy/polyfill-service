Function.prototype.bind=function(a){var b=this,c=Array.prototype.slice.call(arguments,1),d=function(){},e=function(){return b.apply(this instanceof d&&a?this:a,Array.prototype.concat.apply(c,arguments))};return d.prototype=e.prototype=b.prototype,e};