!function(){function a(a,b){return new Function("media","return "+b.replace(/(device)-([\w.]+)/g,"$1.$2").replace(/([\w.]+)\s*:/g,"media.$1 ===").replace(/min-([\w.]+)\s*===/g,"$1 >=").replace(/max-([\w.]+)\s*===/g,"$1 <=").replace(/all|screen/g,"1").replace(/print/g,"0").replace(/,/g,"||").replace(/and/g,"&&").replace(/(\d+)(cm|em|in|mm|pc|pt|px|rem)/,function(a,b,c){return b*("cm"===c?37.7952:"em"===c||"rem"===c?16:"in"===c?96:"mm"===c?3.77952:"pc"===c?16:"pt"===c?96/72:1)}))({width:a.innerWidth,height:a.innerHeight,orientation:a.orientation||"landscape",device:{width:a.screen.width,height:a.screen.height,orientation:a.screen.orientation||a.orientation||"landscape"}})}function b(){this.matches=!1,this.media="invalid"}b.prototype.addListener=function(a){this.addListener.listeners.push(a)},b.prototype.removeListener=function(a){this.addListener.listeners.splice(this.addListener.listeners.indexof(a),1)},window.matchMedia=Window.prototype.matchMedia=function(c){var d=this,e=new b;return e.media=String(c),e.matches=a(d,e.media),e.addListener.listeners=[],d.addEventListener("resize",function(){var b=[].concat(e.addListener.listeners),c=a(d,e.media);if(c!=e.matches){e.matches=c;for(var f=0,g=b.length;g>f;++f)b[f].call(d,e)}}),e}}();