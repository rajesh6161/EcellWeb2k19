(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{315:function(e,t,a){},55:function(e,t){var a,n,r=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(a===setTimeout)return setTimeout(e,0);if((a===l||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"===typeof setTimeout?setTimeout:l}catch(e){a=l}try{n="function"===typeof clearTimeout?clearTimeout:c}catch(e){n=c}}();var s,o=[],u=!1,m=-1;function p(){u&&s&&(u=!1,s.length?o=s.concat(o):m=-1,o.length&&f())}function f(){if(!u){var e=i(p);u=!0;for(var t=o.length;t;){for(s=o,o=[];++m<t;)s&&s[m].run();m=-1,t=o.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function E(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];o.push(new d(e,t)),1!==o.length||u||i(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=E,r.addListener=E,r.once=E,r.off=E,r.removeListener=E,r.removeAllListeners=E,r.emit=E,r.prependListener=E,r.prependOnceListener=E,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},550:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),l=a(13),c=a(12),i=a(14),s=a(0),o=a.n(s),u=a(51),m=(a(315),a(59)),p=a(63),f=a(60),d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={speakers:[],loading:!0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(u.b)().get("/speakers/full_list/").then(function(t){console.log(t);var a=t.data;e.setState({speakers:a,loading:!1})})}},{key:"render",value:function(){var e=this.state.speakers.sort(function(e,t){return t.year-e.year}).map(function(e){return o.a.createElement("div",{className:"wrapper",key:e.name},o.a.createElement("div",{className:"profile-card js-profile-card"},o.a.createElement("div",{className:"profile-card__img"},o.a.createElement("img",{src:e.profile_pic,alt:e.name})),o.a.createElement("div",{className:"profile-card__cnt js-profile-cnt"},o.a.createElement("div",{className:"profile-card__name"},e.name),o.a.createElement("div",{className:"profile-card__txt"},o.a.createElement("strong",null,e.company)),o.a.createElement("div",{className:"profile-card__year"},"SPEAKER ",e.year),o.a.createElement("div",{className:"profile-card-loc"},o.a.createElement("span",{className:"profile-card-loc__txt"},e.description)),o.a.createElement("div",{className:"profile-card-ctr"},o.a.createElement("a",{href:e.social_media,target:"_blank"},o.a.createElement("button",{className:"profile-card__button button--orange"},"Follow"))))))});return o.a.createElement("div",{className:"speaker"},o.a.createElement(p.a,null),o.a.createElement("div",{className:"header1"},"SPEAKERS"),o.a.createElement("div",{className:"container-fluid ctn7",style:{maxWidth:"1500px"}},this.state.loading?o.a.createElement("div",{style:{marginTop:"20%"}},o.a.createElement(m.a,null)):e),o.a.createElement(f.a,null))}}]),t}(s.Component);t.default=d},59:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(10),r=a(11),l=a(13),c=a(12),i=a(14),s=a(0),o=a.n(s),u=(a(34),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"loader"},o.a.createElement("div",{className:"l_main ".concat(this.props.dark?"dark":null)},o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))))}}]),t}(s.Component))}}]);
//# sourceMappingURL=33.e2c66871.chunk.js.map