(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{312:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"years":" | 1 an | {n} ans","months":" | 1 mois | {n} mois","today":"aujourd\'hui"}}'),delete t.options._Ctor}},313:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"years":" | 1 year | {n} years","months":" | 1 month | {n} months","today":"today"}}'),delete t.options._Ctor}},325:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(90).default)("22bd6694",content,!0,{sourceMap:!1})},328:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"project":"Projet|Projets","tasks":"Tâches","stacks":"Technos","years":" | 1 an | {n} ans","months":" | 1 mois | {n} mois","remote":"Télétravail à temps plein","today":"aujourd\'hui"}}'),delete t.options._Ctor}},329:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"project":"Project|Projects","tasks":"Tasks","stacks":"Stacks","years":" | 1 year | {n} years","months":" | 1 month | {n} months","remote":"Full-time remote","today":"today"}}'),delete t.options._Ctor}},354:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(90).default)("4d845e56",content,!0,{sourceMap:!1})},355:function(t,e,n){"use strict";n(325)},356:function(t,e,n){var o=n(89)(!1);o.push([t.i,".siderole[data-v-8f3d6dfe]{padding-left:1.5em;font-size:.9em}.company[data-v-8f3d6dfe]{font-size:2.1em}.cv-small[data-v-8f3d6dfe]{font-size:.85em;color:var(--bs-gray-600)}.description[data-v-8f3d6dfe]{margin-bottom:1em}",""]),t.exports=o},357:function(t,e,n){"use strict";var o=n(312),r=n.n(o);e.default=r.a},358:function(t,e,n){"use strict";var o=n(313),r=n.n(o);e.default=r.a},372:function(t,e,n){"use strict";n.r(e);n(176);var o=n(28),r=n(35),c=n(69),f=n(109),l=n(52),d=n(36),v=(n(5),n(384),n(14),n(21),n(3),n(53),n(19),n(302));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var _=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},h=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"remote",get:function(){return this.job.remote?"- ".concat(this.$t("remote")):""}},{key:"projects",get:function(){var t,e;return null!==(e=null===(t=this.job.projects)||void 0===t?void 0:t.map((function(t){return[t.name,t.description]})).flat())&&void 0!==e?e:[]}},{key:"technos",get:function(){var t,e;return null!==(e=null===(t=this.job.stacks)||void 0===t?void 0:t.map((function(t){return[t.type,t.technos.join(", ")]})).flat())&&void 0!==e?e:[]}},{key:"from",get:function(){return this.$moment(this.job.from).format("MMM YYYY")}},{key:"to",get:function(){return this.job.to?this.$moment(this.job.to).format("MMM YYYY"):this.$t("today")}},{key:"diff",get:function(){var t=this.$moment(this.job.from),e=this.$moment(this.job.to),n=this.$moment.preciseDiff(t,e,!0),o=n.years,r=n.months,c=n.days,f=(n.hours>=12?c+1:c)>=15?r+1:r;return{months:12===f?0:f,years:12===f?o+1:o}}}]),n}(v.c);_([Object(v.b)({default:{}})],h.prototype,"job",void 0);var y=h=_([v.a],h),j=(n(386),n(76)),O=n(388),k=n(389),component=Object(j.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"job-container"},[n("div",{staticClass:"header"},[n("span",{staticClass:"h3 company"},[t._v(t._s(t.job.company))]),t._v(" "),n("span",{staticClass:"cv-small"},[t._v(t._s(t.from)+" - "+t._s(t.to))]),t._v(" "),0===t.diff.years&&0!==t.diff.months?n("span",{staticClass:"cv-small"},[t._v("("+t._s(t.$tc("months",t.diff.months))+")")]):t._e(),t._v(" "),0!==t.diff.years&&0===t.diff.months?n("span",{staticClass:"cv-small"},[t._v("("+t._s(t.$tc("years",t.diff.years))+")")]):n("span",{staticClass:"cv-small"},[t._v("("+t._s(t.$tc("years",t.diff.years))+" "+t._s(t.$tc("months",t.diff.months))+")")]),t._v(" "),n("span",{staticClass:"cv-small"},[t._v(t._s(t.remote))])]),t._v(" "),t.job.role?n("h4",[t._v(t._s(t.job.role))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(t.job.description))]),t._v(" "),t.job.projects?n("div",{staticClass:"projects"},[n("h4",[t._v(t._s(t.$tc("project",t.job.projects.length)))]),t._v(" "),n("div",{staticClass:"grid"},t._l(t.projects,(function(e){return n("div",{key:e,staticClass:"grid-item"},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]):t._e(),t._v(" "),t.job.tasks?n("div",{staticClass:"tasks"},[n("h4",[t._v(t._s(t.$t("tasks")))]),t._v(" "),n("ul",t._l(t.job.tasks,(function(e){return n("li",{key:e.name},[t._v("\n        "+t._s(e.name)+"\n        "),e.subtasks?n("ul",t._l(e.subtasks,(function(e){return n("li",{key:e.name},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0):t._e()])})),0)]):t._e(),t._v(" "),t.job.sideRoles?n("div",{staticClass:"sideroles"},t._l(t.job.sideRoles,(function(t){return n("ContentSideRole",{key:t.company+"-"+t.from,attrs:{"side-role":t}})})),1):t._e(),t._v(" "),t.job.stacks?n("div",{staticClass:"stacks"},[n("h4",[t._v(t._s(t.$t("stacks")))]),t._v(" "),1===t.job.stacks.length?n("div",{attrs:{set:t.stack=t.job.stacks[0]}},[t._v("\n      "+t._s(t.stack.technos.join(", "))+"\n    ")]):n("div",{staticClass:"grid"},t._l(t.technos,(function(e){return n("div",{key:e,staticClass:"grid-item"},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]):t._e(),t._v(" "),t.job.jobs?n("div",{staticClass:"subjobs"},t._l(t.job.jobs,(function(t){return n("ContentExperienceDetails",{key:t.company+"-"+t.from,staticClass:"subjob",attrs:{job:t}})})),1):t._e()])}),[],!1,null,"fe9fa7ae",null);"function"==typeof O.default&&Object(O.default)(component),"function"==typeof k.default&&Object(k.default)(component);e.default=component.exports;installComponents(component,{ContentSideRole:n(373).default,ContentExperienceDetails:n(372).default})},373:function(t,e,n){"use strict";n.r(e);n(176);var o=n(28),r=n(35),c=n(69),f=n(109),l=n(52),d=n(36),v=(n(5),n(302));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var _=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},h=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"from",get:function(){return this.$moment(this.sideRole.from).format("MMM YYYY")}},{key:"to",get:function(){return this.sideRole.to?this.$moment(this.sideRole.to).format("MMM YYYY"):this.$t("today")}},{key:"diff",get:function(){var t=this.$moment(this.sideRole.from),e=this.$moment(this.sideRole.to),n=this.$moment.preciseDiff(t,e,!0),o=n.years,r=n.months,c=n.days,f=(n.hours>=12?c+1:c)>=15?r+1:r;return{months:12===f?0:f,years:12===f?o+1:o}}}]),n}(v.c);_([Object(v.b)({default:{}})],h.prototype,"sideRole",void 0);var y=h=_([v.a],h),j=(n(355),n(76)),O=n(357),k=n(358),component=Object(j.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"siderole"},[n("div",[n("span",{staticClass:"h4 company"},[t._v(t._s(t.sideRole.company))]),t._v(" "),n("span",{staticClass:"cv-small"},[t._v(t._s(t.from)+" - "+t._s(t.to))]),t._v(" "),0===t.diff.years&&0!==t.diff.months?n("span",{staticClass:"cv-small"},[t._v("("+t._s(t.$tc("months",t.diff.months))+")")]):0!==t.diff.years&&0===t.diff.months?n("span",{staticClass:"cv-small"},[t._v("("+t._s(t.$tc("years",t.diff.years))+")")]):n("span",{staticClass:"cv-small"},[t._v("("+t._s(t.$tc("years",t.diff.years))+" "+t._s(t.$tc("months",t.diff.months))+")")])]),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(t.sideRole.description))])])}),[],!1,null,"8f3d6dfe",null);"function"==typeof O.default&&Object(O.default)(component),"function"==typeof k.default&&Object(k.default)(component);e.default=component.exports},382:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"title":"Expériences"}}'),delete t.options._Ctor}},383:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"Experience"}}'),delete t.options._Ctor}},384:function(t,e,n){"use strict";var o=n(9),r=n(385),c=n(47),f=n(55),l=n(70),d=n(136);o({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=f(e),o=d(e,0);return o.length=r(o,e,e,n,0,void 0===t?1:l(t)),o}})},385:function(t,e,n){"use strict";var o=n(7),r=n(110),c=n(55),f=n(40),l=o.TypeError,d=function(t,e,source,n,o,v,m,_){for(var element,h,y=o,j=0,O=!!m&&f(m,_);j<n;){if(j in source){if(element=O?O(source[j],j,e):source[j],v>0&&r(element))h=c(element),y=d(t,e,element,h,y,v-1)-1;else{if(y>=9007199254740991)throw l("Exceed the acceptable array length");t[y]=element}y++}j++}return y};t.exports=d},386:function(t,e,n){"use strict";n(354)},387:function(t,e,n){var o=n(89)(!1);o.push([t.i,'.h4[data-v-fe9fa7ae],h4[data-v-fe9fa7ae]{font-size:1.6em}.job-container[data-v-fe9fa7ae]{margin-bottom:3em}.company[data-v-fe9fa7ae]{font-size:2.1em}.subjob>.header .company[data-v-fe9fa7ae]:before{content:"●";margin-left:-1.28em;padding-right:.7em;font-family:"Glyphicons Halflings";color:var(--bs-gray-400)}.cv-small[data-v-fe9fa7ae]{font-size:.85em;color:var(--bs-gray-600)}.description[data-v-fe9fa7ae],.projects[data-v-fe9fa7ae],.sideroles[data-v-fe9fa7ae],.stacks[data-v-fe9fa7ae],.tasks[data-v-fe9fa7ae]{margin-bottom:1em}.grid[data-v-fe9fa7ae]{display:grid;grid-template-columns:110px auto;grid-gap:.75em;gap:.75em;padding-left:1.5em}.grid-item[data-v-fe9fa7ae]:nth-child(odd){font-weight:700}.subjobs[data-v-fe9fa7ae]{border-left:2px solid var(--bs-gray-400)}.subjob[data-v-fe9fa7ae]{padding-left:2em;font-size:.9em}',""]),t.exports=o},388:function(t,e,n){"use strict";var o=n(328),r=n.n(o);e.default=r.a},389:function(t,e,n){"use strict";var o=n(329),r=n.n(o);e.default=r.a},392:function(t,e,n){"use strict";n.r(e);n(176);var o=n(28),r=n(35),c=n(69),f=n(109),l=n(52),d=n(36),v=(n(5),n(302)),m=n(303);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var h=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=_(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"cv",get:function(){return m.a}},{key:"sort",value:function(t){var e=this;return t.sort((function(t,n){var o=t.from,r=n.from;return-e.$moment(o).diff(e.$moment(r))}))}}]),n}(v.c),j=y=h([v.a],y),O=n(76),k=n(401),C=n(402),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.$t("title")))]),t._v(" "),t._l(t.cv.experiences,(function(t){return n("ContentExperienceDetails",{key:t.company+"-"+t.from,attrs:{job:t}})}))],2)}),[],!1,null,"2d523d3c",null);"function"==typeof k.default&&Object(k.default)(component),"function"==typeof C.default&&Object(C.default)(component);e.default=component.exports;installComponents(component,{ContentExperienceDetails:n(372).default})},401:function(t,e,n){"use strict";var o=n(382),r=n.n(o);e.default=r.a},402:function(t,e,n){"use strict";var o=n(383),r=n.n(o);e.default=r.a}}]);