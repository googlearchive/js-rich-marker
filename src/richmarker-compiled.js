function b(a){var c=a||{};this.f=this.c=!1;void 0==a.visible&&(a.visible=!0);void 0==a.shadow&&(a.shadow="7px -3px 5px rgba(88,88,88,0.7)");void 0==a.anchor&&(a.anchor=f.BOTTOM);this.setValues(c)}b.prototype=new google.maps.OverlayView;window.RichMarker=b;b.prototype.getVisible=function(){return this.get("visible")};b.prototype.getVisible=b.prototype.getVisible;b.prototype.setVisible=function(a){this.set("visible",a)};b.prototype.setVisible=b.prototype.setVisible;
b.prototype.O=function(){this.c&&(this.a.style.display=this.getVisible()?"":"none",this.draw())};b.prototype.visible_changed=b.prototype.O;b.prototype.M=function(a){this.set("flat",!!a)};b.prototype.setFlat=b.prototype.M;b.prototype.A=function(){return this.get("flat")};b.prototype.getFlat=b.prototype.A;b.prototype.I=function(){return this.get("width")};b.prototype.getWidth=b.prototype.I;b.prototype.H=function(){return this.get("height")};b.prototype.getHeight=b.prototype.H;
b.prototype.N=function(a){this.set("shadow",a);this.i()};b.prototype.setShadow=b.prototype.N;b.prototype.B=function(){return this.get("shadow")};b.prototype.getShadow=b.prototype.B;b.prototype.i=function(){this.c&&(this.a.style.boxShadow=this.a.style.webkitBoxShadow=this.a.style.MozBoxShadow=this.A()?"":this.B())};b.prototype.flat_changed=b.prototype.i;b.prototype.setZIndex=function(a){this.set("zIndex",a)};b.prototype.setZIndex=b.prototype.setZIndex;b.prototype.getZIndex=function(){return this.get("zIndex")};
b.prototype.getZIndex=b.prototype.getZIndex;b.prototype.P=function(){this.getZIndex()&&this.c&&(this.a.style.zIndex=this.getZIndex())};b.prototype.zIndex_changed=b.prototype.P;b.prototype.getDraggable=function(){return this.get("draggable")};b.prototype.getDraggable=b.prototype.getDraggable;b.prototype.setDraggable=function(a){this.set("draggable",!!a)};b.prototype.setDraggable=b.prototype.setDraggable;
b.prototype.u=function(){if(this.c)if(this.getDraggable()){if(this.o){for(var a=0,c;c=this.o[a];a++)google.maps.event.removeListener(c);this.o.length=0}h(this,this.a)}else k(this),l(this)};b.prototype.draggable_changed=b.prototype.u;b.prototype.getPosition=function(){return this.get("position")};b.prototype.getPosition=b.prototype.getPosition;b.prototype.setPosition=function(a){this.set("position",a)};b.prototype.setPosition=b.prototype.setPosition;b.prototype.J=function(){this.draw()};
b.prototype.position_changed=b.prototype.J;b.prototype.v=function(){return this.get("anchor")};b.prototype.getAnchor=b.prototype.v;b.prototype.K=function(a){this.set("anchor",a)};b.prototype.setAnchor=b.prototype.K;b.prototype.G=function(){this.draw()};b.prototype.anchor_changed=b.prototype.G;b.prototype.w=function(){return this.get("anchorOffset")};b.prototype.getAnchorOffset=b.prototype.w;b.prototype.L=function(a){this.set("anchorOffset",a)};b.prototype.setAnchorOffset=b.prototype.L;
b.prototype.F=function(){this.draw()};b.prototype.anchorOffset_changed=b.prototype.F;function m(a){var c=document.createElement("DIV");c.innerHTML=a;if(1==c.childNodes.length)return c.removeChild(c.firstChild);for(a=document.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);return a}function n(a){if(a)for(var c;c=a.firstChild;)a.removeChild(c)}b.prototype.setContent=function(a){this.set("content",a)};b.prototype.setContent=b.prototype.setContent;b.prototype.getContent=function(){return this.get("content")};
b.prototype.getContent=b.prototype.getContent;
b.prototype.s=function(){if(this.b){n(this.b);var a=this.getContent();if(a){"string"==typeof a&&(a=a.replace(/^\s*([\S\s]*)\b\s*$/,"$1"),a=m(a));this.b.appendChild(a);for(var c=this,a=this.b.getElementsByTagName("IMG"),d=0,e;e=a[d];d++)google.maps.event.addDomListener(e,"mousedown",function(a){c.getDraggable()&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1)}),google.maps.event.addDomListener(e,"load",function(){c.draw()});google.maps.event.trigger(this,"domready")}this.c&&this.draw()}};
b.prototype.content_changed=b.prototype.s;function p(a,c){if(a.c){var d="";if(-1!==navigator.userAgent.indexOf("Gecko/"))"dragging"==c&&(d="-moz-grabbing"),"dragready"==c&&(d="-moz-grab");else if("dragging"==c||"dragready"==c)d="move";"draggable"==c&&(d="pointer");a.a.style.cursor!=d&&(a.a.style.cursor=d)}}
function q(a,c){if(a.getDraggable()&&!a.f){a.f=!0;var d=a.getMap();a.C=d.get("draggable");d.set("draggable",!1);a.j=c.clientX;a.l=c.clientY;p(a,"dragready");a.a.style.MozUserSelect="none";a.a.style.KhtmlUserSelect="none";a.a.style.WebkitUserSelect="none";a.a.unselectable="on";a.a.onselectstart=function(){return!1};r(a);google.maps.event.trigger(a,"dragstart")}}
function t(a){a.getDraggable()&&a.f&&(a.f=!1,a.getMap().set("draggable",a.C),a.j=a.l=a.C=null,a.a.style.MozUserSelect="",a.a.style.KhtmlUserSelect="",a.a.style.WebkitUserSelect="",a.a.unselectable="off",a.a.onselectstart=function(){},u(a),p(a,"draggable"),google.maps.event.trigger(a,"dragend"),a.draw())}
function v(a,c){if(a.getDraggable()&&a.f){var d=a.j-c.clientX,e=a.l-c.clientY;a.j=c.clientX;a.l=c.clientY;d=parseInt(a.a.style.left,10)-d;e=parseInt(a.a.style.top,10)-e;a.a.style.left=d+"px";a.a.style.top=e+"px";var g=w(a),d=new google.maps.Point(d-g.width,e-g.height);a.setPosition(a.getProjection().fromDivPixelToLatLng(d));p(a,"dragging");google.maps.event.trigger(a,"drag")}else t(a)}function k(a){a.h&&(google.maps.event.removeListener(a.h),delete a.h);p(a,"")}
function h(a,c){c&&(a.h=google.maps.event.addDomListener(c,"mousedown",function(c){a.m=c.clientX;a.D=c.clientY;q(a,c)}),p(a,"draggable"))}
function r(a){a.a.setCapture?(a.a.setCapture(),a.g=[google.maps.event.addDomListener(a.a,"mousemove",function(c){v(a,c)},!0),google.maps.event.addDomListener(a.a,"mouseup",function(){t(a);a.a.releaseCapture()},!0)]):a.g=[google.maps.event.addDomListener(window,"mousemove",function(c){v(a,c)},!0),google.maps.event.addDomListener(window,"mouseup",function(){t(a)},!0)]}
function l(a){a.o=[google.maps.event.addDomListener(a.a,"mouseup",function(c){google.maps.event.trigger(a,"mouseup",c)}),google.maps.event.addDomListener(a.a,"mousedown",function(c){a.m=c.clientX;a.D=c.clientY;google.maps.event.trigger(a,"mousedown",c)})]}function u(a){if(a.g){for(var c=0,d;d=a.g[c];c++)google.maps.event.removeListener(d);a.g.length=0}}
function w(a){var c=a.v();if("object"==typeof c)return c;var d=new google.maps.Size(0,0);if(!a.b)return d;var e=a.b.offsetWidth,g=a.b.offsetHeight;switch(c){case f.TOP:d.width=-e/2;break;case f.TOP_RIGHT:d.width=-e;break;case f.LEFT:d.height=-g/2;break;case f.MIDDLE:d.width=-e/2;d.height=-g/2;break;case f.RIGHT:d.width=-e;d.height=-g/2;break;case f.BOTTOM_LEFT:d.height=-g;break;case f.BOTTOM:d.width=-e/2;d.height=-g;break;case f.BOTTOM_RIGHT:d.width=-e,d.height=-g}if(a=a.w())d.width+=a.x,d.height+=
a.y;return d}
b.prototype.onAdd=function(){this.a||(this.a=document.createElement("DIV"),this.a.style.position="absolute");this.getZIndex()&&(this.a.style.zIndex=this.getZIndex());this.a.style.display=this.getVisible()?"":"none";if(!this.b){this.b=document.createElement("DIV");this.a.appendChild(this.b);var a=this;google.maps.event.addDomListener(this.b,"click",function(c){(!a.m||4>Math.abs(a.m-c.clientX)&&4>Math.abs(a.D-c.clientY))&&google.maps.event.trigger(a,"click",c)});google.maps.event.addDomListener(this.b,"mouseover",
function(c){google.maps.event.trigger(a,"mouseover",c)});google.maps.event.addDomListener(this.b,"mouseout",function(c){google.maps.event.trigger(a,"mouseout",c)})}this.c=!0;this.s();this.i();this.u();var c=this.getPanes();c&&c.overlayMouseTarget.appendChild(this.a);google.maps.event.trigger(this,"ready")};b.prototype.onAdd=b.prototype.onAdd;
b.prototype.draw=function(){if(this.c&&!this.f){var a=this.getProjection();if(a){var c=this.get("position"),a=a.fromLatLngToDivPixel(c),c=w(this);this.a.style.top=a.y+c.height+"px";this.a.style.left=a.x+c.width+"px";a=this.b.offsetHeight;c=this.b.offsetWidth;c!=this.get("width")&&this.set("width",c);a!=this.get("height")&&this.set("height",a)}}};b.prototype.draw=b.prototype.draw;b.prototype.onRemove=function(){this.a&&this.a.parentNode&&this.a.parentNode.removeChild(this.a);k(this)};
b.prototype.onRemove=b.prototype.onRemove;var f={TOP_LEFT:1,TOP:2,TOP_RIGHT:3,LEFT:4,MIDDLE:5,RIGHT:6,BOTTOM_LEFT:7,BOTTOM:8,BOTTOM_RIGHT:9};window.RichMarkerPosition=f;
