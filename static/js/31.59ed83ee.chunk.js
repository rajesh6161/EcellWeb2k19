(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{316:function(e,t,n){},54:function(e,t){var n,a,r=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===l||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:l}catch(e){n=l}try{a="function"===typeof clearTimeout?clearTimeout:c}catch(e){a=c}}();var s,o=[],u=!1,m=-1;function f(){u&&s&&(u=!1,s.length?o=s.concat(o):m=-1,o.length&&d())}function d(){if(!u){var e=i(f);u=!0;for(var t=o.length;t;){for(s=o,o=[];++m<t;)s&&s[m].run();m=-1,t=o.length}s=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===c||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new p(e,t)),1!==o.length||u||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},542:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n(27),l=n(11),c=n(12),i=n(14),s=n(13),o=n(15),u=n(0),m=n.n(u),f=n(50),d=(n(316),n(62)),p=n(59),h=n(58),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).axios=Object(f.b)(),n.state={mentors:{},loading:!0},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=function(t){e.axios.get("/mentors/list/".concat(t,"/")).then(function(n){console.log(n);var l=n.data.data;l.length>0&&e.setState({loading:!1,mentors:Object(r.a)({},e.state.mentors,Object(a.a)({},t,l))})})},n=2016;n<=2020;n++)t(n)}},{key:"render",value:function(){console.log(this.state.mentors);var e=[];for(var t in this.state.mentors){var n=this.state.mentors[t];n=n.map(function(e){return m.a.createElement("div",{className:"individual_mentors",key:e.id},m.a.createElement("div",null,m.a.createElement("img",{className:"mentors_pic shadow-lg p-3 mb-5 bg-white rounded",src:e.profile_pic_url,alt:e.name})),m.a.createElement("h3",{className:"mentors_name"},e.name),m.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.detail},className:"center2"}))});var a=m.a.createElement("div",{className:"flex-containerr",key:t},n);e.push(a)}return m.a.createElement("div",{className:"mentors"},m.a.createElement(d.a,null),m.a.createElement("div",{className:"header4"},"MENTORS"),m.a.createElement("div",{className:"container-fluid ctn13"},this.state.loading?m.a.createElement("div",{style:{marginTop:"20%"}},m.a.createElement(h.a,null)):e),m.a.createElement(p.a,null))}}]),t}(u.Component);t.default=v},58:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(11),r=n(12),l=n(14),c=n(13),i=n(15),s=n(0),o=n.n(s),u=(n(34),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"loader"},o.a.createElement("div",{className:"l_main ".concat(this.props.dark?"dark":null)},o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"l_square"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))))}}]),t}(s.Component))}}]);
//# sourceMappingURL=31.59ed83ee.chunk.js.map