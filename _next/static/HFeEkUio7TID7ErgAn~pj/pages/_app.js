(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{296:function(e,t,r){"use strict";var n=r(11);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=y,t.default=void 0;var o=n(r(66)),a=n(r(15)),i=n(r(16)),u=n(r(25)),c=n(r(26)),l=n(r(27)),f=n(r(23)),s=n(r(1)),p=n(r(9)),d=n(r(297)),h=function(e){function t(){return(0,a.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return null}}]),t}(s.default.Component);(0,f.default)(h,"contextTypes",{headManager:p.default.object});var v="next-head";function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return[s.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var m=["name","httpEquiv","charSet","itemProp","property"],g=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var b=(0,d.default)(function(e){return e.map(function(e){return s.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return s.default.Fragment&&t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(y("")).filter(Boolean).filter((t=new o.default,r=new o.default,n=new o.default,a={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(r.has(e.type))return!1;r.add(e.type);break;case"meta":for(var i=0,u=m.length;i<u;i++){var c=m[i];if(e.props.hasOwnProperty(c))if("charSet"===c){if(n.has(c))return!1;n.add(c)}else{var l=e.props[c],f=a[c]||new o.default;if(f.has(l)&&-1===g.indexOf(l))return!1;f.add(l),a[c]=f}}}return!0})).reverse().map(function(e,t){var r=(e.props&&e.props.className?e.props.className+" ":"")+v,n=e.key||t;return s.default.cloneElement(e,{key:n,className:r})});var t,r,n,a},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(h);t.default=b},297:function(e,t,r){"use strict";var n=r(35),o=r(11);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var o,y=new d.default;function m(n){o=e((0,p.default)(y)),g.canUseDOM?t.call(n,o):r&&(o=r(o))}var g=function(e){function t(e){var r;return(0,a.default)(this,t),r=(0,i.default)(this,(0,u.default)(t).call(this,e)),t.canUseDOM||(y.add((0,f.default)((0,f.default)(r))),m((0,f.default)((0,f.default)(r)))),r}return(0,l.default)(t,e),(0,c.default)(t,null,[{key:"peek",value:function(){return o}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,y.clear(),e}}]),(0,c.default)(t,[{key:"componentDidMount",value:function(){y.add(this),m(this)}},{key:"componentDidUpdate",value:function(){m(this)}},{key:"componentWillUnmount",value:function(){y.delete(this),m(this)}},{key:"render",value:function(){return h.default.createElement(n,null,this.props.children)}}]),t}(h.Component);return(0,s.default)(g,"canUseDOM","undefined"!=typeof window),(0,s.default)(g,"contextTypes",n.contextTypes),(0,s.default)(g,"displayName","SideEffect(".concat((0,v.getDisplayName)(n),")")),g}};var a=o(r(15)),i=o(r(25)),u=o(r(26)),c=o(r(16)),l=o(r(27)),f=o(r(67)),s=o(r(23)),p=o(r(298)),d=o(r(66)),h=n(r(1)),v=r(37)},298:function(e,t,r){var n=r(299),o=r(300),a=r(308);e.exports=function(e){return n(e)||o(e)||a()}},299:function(e,t,r){var n=r(262);e.exports=function(e){if(n(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},300:function(e,t,r){var n=r(301),o=r(305);e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}},301:function(e,t,r){e.exports=r(302)},302:function(e,t,r){r(36),r(303),e.exports=r(3).Array.from},303:function(e,t,r){"use strict";var n=r(33),o=r(10),a=r(51),i=r(286),u=r(287),c=r(72),l=r(304),f=r(261);o(o.S+o.F*!r(290)(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,o,s,p=a(e),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,m=0,g=f(p);if(y&&(v=n(v,h>2?arguments[2]:void 0,2)),null==g||d==Array&&u(g))for(r=new d(t=c(p.length));t>m;m++)l(r,m,y?v(p[m],m):p[m]);else for(s=g.call(p),r=new d;!(o=s.next()).done;m++)l(r,m,y?i(s,v,[o.value,m],!0):o.value);return r.length=m,r}})},304:function(e,t,r){"use strict";var n=r(22),o=r(63);e.exports=function(e,t,r){t in e?n.f(e,t,o(0,r)):e[t]=r}},305:function(e,t,r){e.exports=r(306)},306:function(e,t,r){r(53),r(36),e.exports=r(307)},307:function(e,t,r){var n=r(74),o=r(14)("iterator"),a=r(52);e.exports=r(3).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(n(t))}},308:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},309:function(e,t,r){"use strict";var n=r(35),o=r(11);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(310)),i=o(r(77)),u=o(r(15)),c=o(r(16)),l=o(r(25)),f=o(r(26)),s=o(r(27)),p=o(r(67)),d=o(r(23)),h=r(293),v=n(r(1)),y=(o(r(9)),n(r(65))),m=r(37);var g=function(e){function t(){var e,r,n,o,a,c;(0,u.default)(this,t);for(var s=arguments.length,v=new Array(s),g=0;g<s;g++)v[g]=arguments[g];return r=(0,l.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(v))),(0,d.default)((0,p.default)((0,p.default)(r)),"formatUrls",(n=function(e,t){return{href:e&&"object"===(0,i.default)(e)?(0,h.format)(e):e,as:t&&"object"===(0,i.default)(t)?(0,h.format)(t):t}},o=null,a=null,c=null,function(e,t){if(e===o&&t===a)return c;var r=n(e,t);return o=e,a=t,c=r,r})),(0,d.default)((0,p.default)((0,p.default)(r)),"linkClicked",function(e){var t=e.currentTarget,n=t.nodeName,o=t.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=r.formatUrls(r.props.href,r.props.as),i=a.href,u=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var c=window.location.pathname;i=(0,h.resolve)(c,i),u=u?(0,h.resolve)(c,u):i,e.preventDefault();var l=r.props.scroll;null==l&&(l=u.indexOf("#")<0);var f=r.props.replace?"replace":"push";y.default[f](i,u,{shallow:r.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){r.props.onError&&r.props.onError(e)})}}}),r}return(0,s.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=(0,h.resolve)(e,t);y.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=v.default.createElement("a",null,t));var a=v.Children.only(t),i={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=(0,y._rewriteUrlForNextExport)(i.href)),v.default.cloneElement(a,i)}}]),t}(v.Component);t.default=g},310:function(e,t,r){e.exports=r(311)},311:function(e,t,r){var n=r(3),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},493:function(e,t,r){e.exports=r(638)},531:function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},532:function(e,t,r){e.exports=r(296)},533:function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=f(r(1)),i=f(r(640)),u=f(r(643)),c=f(r(645)),l=f(r(9));function f(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"render",value:function(){var e=this.props.protocol+"www.gravatar.com/avatar/",t=u.default.stringify({s:this.props.size,r:this.props.rating,d:this.props.default}),r=u.default.stringify({s:2*this.props.size,r:this.props.rating,d:this.props.default}),o=(""+this.props.email).trim().toLowerCase(),l=void 0;if(this.props.md5)l=this.props.md5;else{if("string"!=typeof this.props.email)return console.warn('Gravatar image can not be fetched. Either the "email" or "md5" prop must be specified.'),a.default.createElement("script",null);l=(0,i.default)(o,{encoding:"binary"})}var f=""+e+l+"?"+t,s=""+e+l+"?"+r,p=!0;"undefined"!=typeof window&&(p="srcset"in document.createElement("img"));var d="react-gravatar";this.props.className&&(d=d+" "+this.props.className);var h=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(this.props,[]);return delete h.md5,delete h.email,delete h.protocol,delete h.rating,delete h.size,delete h.style,delete h.className,delete h.default,!p&&(0,c.default)()?a.default.createElement("img",n({alt:"Gravatar for "+o,style:this.props.style,src:s,height:this.props.size,width:this.props.size},h,{className:d})):a.default.createElement("img",n({alt:"Gravatar for "+o,style:this.props.style,src:f,srcSet:s+" 2x",height:this.props.size,width:this.props.size},h,{className:d}))}}]),t}();s.displayName="Gravatar",s.propTypes={email:l.default.string,md5:l.default.string,size:l.default.number,rating:l.default.string,default:l.default.string,className:l.default.string,protocol:l.default.string,style:l.default.object},s.defaultProps={size:50,rating:"g",default:"retro",protocol:"//"},e.exports=s},61:function(e,t,r){e.exports=r(309)},635:function(e,t,r){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=r(695),{page:e.exports.default}})},638:function(e,t,r){"use strict";var n=r(35),o=r(11);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=x,t.Container=t.default=void 0;var a=o(r(258)),i=o(r(259)),u=o(r(639)),c=o(r(15)),l=o(r(16)),f=o(r(25)),s=o(r(26)),p=o(r(27)),d=o(r(23)),h=n(r(1)),v=o(r(9)),y=r(37),m=r(65),g=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,s.default)(t).apply(this,arguments))}var r;return(0,p.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=x(t);return h.default.createElement(b,null,h.default.createElement(r,(0,u.default)({},n,{url:o})))}}],[{key:"getInitialProps",value:(r=(0,i.default)(a.default.mark(function e(t){var r,n,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,t.router,n=t.ctx,e.next=3,(0,y.loadGetInitialProps)(r,n);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})}]),t}(h.Component);t.default=g,(0,d.default)(g,"childContextTypes",{headManager:v.default.object,router:v.default.object});var b=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=b;var w=(0,y.execOnce)(function(){0});function x(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return w(),n},get pathname(){return w(),t},get asPath(){return w(),r},back:function(){w(),e.back()},push:function(t,r){return w(),e.push(t,r)},pushTo:function(t,r){w();var n=r?t:null,o=r||t;return e.push(n,o)},replace:function(t,r){return w(),e.replace(t,r)},replaceTo:function(t,r){w();var n=r?t:null,o=r||t;return e.replace(n,o)}}}},639:function(e,t,r){var n=r(295);function o(){return e.exports=o=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}e.exports=o},640:function(e,t,r){var n,o,a,i,u;n=r(641),o=r(531).utf8,a=r(642),i=r(531).bin,(u=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?i.stringToBytes(e):o.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var r=n.bytesToWords(e),c=8*e.length,l=1732584193,f=-271733879,s=-1732584194,p=271733878,d=0;d<r.length;d++)r[d]=16711935&(r[d]<<8|r[d]>>>24)|4278255360&(r[d]<<24|r[d]>>>8);r[c>>>5]|=128<<c%32,r[14+(c+64>>>9<<4)]=c;var h=u._ff,v=u._gg,y=u._hh,m=u._ii;for(d=0;d<r.length;d+=16){var g=l,b=f,w=s,x=p;l=h(l,f,s,p,r[d+0],7,-680876936),p=h(p,l,f,s,r[d+1],12,-389564586),s=h(s,p,l,f,r[d+2],17,606105819),f=h(f,s,p,l,r[d+3],22,-1044525330),l=h(l,f,s,p,r[d+4],7,-176418897),p=h(p,l,f,s,r[d+5],12,1200080426),s=h(s,p,l,f,r[d+6],17,-1473231341),f=h(f,s,p,l,r[d+7],22,-45705983),l=h(l,f,s,p,r[d+8],7,1770035416),p=h(p,l,f,s,r[d+9],12,-1958414417),s=h(s,p,l,f,r[d+10],17,-42063),f=h(f,s,p,l,r[d+11],22,-1990404162),l=h(l,f,s,p,r[d+12],7,1804603682),p=h(p,l,f,s,r[d+13],12,-40341101),s=h(s,p,l,f,r[d+14],17,-1502002290),l=v(l,f=h(f,s,p,l,r[d+15],22,1236535329),s,p,r[d+1],5,-165796510),p=v(p,l,f,s,r[d+6],9,-1069501632),s=v(s,p,l,f,r[d+11],14,643717713),f=v(f,s,p,l,r[d+0],20,-373897302),l=v(l,f,s,p,r[d+5],5,-701558691),p=v(p,l,f,s,r[d+10],9,38016083),s=v(s,p,l,f,r[d+15],14,-660478335),f=v(f,s,p,l,r[d+4],20,-405537848),l=v(l,f,s,p,r[d+9],5,568446438),p=v(p,l,f,s,r[d+14],9,-1019803690),s=v(s,p,l,f,r[d+3],14,-187363961),f=v(f,s,p,l,r[d+8],20,1163531501),l=v(l,f,s,p,r[d+13],5,-1444681467),p=v(p,l,f,s,r[d+2],9,-51403784),s=v(s,p,l,f,r[d+7],14,1735328473),l=y(l,f=v(f,s,p,l,r[d+12],20,-1926607734),s,p,r[d+5],4,-378558),p=y(p,l,f,s,r[d+8],11,-2022574463),s=y(s,p,l,f,r[d+11],16,1839030562),f=y(f,s,p,l,r[d+14],23,-35309556),l=y(l,f,s,p,r[d+1],4,-1530992060),p=y(p,l,f,s,r[d+4],11,1272893353),s=y(s,p,l,f,r[d+7],16,-155497632),f=y(f,s,p,l,r[d+10],23,-1094730640),l=y(l,f,s,p,r[d+13],4,681279174),p=y(p,l,f,s,r[d+0],11,-358537222),s=y(s,p,l,f,r[d+3],16,-722521979),f=y(f,s,p,l,r[d+6],23,76029189),l=y(l,f,s,p,r[d+9],4,-640364487),p=y(p,l,f,s,r[d+12],11,-421815835),s=y(s,p,l,f,r[d+15],16,530742520),l=m(l,f=y(f,s,p,l,r[d+2],23,-995338651),s,p,r[d+0],6,-198630844),p=m(p,l,f,s,r[d+7],10,1126891415),s=m(s,p,l,f,r[d+14],15,-1416354905),f=m(f,s,p,l,r[d+5],21,-57434055),l=m(l,f,s,p,r[d+12],6,1700485571),p=m(p,l,f,s,r[d+3],10,-1894986606),s=m(s,p,l,f,r[d+10],15,-1051523),f=m(f,s,p,l,r[d+1],21,-2054922799),l=m(l,f,s,p,r[d+8],6,1873313359),p=m(p,l,f,s,r[d+15],10,-30611744),s=m(s,p,l,f,r[d+6],15,-1560198380),f=m(f,s,p,l,r[d+13],21,1309151649),l=m(l,f,s,p,r[d+4],6,-145523070),p=m(p,l,f,s,r[d+11],10,-1120210379),s=m(s,p,l,f,r[d+2],15,718787259),f=m(f,s,p,l,r[d+9],21,-343485551),l=l+g>>>0,f=f+b>>>0,s=s+w>>>0,p=p+x>>>0}return n.endian([l,f,s,p])})._ff=function(e,t,r,n,o,a,i){var u=e+(t&r|~t&n)+(o>>>0)+i;return(u<<a|u>>>32-a)+t},u._gg=function(e,t,r,n,o,a,i){var u=e+(t&n|r&~n)+(o>>>0)+i;return(u<<a|u>>>32-a)+t},u._hh=function(e,t,r,n,o,a,i){var u=e+(t^r^n)+(o>>>0)+i;return(u<<a|u>>>32-a)+t},u._ii=function(e,t,r,n,o,a,i){var u=e+(r^(t|~n))+(o>>>0)+i;return(u<<a|u>>>32-a)+t},u._blocksize=16,u._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var r=n.wordsToBytes(u(e,t));return t&&t.asBytes?r:t&&t.asString?i.bytesToString(r):n.bytesToHex(r)}},641:function(e,t){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var o=e[n]<<16|e[n+1]<<8|e[n+2],a=0;a<4;a++)8*n+6*a<=8*e.length?t.push(r.charAt(o>>>6*(3-a)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,o=0;n<e.length;o=++n%4)0!=o&&t.push((r.indexOf(e.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(e.charAt(n))>>>6-2*o);return t}},e.exports=n},642:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},643:function(e,t,r){"use strict";var n=r(644),o=r(76);function a(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=o({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),r(decodeURIComponent(o),a,n)}),Object.keys(n).sort().reduce(function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(r):e[t]=r,e},Object.create(null))):n},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[a(t,e),"[",n,"]"].join(""):[a(t,e),"[",a(n,e),"]=",a(r,e)].join("")};case"bracket":return function(t,r){return null===r?a(t,e):[a(t,e),"[]=",a(r,e)].join("")};default:return function(t,r){return null===r?a(t,e):[a(t,e),"=",a(r,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map(function(n){var o=e[n];if(void 0===o)return"";if(null===o)return a(n,t);if(Array.isArray(o)){var i=[];return o.slice().forEach(function(e){void 0!==e&&i.push(r(n,e,i.length))}),i.join("&")}return a(n,t)+"="+a(o,t)}).filter(function(e){return e.length>0}).join("&"):""}},644:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},645:function(e,t){e.exports=function(){if("undefined"!=typeof window&&null!==window){if("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)",window.devicePixelRatio>1.25)return!0;if(window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)").matches)return!0}return!1}},695:function(e,t,r){"use strict";r.r(t);var n=r(44),o=r.n(n),a=r(493),i=r.n(a),u=r(532),c=r.n(u),l=r(1),f=r.n(l),s=(r(9),r(61)),p=r.n(s),d=r(533),h=r.n(d),v=r(47),y=r.n(v),m=function(){return f.a.createElement("div",{className:y.a.bar},f.a.createElement("div",{className:y.a.content},f.a.createElement("div",{className:y.a.block},f.a.createElement(p.a,{href:"/"},f.a.createElement("a",null,f.a.createElement("h1",{className:y.a.title},"magarcia")))),f.a.createElement("div",{className:"".concat(y.a.block," ").concat(y.a.right)},f.a.createElement(h.a,{email:"newluxfero@gmail.com",className:y.a.avatar,size:48}))))},g=r(494),b=r.n(g),w=function(){return f.a.createElement("div",{className:b.a.footer},f.a.createElement("div",{className:b.a.footerContent},f.a.createElement("span",null,"Made with"," ",f.a.createElement("span",{role:"img","aria-label":"love"},"❤️")," ","from Barcelona")))},x=r(495),E=r.n(x),k=function(e){var t=e.children;return f.a.createElement(f.a.Fragment,null,f.a.createElement(m,null),f.a.createElement("section",{className:E.a.body},f.a.createElement("div",{className:E.a.inner},t)),f.a.createElement(w,null))};r(649);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"default",function(){return N});var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,T(t).apply(this,arguments))}var r,n,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,i.a),r=t,n=[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps;return f.a.createElement(a.Container,null,f.a.createElement(c.a,null,f.a.createElement("title",null,"magarcia")),f.a.createElement(k,null,f.a.createElement(t,r)))}}],u=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var r,n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.Component,t.router,n=t.ctx,a={},!r.getInitialProps){e.next=6;break}return e.next=5,r.getInitialProps(n);case 5:a=e.sent;case 6:return e.abrupt("return",{pageProps:a});case 7:case"end":return e.stop()}},e,this)}),function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){_(a,n,o,i,u,"next",e)}function u(e){_(a,n,o,i,u,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],n&&j(r.prototype,n),u&&j(r,u),t}()}},[[635,1,0,2]]]);