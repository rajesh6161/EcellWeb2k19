(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{307:function(e,t,n){},536:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),l=n(14),c=n(13),i=n(15),s=n(0),o=n.n(s),u=n(50),m=(n(307),n(58)),f=n(62),p=n(59),d=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={investors:[],loading:!0},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(u.b)().get("/investors/").then(function(t){console.log(t);var n=t.data;e.setState({investors:n,loading:!1})})}},{key:"render",value:function(){var e=this.state.investors.sort(function(e,t){return t.year-e.year}).map(function(e){return o.a.createElement("div",{className:"wrapper",key:e.name},o.a.createElement("div",{className:"profile-card js-profile-card"},o.a.createElement("div",{className:"profile-card__img"},o.a.createElement("img",{src:e.profile_pic,alt:e.name})),o.a.createElement("div",{className:"profile-card__cnt js-profile-cnt"},o.a.createElement("div",{className:"profile-card__name"},e.name),o.a.createElement("div",{className:"profile-card__txt"},o.a.createElement("strong",null,e.company)),o.a.createElement("div",{className:"profile-card__year"},"INVESTOR ",e.year),o.a.createElement("div",{className:"profile-card-loc"},o.a.createElement("span",{className:"profile-card-loc__txt"},e.description)),o.a.createElement("div",{className:"profile-card-ctr"},o.a.createElement("a",{href:e.social_media,target:"_blank"},o.a.createElement("button",{className:"profile-card__button button--orange"},"Follow"))))))});return 0==this.state.investors.length&&(e=o.a.createElement("h1",{className:"my-5 text-center text-white"},"Comming soon ...")),o.a.createElement("div",{className:"speaker"},o.a.createElement(f.a,null),o.a.createElement("div",{className:"header1"},"Investors"),o.a.createElement("div",{className:"container-fluid ctn7",style:{maxWidth:"1500px"}},this.state.loading?o.a.createElement("div",{style:{marginTop:"20%"}},o.a.createElement(m.a,null)):e),o.a.createElement(p.a,null))}}]),t}(s.Component);t.default=d},54:function(e,t){var n,a,r=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===l||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:l}catch(e){n=l}try{a="function"===typeof clearTimeout?clearTimeout:c}catch(e){a=c}}();var s,o=[],u=!1,m=-1;function f(){u&&s&&(u=!1,s.length?o=s.concat(o):m=-1,o.length&&p())}function p(){if(!u){var e=i(f);u=!0;for(var t=o.length;t;){for(s=o,o=[];++m<t;)s&&s[m].run();m=-1,t=o.length}s=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===c||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new d(e,t)),1!==o.length||u||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},58:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(11),r=n(12),l=n(14),c=n(13),i=n(15),s=n(0),o=n.n(s),u=(n(34),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"loader"},o.a.createElement("div",{className:"l_main ".concat(this.props.dark?"dark":null)},o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))))}}]),t}(s.Component))}}]);
//# sourceMappingURL=31.c2f8c287.chunk.js.map