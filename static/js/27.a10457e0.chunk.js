(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{112:function(e,t,a){},170:function(e,t,a){e.exports=a.p+"static/media/no-logo.5fd90280.svg"},50:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(76),l=a.n(n),r=a(35),s="https://ecell.nitrr.ac.in";s="",t.b=function(){var e=void 0,t=r.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),l.a.create({baseURL:s,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},530:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(26),l=a(11),r=a(12),s=a(14),c=a(13),i=a(15),o=a(0),m=a.n(o),d=a(50),E=a(24),p=(a(187),a(59),a(112),a(56)),u=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={startup_detail:[],jobs:[],loading:!0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.startup_id;Object(d.b)().get("/iportal/startup/".concat(t,"/")).then(function(t){console.log(t);var a=t.data,n=a.jobs;e.setState({startup_detail:a,jobs:n,loading:!1}),console.log(e.state.startup_detail),console.log(e.state.jobs)})}},{key:"render",value:function(){var e=this,t=this.state.startup_detail,l=this.state.jobs.map(function(t){return 0===e.state.jobs.length?m.a.createElement("div",null,"No Jobs Available"):m.a.createElement("div",{className:"my-4",key:t.id},m.a.createElement("div",{class:"card",style:{border:"2px solid green"}},m.a.createElement("div",{class:"card-header green text-white d-flex",style:{justifyContent:"space-between"}},m.a.createElement("div",null,m.a.createElement("h4",{className:"indiv_job font-weight-bold"},t.name))),m.a.createElement("div",{class:"card-body"},m.a.createElement("div",null,m.a.createElement("div",{className:"mb-2"},m.a.createElement("strong",null,"Brief : "),t.brief),m.a.createElement("hr",{className:"gray"}),m.a.createElement("div",{className:"d-flex job_flex"},m.a.createElement("div",{className:"text-center"},m.a.createElement("div",{style:{fontSize:"14px"}},m.a.createElement("strong",null,"Start Date")),m.a.createElement("div",{style:{fontSize:"13px"}},Object(p.b)(t.start_date))),m.a.createElement("div",{className:"text-center"},m.a.createElement("div",{style:{fontSize:"14px"}},m.a.createElement("strong",null,"Duration")),m.a.createElement("div",{style:{fontSize:"13px"}},t.duration)),m.a.createElement("div",{className:"text-center"},m.a.createElement("div",{style:{fontSize:"14px"}},m.a.createElement("strong",null,"Stipend")),m.a.createElement("div",{style:{fontSize:"13px"}},t.stipend)),m.a.createElement("div",{className:"text-center"},m.a.createElement("div",{style:{fontSize:"14px"}},m.a.createElement("strong",null,"Posted On")),m.a.createElement("div",{style:{fontSize:"13px"}},Object(p.b)(t.posted_on))),m.a.createElement("div",{className:"text-center"},m.a.createElement("div",{style:{fontSize:"14px"}},m.a.createElement("strong",null,"Apply By")),m.a.createElement("div",{style:{fontSize:"13px"}},Object(p.b)(t.apply_by)))),m.a.createElement("div",{className:"job_flex2"},m.a.createElement("div",{className:""},m.a.createElement("div",{style:{fontSize:"13px"}},m.a.createElement("strong",null,"Start Date : "),t.start_date)),m.a.createElement("div",{className:""},m.a.createElement("div",{style:{fontSize:"13px"}},m.a.createElement("strong",null,"Duration : "),t.duration)),m.a.createElement("div",{className:""},m.a.createElement("div",{style:{fontSize:"13px"}},m.a.createElement("strong",null,"Stipend : "),t.stipend)),m.a.createElement("div",{className:""},m.a.createElement("div",{style:{fontSize:"13px"}},m.a.createElement("strong",null,"Posted On : "),t.posted_on)),m.a.createElement("div",{className:""},m.a.createElement("div",{style:{fontSize:"13px"}},m.a.createElement("strong",null,"Apply By :"),t.apply_by)))),m.a.createElement("hr",{className:"gray"}),m.a.createElement(E.b,{to:"/internship/jobs/".concat(e.state.startup_detail.id,"/opening/").concat(t.id),style:{fontSize:"12px",float:"right"},className:"btn btn-danger font-weight-bold"},"View Details"))),m.a.createElement("hr",{class:"my-4 rgba-white-light"}))}),r=a(170);a(531);return m.a.createElement("div",{style:{background:"lightgray"}},m.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1400px"}},this.state.loading?m.a.createElement("div",{className:"my-5 text-center"},m.a.createElement("i",{className:"fa fa-2x fa-spinner fa-spin"})):m.a.createElement(o.Fragment,null,function(t){var a;return m.a.createElement("div",null,m.a.createElement("div",{class:"jumbotron hoverable",style:{marginBottom:"50px"}},m.a.createElement("div",{className:"container-fluid",style:{marginBottom:"40px"}},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex",style:{justifyContent:"center"}},m.a.createElement("img",{style:(a={maxWidth:"300px"},Object(n.a)(a,"maxWidth","300px"),Object(n.a)(a,"objectFit","contain"),a),className:"img-fluid",src:t.logo?t.logo:r})),m.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex",style:{alignItems:"center",padding:"0px"}},m.a.createElement("div",null,m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{className:"font-weight-bold"},"Idea in a Nutshell : "),m.a.createElement("span",null,t.idea_in_a_nut_shell)),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{className:"font-weight-bold"},"Idea Description : "),m.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.describe_idea}})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{className:"font-weight-bold"},"Innovation in this : "),m.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.innovation_in_this}})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{className:"font-weight-bold"},"End Product :  "),m.a.createElement("span",null,t.end_product)),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{className:"font-weight-bold"},"Beneficiaries : "),m.a.createElement("span",null,t.beneficiaries)),m.a.createElement("hr",{className:"my-4 rgba-white-light"}),m.a.createElement("div",null,m.a.createElement("span",{className:"font-weight-bold"},"Email : "),t.email),m.a.createElement("div",null,m.a.createElement("span",{className:"font-weight-bold"},"Contact : "),t.contact),m.a.createElement("br",null))),m.a.createElement("hr",{className:"my-4 rgba-white-light"}))),1!=t.can_hire_interns&&0===e.state.jobs.length?null:m.a.createElement(o.Fragment,null,m.a.createElement("hr",{class:"my-4 rgba-white-light"}),m.a.createElement("div",{style:{marginBottom:"-30px",marginTop:"50px"}},m.a.createElement("h3",{className:"font-weight-bold my-4 p-3 text-center",style:{border:"3px solid green",borderRadius:"5px",textTransform:"uppercase"}},"Work Profiles"),1!=t.can_hire_interns&&0===l.length?null:l))))}(t))))}}]),t}(o.Component)},531:function(e,t,a){e.exports=a.p+"static/media/no-vacancies.40b1bb7c.gif"}}]);
//# sourceMappingURL=27.a10457e0.chunk.js.map