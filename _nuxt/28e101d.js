/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{302:function(t,e,n){"use strict";n.d(e,"a",(function(){return M})),n.d(e,"c",(function(){return o.default})),n.d(e,"b",(function(){return x}));var o=n(8);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function l(t,e){y(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){y(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){y(t,e,n)}))}function y(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(o){var r=n?Reflect.getOwnMetadata(o,e,n):Reflect.getOwnMetadata(o,e);n?Reflect.defineMetadata(o,r,t,n):Reflect.defineMetadata(o,r,t)}))}var v={__proto__:[]}instanceof Array;function m(t){return function(e,n,o){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof o&&(o=void 0),r.__decorators__.push((function(e){return t(e,n,o)}))}}function h(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var o in t.$options.props)t.hasOwnProperty(o)||n.push(o);n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var data=new e;e.prototype._init=n;var o={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(o[t]=data[t])})),o}var _=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(_.indexOf(t)>-1)e[t]=n[t];else{var o=Object.getOwnPropertyDescriptor(n,t);void 0!==o.value?"function"==typeof o.value?(e.methods||(e.methods={}))[t]=o.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,o.value)}}):(o.get||o.set)&&((e.computed||(e.computed={}))[t]={get:o.get,set:o.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return h(this,t)}});var r=t.__decorators__;r&&(r.forEach((function(t){return t(e)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),y=f instanceof o.default?f.constructor:o.default,v=y.extend(e);return R(v,t,y),d()&&l(v,t),v}var j={prototype:!0,arguments:!0,callee:!0,caller:!0};function R(t,e,n){Object.getOwnPropertyNames(e).forEach((function(o){if(!j[o]){var c=Object.getOwnPropertyDescriptor(t,o);if(!c||c.configurable){var f,d,l=Object.getOwnPropertyDescriptor(e,o);if(!v){if("cid"===o)return;var y=Object.getOwnPropertyDescriptor(n,o);if(f=l.value,d=r(f),null!=f&&("object"===d||"function"===d)&&y&&y.value===l.value)return}0,Object.defineProperty(t,o,l)}}}))}function w(t){return"function"==typeof t?O(t):function(e){return O(e,t)}}w.registerHooks=function(t){_.push.apply(_,f(t))};var M=w;var P="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function $(t,e,n){if(P&&!Array.isArray(t)&&"function"!=typeof t&&!t.hasOwnProperty("type")&&void 0===t.type){var o=Reflect.getMetadata("design:type",e,n);o!==Object&&(t.type=o)}}function x(t){return void 0===t&&(t={}),function(e,n){$(t,e,n),m((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}},312:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"years":" | 1 an | {n} ans","months":" | 1 mois | {n} mois","today":"aujourd\'hui"}}'),delete t.options._Ctor}},313:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"years":" | 1 year | {n} years","months":" | 1 month | {n} months","today":"today"}}'),delete t.options._Ctor}},325:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(90).default)("22bd6694",content,!0,{sourceMap:!1})},355:function(t,e,n){"use strict";n(325)},356:function(t,e,n){var o=n(89)(!1);o.push([t.i,".siderole[data-v-8f3d6dfe]{padding-left:1.5em;font-size:.9em}.company[data-v-8f3d6dfe]{font-size:2.1em}.cv-small[data-v-8f3d6dfe]{font-size:.85em;color:var(--bs-gray-600)}.description[data-v-8f3d6dfe]{margin-bottom:1em}",""]),t.exports=o},357:function(t,e,n){"use strict";var o=n(312),r=n.n(o);e.default=r.a},358:function(t,e,n){"use strict";var o=n(313),r=n.n(o);e.default=r.a},373:function(t,e,n){"use strict";n.r(e);n(176);var o=n(28),r=n(35),c=n(69),f=n(109),d=n(52),l=n(36),y=(n(5),n(302));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},h=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"from",get:function(){return this.$moment(this.sideRole.from).format("MMM YYYY")}},{key:"to",get:function(){return this.sideRole.to?this.$moment(this.sideRole.to).format("MMM YYYY"):this.$t("today")}},{key:"diff",get:function(){var t=this.$moment(this.sideRole.from),e=this.$moment(this.sideRole.to),n=this.$moment.preciseDiff(t,e,!0),o=n.years,r=n.months,c=n.days,f=(n.hours>=12?c+1:c)>=15?r+1:r;return{months:12===f?0:f,years:12===f?o+1:o}}}]),n}(y.c);m([Object(y.b)({default:{}})],h.prototype,"sideRole",void 0);var _=h=m([y.a],h),O=(n(355),n(76)),j=n(357),R=n(358),component=Object(O.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"siderole"},[n("div",[n("span",{staticClass:"h4 company"},[t._v(t._s(t.sideRole.company))]),t._v(" "),n("span",{staticClass:"cv-small"},[t._v(t._s(t.from)+" - "+t._s(t.to))]),t._v(" "),0===t.diff.years&&0!==t.diff.months?n("span",{staticClass:"cv-small"},[t._v("("+t._s(t.$tc("months",t.diff.months))+")")]):0!==t.diff.years&&0===t.diff.months?n("span",{staticClass:"cv-small"},[t._v("("+t._s(t.$tc("years",t.diff.years))+")")]):n("span",{staticClass:"cv-small"},[t._v("("+t._s(t.$tc("years",t.diff.years))+" "+t._s(t.$tc("months",t.diff.months))+")")])]),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(t.sideRole.description))])])}),[],!1,null,"8f3d6dfe",null);"function"==typeof j.default&&Object(j.default)(component),"function"==typeof R.default&&Object(R.default)(component);e.default=component.exports}}]);