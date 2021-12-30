/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{302:function(t,e,r){"use strict";r.d(e,"a",(function(){return P})),r.d(e,"c",(function(){return n.default})),r.d(e,"b",(function(){return E}));var n=r(8);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function d(t,e){y(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(r){y(t.prototype,e.prototype,r)})),Object.getOwnPropertyNames(e).forEach((function(r){y(t,e,r)}))}function y(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var v={__proto__:[]}instanceof Array;function h(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push((function(e){return t(e,r,n)}))}}function O(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var data=new e;e.prototype._init=r;var n={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(n[t]=data[t])})),n}var m=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(m.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,n.value)}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return O(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),y=f instanceof n.default?f.constructor:n.default,v=y.extend(e);return w(v,t,y),l()&&d(v,t),v}var j={prototype:!0,arguments:!0,callee:!0,caller:!0};function w(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!j[n]){var c=Object.getOwnPropertyDescriptor(t,n);if(!c||c.configurable){var f,l,d=Object.getOwnPropertyDescriptor(e,n);if(!v){if("cid"===n)return;var y=Object.getOwnPropertyDescriptor(r,n);if(f=d.value,l=o(f),null!=f&&("object"===l||"function"===l)&&y&&y.value===d.value)return}0,Object.defineProperty(t,n,d)}}}))}function R(t){return"function"==typeof t?_(t):function(e){return _(e,t)}}R.registerHooks=function(t){m.push.apply(m,f(t))};var P=R;var M="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function x(t,e,r){if(M&&!Array.isArray(t)&&"function"!=typeof t&&!t.hasOwnProperty("type")&&void 0===t.type){var n=Reflect.getMetadata("design:type",e,r);n!==Object&&(t.type=n)}}function E(t){return void 0===t&&(t={}),function(e,r){x(t,e,r),h((function(e,r){(e.props||(e.props={}))[r]=t}))(e,r)}}},342:function(t,e,r){var content=r(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(90).default)("0ae82a74",content,!0,{sourceMap:!1})},376:function(t,e,r){"use strict";r(342)},377:function(t,e,r){var n=r(89)(!1);n.push([t.i,".photo{width:var(--photo-size);height:var(--photo-size)}",""]),t.exports=n},397:function(t,e,r){"use strict";r.r(e);r(176);var n=r(28),o=r(69),c=r(109),f=r(52),l=r(36),d=(r(5),r(302));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var v=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},h=function(t){Object(o.a)(r,t);var e=y(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.c),O=h=v([d.a],h),m=(r(376),r(76)),component=Object(m.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex horizontal justify-center"},[e("b-avatar",{staticClass:"photo",attrs:{src:"photo.jpg",size:"200px","aria-label":"photo"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);