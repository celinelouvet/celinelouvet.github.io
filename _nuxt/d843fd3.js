(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{365:function(t,e,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(90).default)("3eed363c",content,!0,{sourceMap:!1})},390:function(t,e,n){"use strict";n(365)},391:function(t,e,n){var r=n(89)(!1);r.push([t.i,".main-title[data-v-5a8bf79c]{background:linear-gradient(180deg,rgba(var(--cv-blue-rgb),1),rgba(var(--cv-blue-rgb),1) 93%,rgba(var(--cv-blue-rgb),0) 0,rgba(var(--cv-blue-rgb),0) 96%,rgba(var(--cv-blue-rgb),1) 0);color:#fff;text-transform:uppercase;font-family:var(--narrow-font);padding-left:var(--summary-width)}.main-title .name[data-v-5a8bf79c]{font-size:3.5em;padding-top:.5em;padding-bottom:.25em}.main-title .job-title[data-v-5a8bf79c]{font-size:2.25em;padding-bottom:1em}.summary[data-v-5a8bf79c]{background-color:var(--cv-gray);width:var(--summary-width)}.summary .picture[data-v-5a8bf79c]{margin-top:calc(var(--photo-size)*-0.5)}.summary .section[data-v-5a8bf79c]{margin:1.5em 1.5em 0}.content[data-v-5a8bf79c]{background-color:#fff}",""]),t.exports=r},393:function(t,e,n){"use strict";n.r(e);n(176);var r=n(28),c=n(35),o=n(69),l=n(109),f=n(52),d=n(36),v=(n(5),n(302)),m=n(303);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},_=function(t){Object(o.a)(n,t);var e=C(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"cv",get:function(){return m.a}}]),n}(v.c),h=_=y([v.a],_),j=(n(390),n(76)),component=Object(j.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"d-block d-md-none full",attrs:{fluid:""}},[n("div",{staticClass:"main-title"},[n("h1",{staticClass:"name"},[t._v(t._s(t.cv.firstname)+" "+t._s(t.cv.lastname))]),t._v(" "),n("h2",{staticClass:"job-title"},[t._v(t._s(t.cv.title))])]),t._v(" "),n("SummaryInfos"),t._v(" "),n("SummarySkills"),t._v(" "),n("ContentDescription"),t._v(" "),n("ContentExperiences"),t._v(" "),n("ContentTalks"),t._v(" "),n("ContentEducations"),t._v(" "),n("ContentCertifications")],1)}),[],!1,null,"5a8bf79c",null);e.default=component.exports;installComponents(component,{SummaryInfos:n(366).default,SummarySkills:n(367).default,ContentDescription:n(368).default,ContentExperiences:n(392).default,ContentTalks:n(369).default,ContentEducations:n(370).default,ContentCertifications:n(371).default})},404:function(t,e,n){"use strict";n.r(e);var r=n(8),c=n(395),o=n(393),l=r.default.extend({components:{DesktopCV:c.default,MobileCV:o.default}}),f=n(76),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("DesktopCV",{staticClass:"full"}),t._v(" "),n("MobileCV",{staticClass:"full"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DesktopCV:n(395).default,MobileCV:n(393).default})}}]);