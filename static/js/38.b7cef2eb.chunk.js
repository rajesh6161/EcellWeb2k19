(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{50:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(76),r=a.n(n),o=a(35),s="https://ecell.nitrr.ac.in";s="",t.b=function(){var e=void 0,t=o.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),r.a.create({baseURL:s,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},533:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),o=a(14),s=a(13),i=a(15),l=a(0),c=a.n(l),u=a(50),p=a(25),d=a(61),m=a(72),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).job_id=Number(a.props.match.params.job_id),a.state={uploading:!1,job_detail:{},progress:0,file:null},a._upload_application=function(e){e.preventDefault(),a.setState({uploading:!0});var t=new FormData,n=new XMLHttpRequest;t.append("resume",a.resume.files[0]),t.append("ques1",a.ques1.get_value()),t.append("ques2",a.ques2.get_value()),t.append("job",a.job_id),t.append("applicant",a.props.auth.id),n.addEventListener("load",function(e){var t=JSON.parse(e.target.response);a.setState({uploading:!1,progress:0}),t.id?a.props.history.goBack():a.setState({error:!0})}),n.upload.addEventListener("progress",function(e){var t=Math.round(e.loaded/e.total*100);console.log({progress:t}),a.setState({progress:t})}),n.open("post",u.a+"/iportal/job_application/"),n.setRequestHeader("Authorization",a.props.auth.token),n.send(t),a.setState({uploading:!1})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(u.b)().get("/iportal/job/".concat(this.job_id,"/")).then(function(t){var a=t.data;console.log(a),e.setState({job_detail:a})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"container jumbotron"},c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.props.history.goBack()},className:"btn align-self-center font-weight-bold btn-primary"},"Go Back")),c.a.createElement("h1",{className:"mt-5 jb_app font-weight-bold text-center",style:{paddingTop:"-40px"}},"Job Application"),c.a.createElement("h2",{className:"mt-4 jb_apps font-weight-bold text-center"},this.state.job_detail.name," (",this.state.job_detail.job_type,")"),c.a.createElement("div",{className:"text-center font-weight-bold my-5"},"Upload your Resume : ",c.a.createElement("input",{className:"btn btn-success text-center font-weight-bold",ref:function(t){return e.resume=t},type:"file"})," ",c.a.createElement("span",{className:"font-weight-bold"},this.state.progress?"".concat(this.state.progress,"%"):null)),this.state.uploading?c.a.createElement("span",null,this.state.progress?c.a.createElement(l.Fragment,null,c.a.createElement("div",{class:"progress md-progress",style:"height: 20px"},c.a.createElement("div",{class:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.progress,"%"),height:"20px"},"aria-valuemin":"0","aria-valuemax":"100"},this.state.progress,"%"))):null):null,c.a.createElement("div",{className:"font-weight-bold my-4"},"How you are suitable for this job?"),c.a.createElement(m.a,{onRef:function(t){return e.ques1=t}}),c.a.createElement("div",{className:"font-weight-bold my-4"},"During what timeframe you are available for the job?"),c.a.createElement(m.a,{onRef:function(t){return e.ques2=t}}),c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"text center text-danger"},this.state.error?"Please ensure that all questions are answered and resume file selected for upload.":null),c.a.createElement("button",{onClick:this._upload_application,disabled:this.state.uploading,type:"submit",className:"btn font-weight-bold my-4 btn-primary"},this.state.uploading?"Uploading":"Submit"))))}}]),t}(l.Component);t.default=Object(p.b)(function(e){return e},d)(b)},72:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var n=a(11),r=a(12),o=a(14),s=a(13),i=a(15),l=a(0),c=a.n(l),u=(a(73),a(96),a(97)),p=a(86),d=a(98),m=a.n(d),b=a(99),h=a.n(b),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={editorState:p.EditorState.createEmpty()},a.set_value=function(e){var t=h()(e);if(t){var n=p.ContentState.createFromBlockArray(t.contentBlocks),r=p.EditorState.createWithContent(n);a.setState({editorState:r})}},a.get_value=function(){return m()(Object(p.convertToRaw)(a.state.editorState.getCurrentContent()))},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"wysiwyg"},c.a.createElement(u.Editor,{editorState:this.state.editorState,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(t){return e.setState({editorState:t})}}))}}]),t}(l.Component)},73:function(e,t,a){}}]);
//# sourceMappingURL=38.b7cef2eb.chunk.js.map