(function(e){function r(r){for(var a,i,n=r[0],d=r[1],l=r[2],p=0,m=[];p<n.length;p++)i=n[p],t[i]&&m.push(t[i][0]),t[i]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);c&&c(r);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,r=0;r<o.length;r++){for(var s=o[r],a=!0,n=1;n<s.length;n++){var d=s[n];0!==t[d]&&(a=!1)}a&&(o.splice(r--,1),e=i(i.s=s[0]))}return e}var a={},t={app:0},o=[];function i(r){if(a[r])return a[r].exports;var s=a[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,r,s){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)i.d(s,a,function(r){return e[r]}.bind(null,a));return s},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=r,n=n.slice();for(var l=0;l<n.length;l++)r(n[l]);var c=d;o.push([0,"chunk-vendors"]),s()})({0:function(e,r,s){e.exports=s("56d7")},"36e0":function(e,r,s){"use strict";var a=s("3c6c"),t=s.n(a);t.a},"38c3":function(e,r,s){},"3c44":function(e,r,s){},"3c6c":function(e,r,s){},"517b":function(e,r,s){"use strict";var a=s("3c44"),t=s.n(a);t.a},5338:function(e,r,s){"use strict";var a=s("d119"),t=s.n(a);t.a},"56d7":function(e,r,s){"use strict";s.r(r);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"wrapper-content"},[s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"flex"},[s("button",{staticClass:"btn btnPrimary",on:{click:function(r){e.modalValidateNew=!e.modalValidateNew}}},[e._v("Modal validate HW\n          ")]),s("modalValidateNew",{directives:[{name:"show",rawName:"v-show",value:e.modalValidateNew,expression:"modalValidateNew"}],on:{close:function(r){e.modalValidateNew=!1}}}),s("div",{staticClass:"menu flex"},[s("a",{staticClass:"flex",on:{click:function(r){e.login=!e.login}}},[s("svg",{staticClass:"mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}}),s("polyline",{attrs:{points:"10 17 15 12 10 7"}}),s("line",{attrs:{x1:"15",y1:"12",x2:"3",y2:"12"}})]),s("span",[e._v("Login")])]),s("login",{directives:[{name:"show",rawName:"v-show",value:e.login,expression:"login"}],on:{close:function(r){e.login=!1},registrationAccount:e.registrationAccount}}),s("a",{staticClass:"flex",on:{click:function(r){e.registration=!e.registration}}},[s("svg",{staticClass:"mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}}),s("circle",{attrs:{cx:"12",cy:"7",r:"4"}})]),s("span",[e._v("Registration")])]),s("registration",{directives:[{name:"show",rawName:"v-show",value:e.registration,expression:"registration"}],on:{close:function(r){e.registration=!1},LoginAccount:e.LoginAccount}})],1)],1),s("br"),s("br"),s("hr"),s("br"),s("br"),s("button",{staticClass:"btn btnPrimary",on:{click:function(r){e.modalFirst=!e.modalFirst}}},[e._v("Show First Modal\n        ")]),s("modals",{directives:[{name:"show",rawName:"v-show",value:e.modalFirst,expression:"modalFirst"}],attrs:{title:"First Modal"},on:{close:function(r){e.modalFirst=!1}}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid architecto dolor eaque esse\n              excepturi exercitationem id laudantium libero, nam porro possimus qui, quis saepe sunt unde velit\n              veritatis voluptate.")]),s("br"),s("button",{staticClass:"btn btnPrimary",on:{click:function(r){e.modalFirst=!1}}},[e._v("Well Done!\n            ")])]),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("p",[e._v("Footer")])])]),s("button",{staticClass:"btn btnPrimary",on:{click:function(r){e.modalSecond.show=!e.modalSecond.show}}},[e._v("Show Modal with form\n        ")]),s("modals",{directives:[{name:"show",rawName:"v-show",value:e.modalSecond.show,expression:"modalSecond.show"}],attrs:{title:"Modal with form"},on:{close:function(r){e.modalSecond.show=!1}}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("form",{on:{submit:function(r){return r.preventDefault(),e.submitSecondForm(r)}}},[s("label",[e._v("Name:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.modalSecond.name,expression:"modalSecond.name"}],attrs:{type:"text",required:""},domProps:{value:e.modalSecond.name},on:{input:function(r){r.target.composing||e.$set(e.modalSecond,"name",r.target.value)}}}),s("label",[e._v("Email:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.modalSecond.email,expression:"modalSecond.email"}],attrs:{type:"email",required:""},domProps:{value:e.modalSecond.email},on:{input:function(r){r.target.composing||e.$set(e.modalSecond,"email",r.target.value)}}}),s("button",{staticClass:"btn btnPrimary"},[e._v("Submit\n              ")])])])]),s("button",{staticClass:"btn btnPrimary",on:{click:function(r){e.modalValidate=!e.modalValidate}}},[e._v("Show Modal with form + validate\n        ")]),s("modalValidate",{directives:[{name:"show",rawName:"v-show",value:e.modalValidate,expression:"modalValidate"}],on:{close:function(r){e.modalValidate=!1}}})],1)])])])},o=[],i=(s("7f7f"),function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal__wrapper",on:{click:function(r){return e.$emit("close")}}},[s("div",{staticClass:"modal-content",on:{click:function(e){e.stopPropagation()}}},[s("div",{staticClass:"modal-header"},[s("span",{staticClass:"modal-title"},[e._v(" "+e._s(e.title)+" ")]),s("span",{staticClass:"button-close",on:{click:function(r){return e.$emit("close")}}},[e._v("×")])]),s("div",{staticClass:"modal-body"},[e._t("body",[e._v(" Default body")])],2)])])])}),n=[],d={props:{title:{type:String,required:!0}},mounted:function(){var e=this;document.body.addEventListener("keyup",(function(r){27===r.keyCode&&e.$emit("close")}))},computed:{},methods:{}},l=d,c=(s("36e0"),s("2877")),p=Object(c["a"])(l,i,n,!1,null,"4e5bb891",null),m=p.exports,u=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("modal",{attrs:{title:"Modal with form + Validate"},on:{close:function(r){return e.$emit("close")}}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit(r)}}},[s("div",{staticClass:"form-item",class:{errorInput:e.$v.name.$error}},[s("label",[e._v("Name:")]),e.$v.name.required?e._e():s("p",{staticClass:"errorText"},[e._v(" Filed is required! ")]),e.$v.name.minLength?e._e():s("p",{staticClass:"errorText"},[e._v(" Name must have at least "+e._s(e.$v.name.$params.minLength.min)+" !")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{error:e.$v.name.$error},domProps:{value:e.name},on:{change:function(r){return e.$v.name.$touch()},input:function(r){r.target.composing||(e.name=r.target.value)}}})]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[s("label",[e._v("Email:")]),e.$v.email.required?e._e():s("p",{staticClass:"errorText"},[e._v("Filed is required! ")]),e.$v.email.email?e._e():s("p",{staticClass:"errorText"},[e._v("Filed Email is not correct")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:function(r){return e.$v.email.$touch()},input:function(r){r.target.composing||(e.email=r.target.value)}}})]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.password.$error}},[s("label",[e._v("Password:")]),e.$v.password.required?e._e():s("p",{staticClass:"errorText"},[e._v("Password is required !")]),e.$v.password.$error?s("p",{staticClass:"errorText"},[e._v("Password should be moore then 6")]):e._e(),s("div",{staticClass:"input"},["checkbox"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:[function(r){var s=e.password,a=r.target,t=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.password=s.concat([o])):i>-1&&(e.password=s.slice(0,i).concat(s.slice(i+1)))}else e.password=t},function(r){return e.$v.password.$touch()}]}}):"radio"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:[function(r){e.password=null},function(r){return e.$v.password.$touch()}]}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:e.passwordType},domProps:{value:e.password},on:{change:function(r){return e.$v.password.$touch()},input:function(r){r.target.composing||(e.password=r.target.value)}}}),s("div",{staticClass:"icons"},["password"===e.passwordType?s("img",{attrs:{src:"https://img.icons8.com/material/24/000000/visible--v1.png"},on:{click:function(r){e.passwordType="text"}}}):e._e(),"text"===e.passwordType?s("img",{attrs:{src:"https://img.icons8.com/material-rounded/24/000000/hide.png"},on:{click:function(r){e.passwordType="password"}}}):e._e()])])]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.repeatPassword.$error}},[s("label",[e._v("Repeat Password:")]),e.$v.repeatPassword.sameAsPassword?e._e():s("p",{staticClass:"errorText"},[e._v("Passwords must be identical.")]),s("div",{staticClass:"input"},["checkbox"===e.repeatType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.repeatPassword)?e._i(e.repeatPassword,null)>-1:e.repeatPassword},on:{change:[function(r){var s=e.repeatPassword,a=r.target,t=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.repeatPassword=s.concat([o])):i>-1&&(e.repeatPassword=s.slice(0,i).concat(s.slice(i+1)))}else e.repeatPassword=t},function(r){return e.$v.repeatPassword.$touch()}]}}):"radio"===e.repeatType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:"radio"},domProps:{checked:e._q(e.repeatPassword,null)},on:{change:[function(r){e.repeatPassword=null},function(r){return e.$v.repeatPassword.$touch()}]}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:e.repeatType},domProps:{value:e.repeatPassword},on:{change:function(r){return e.$v.repeatPassword.$touch()},input:function(r){r.target.composing||(e.repeatPassword=r.target.value)}}}),s("div",{staticClass:"icons"},["password"===e.repeatType?s("img",{attrs:{src:"https://img.icons8.com/material/24/000000/visible--v1.png"},on:{click:function(r){e.repeatType="text"}}}):e._e(),"text"===e.repeatType?s("img",{attrs:{src:"https://img.icons8.com/material-rounded/24/000000/hide.png"},on:{click:function(r){e.repeatType="password"}}}):e._e()])])]),s("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])])])])},v=[],w=s("b5ae"),h={components:{modal:m},data:function(){return{name:"",email:"",password:"",repeatPassword:"",passwordType:"password",repeatType:"password"}},validations:{name:{required:w["required"],minLength:Object(w["minLength"])(4)},email:{required:w["required"],email:w["email"]},password:{required:w["required"],minLength:Object(w["minLength"])(6)},repeatPassword:{sameAsPassword:Object(w["sameAs"])("password")}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={name:this.name,email:this.email,password:this.password};console.log(e),this.name="",this.email="",this.password="",this.repeatPassword="",this.$v.$reset(),this.$emit("close")}}}},f=h,$=(s("900c"),Object(c["a"])(f,u,v,!1,null,null,null)),g=$.exports,b=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("modal",{attrs:{title:"Modal with form + Validate"},on:{close:e.resetForm}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit(r)}}},[s("div",{staticClass:"form-item",class:{errorInput:e.$v.name.$error}},[s("label",[e._v("Name:")]),e.$v.name.required?e._e():s("p",{staticClass:"errorText"},[e._v(" Filed is required! ")]),e.$v.name.minLength?e._e():s("p",{staticClass:"errorText"},[e._v(" Name must have at least "+e._s(e.$v.name.$params.minLength.min)+" !")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{error:e.$v.name.$error},domProps:{value:e.name},on:{change:function(r){return e.$v.name.$touch()},input:function(r){r.target.composing||(e.name=r.target.value)}}})]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[s("label",[e._v("Email:")]),e.$v.email.required?e._e():s("p",{staticClass:"errorText"},[e._v("Filed is required! ")]),e.$v.email.email?e._e():s("p",{staticClass:"errorText"},[e._v("Filed Email is not correct")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:function(r){return e.$v.email.$touch()},input:function(r){r.target.composing||(e.email=r.target.value)}}})]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.password.$error}},[s("label",[e._v("Password:")]),e.$v.password.required?e._e():s("p",{staticClass:"errorText"},[e._v("Password is required !")]),e.$v.password.$error?s("p",{staticClass:"errorText"},[e._v("Password should be moore then 6")]):e._e(),s("div",{staticClass:"input"},["checkbox"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:[function(r){var s=e.password,a=r.target,t=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.password=s.concat([o])):i>-1&&(e.password=s.slice(0,i).concat(s.slice(i+1)))}else e.password=t},function(r){return e.$v.password.$touch()}]}}):"radio"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:[function(r){e.password=null},function(r){return e.$v.password.$touch()}]}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:e.passwordType},domProps:{value:e.password},on:{change:function(r){return e.$v.password.$touch()},input:function(r){r.target.composing||(e.password=r.target.value)}}}),s("div",{staticClass:"icons"},["password"===e.passwordType?s("img",{attrs:{src:"https://img.icons8.com/material/24/000000/visible--v1.png"},on:{click:function(r){e.passwordType="text"}}}):e._e(),"text"===e.passwordType?s("img",{attrs:{src:"https://img.icons8.com/material-rounded/24/000000/hide.png"},on:{click:function(r){e.passwordType="password"}}}):e._e()])])]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.repeatPassword.$error}},[s("label",[e._v("Repeat Password:")]),e.$v.repeatPassword.sameAsPassword?e._e():s("p",{staticClass:"errorText"},[e._v("Passwords must be identical.")]),s("div",{staticClass:"input"},["checkbox"===e.repeatType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.repeatPassword)?e._i(e.repeatPassword,null)>-1:e.repeatPassword},on:{change:[function(r){var s=e.repeatPassword,a=r.target,t=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.repeatPassword=s.concat([o])):i>-1&&(e.repeatPassword=s.slice(0,i).concat(s.slice(i+1)))}else e.repeatPassword=t},function(r){return e.$v.repeatPassword.$touch()}]}}):"radio"===e.repeatType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:"radio"},domProps:{checked:e._q(e.repeatPassword,null)},on:{change:[function(r){e.repeatPassword=null},function(r){return e.$v.repeatPassword.$touch()}]}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:e.repeatType},domProps:{value:e.repeatPassword},on:{change:function(r){return e.$v.repeatPassword.$touch()},input:function(r){r.target.composing||(e.repeatPassword=r.target.value)}}}),s("div",{staticClass:"icons"},["password"===e.repeatType?s("img",{attrs:{src:"https://img.icons8.com/material/24/000000/visible--v1.png"},on:{click:function(r){e.repeatType="text"}}}):e._e(),"text"===e.repeatType?s("img",{attrs:{src:"https://img.icons8.com/material-rounded/24/000000/hide.png"},on:{click:function(r){e.repeatType="password"}}}):e._e()])])]),s("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])])])])},y=[],P={components:{modal:m},data:function(){return{name:"",email:"",password:"",repeatPassword:"",passwordType:"password",repeatType:"password"}},validations:{name:{required:w["required"],minLength:Object(w["minLength"])(4)},email:{required:w["required"],email:w["email"]},password:{required:w["required"],minLength:Object(w["minLength"])(6)},repeatPassword:{sameAsPassword:Object(w["sameAs"])("password")}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={name:this.name,email:this.email,password:this.password};console.log(e),this.name="",this.email="",this.password="",this.repeatPassword="",this.$v.$reset(),this.$emit("close")}},resetForm:function(){this.name="",this.email="",this.password="",this.$v.$reset(),this.$emit("close")}}},_=P,x=(s("6a4d"),Object(c["a"])(_,b,y,!1,null,null,null)),T=x.exports,k=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("modal",{attrs:{title:"Login"},on:{close:e.resetForm}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit(r)}}},[s("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[s("label",[e._v("Email:")]),e.$v.email.required?e._e():s("p",{staticClass:"errorText"},[e._v("Filed is required! ")]),e.$v.email.email?e._e():s("p",{staticClass:"errorText"},[e._v("Filed Email is not correct")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:function(r){return e.$v.email.$touch()},input:function(r){r.target.composing||(e.email=r.target.value)}}})]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.password.$error}},[s("label",[e._v("Password:")]),e.$v.password.required?e._e():s("p",{staticClass:"errorText"},[e._v("Password is required !")]),e.$v.password.$error?s("p",{staticClass:"errorText"},[e._v("Password should be moore then 6")]):e._e(),s("div",{staticClass:"input"},["checkbox"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:[function(r){var s=e.password,a=r.target,t=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.password=s.concat([o])):i>-1&&(e.password=s.slice(0,i).concat(s.slice(i+1)))}else e.password=t},function(r){return e.$v.password.$touch()}]}}):"radio"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:[function(r){e.password=null},function(r){return e.$v.password.$touch()}]}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:e.passwordType},domProps:{value:e.password},on:{change:function(r){return e.$v.password.$touch()},input:function(r){r.target.composing||(e.password=r.target.value)}}}),s("div",{staticClass:"icons"},["password"===e.passwordType?s("img",{attrs:{src:"https://img.icons8.com/material/24/000000/visible--v1.png"},on:{click:function(r){e.passwordType="text"}}}):e._e(),"text"===e.passwordType?s("img",{attrs:{src:"https://img.icons8.com/material-rounded/24/000000/hide.png"},on:{click:function(r){e.passwordType="password"}}}):e._e()])])]),s("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])]),s("a",{on:{click:function(r){return e.$emit("registrationAccount")}}},[e._v("I need an account")])])])},C=[],q={components:{modal:m},data:function(){return{email:"",password:"",repeatPassword:"",passwordType:"password",repeatType:"password"}},validations:{email:{required:w["required"],email:w["email"]},password:{required:w["required"],minLength:Object(w["minLength"])(6)}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={email:this.email,password:this.password};console.log(e),this.email="",this.password="",this.$v.$reset(),this.$emit("close")}},resetForm:function(){this.email="",this.password="",this.$v.$reset(),this.$emit("close")}}},N=q,A=(s("5338"),Object(c["a"])(N,k,C,!1,null,null,null)),S=A.exports,F=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("modal",{attrs:{title:"Registration"},on:{close:e.resetForm}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit(r)}}},[s("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[s("label",[e._v("Email:")]),e.$v.email.required?e._e():s("p",{staticClass:"errorText"},[e._v("Filed is required! ")]),e.$v.email.email?e._e():s("p",{staticClass:"errorText"},[e._v("Filed Email is not correct")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:function(r){return e.$v.email.$touch()},input:function(r){r.target.composing||(e.email=r.target.value)}}})]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.password.$error}},[s("label",[e._v("Password:")]),e.$v.password.required?e._e():s("p",{staticClass:"errorText"},[e._v("Password is required !")]),e.$v.password.$error?s("p",{staticClass:"errorText"},[e._v("Password should be moore then 6")]):e._e(),s("div",{staticClass:"input"},["checkbox"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:[function(r){var s=e.password,a=r.target,t=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.password=s.concat([o])):i>-1&&(e.password=s.slice(0,i).concat(s.slice(i+1)))}else e.password=t},function(r){return e.$v.password.$touch()}]}}):"radio"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:[function(r){e.password=null},function(r){return e.$v.password.$touch()}]}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:e.passwordType},domProps:{value:e.password},on:{change:function(r){return e.$v.password.$touch()},input:function(r){r.target.composing||(e.password=r.target.value)}}}),s("div",{staticClass:"icons"},["password"===e.passwordType?s("img",{attrs:{src:"https://img.icons8.com/material/24/000000/visible--v1.png"},on:{click:function(r){e.passwordType="text"}}}):e._e(),"text"===e.passwordType?s("img",{attrs:{src:"https://img.icons8.com/material-rounded/24/000000/hide.png"},on:{click:function(r){e.passwordType="password"}}}):e._e()])])]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.repeatPassword.$error}},[s("label",[e._v("Repeat Password:")]),e.$v.repeatPassword.sameAsPassword?e._e():s("p",{staticClass:"errorText"},[e._v("Passwords must be identical.")]),s("div",{staticClass:"input"},["checkbox"===e.repeatType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.repeatPassword)?e._i(e.repeatPassword,null)>-1:e.repeatPassword},on:{change:[function(r){var s=e.repeatPassword,a=r.target,t=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.repeatPassword=s.concat([o])):i>-1&&(e.repeatPassword=s.slice(0,i).concat(s.slice(i+1)))}else e.repeatPassword=t},function(r){return e.$v.repeatPassword.$touch()}]}}):"radio"===e.repeatType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:"radio"},domProps:{checked:e._q(e.repeatPassword,null)},on:{change:[function(r){e.repeatPassword=null},function(r){return e.$v.repeatPassword.$touch()}]}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:e.repeatType},domProps:{value:e.repeatPassword},on:{change:function(r){return e.$v.repeatPassword.$touch()},input:function(r){r.target.composing||(e.repeatPassword=r.target.value)}}}),s("div",{staticClass:"icons"},["password"===e.repeatType?s("img",{attrs:{src:"https://img.icons8.com/material/24/000000/visible--v1.png"},on:{click:function(r){e.repeatType="text"}}}):e._e(),"text"===e.repeatType?s("img",{attrs:{src:"https://img.icons8.com/material-rounded/24/000000/hide.png"},on:{click:function(r){e.repeatType="password"}}}):e._e()])])]),s("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])]),s("a",{on:{click:function(r){return e.$emit("LoginAccount")}}},[e._v("I already have an account")])])])},j=[],L={components:{modal:m},data:function(){return{email:"",password:"",repeatPassword:"",passwordType:"password",repeatType:"password"}},validations:{email:{required:w["required"],email:w["email"]},password:{required:w["required"],minLength:Object(w["minLength"])(6)},repeatPassword:{sameAsPassword:Object(w["sameAs"])("password")}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={email:this.email,password:this.password};console.log(e),this.email="",this.password="",this.repeatPassword="",this.$v.$reset(),this.$emit("close")}},resetForm:function(){this.email="",this.password="",this.$v.$reset(),this.$emit("close")}}},O=L,V=(s("517b"),Object(c["a"])(O,F,j,!1,null,null,null)),E=V.exports,I={components:{modals:m,modalValidate:g,modalValidateNew:T,login:S,registration:E},data:function(){return{modalFirst:!1,modalSecond:{show:!1,name:"",email:""},modalValidate:!1,modalValidateNew:!1,login:!1,registration:!1}},methods:{submitSecondForm:function(){console.log({name:this.modalSecond.name,email:this.modalSecond.email}),this.modalSecond.name="",this.modalSecond.email="",this.modalSecond.show=!1},registrationAccount:function(){this.login=!1,this.registration=!0},LoginAccount:function(){this.registration=!1,this.login=!0}}},M=I,D=(s("5c0b"),Object(c["a"])(M,t,o,!1,null,null,null)),R=D.exports,B=s("1dce"),H=s.n(B);s("c1c3");a["a"].use(H.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,r,s){"use strict";var a=s("b19e"),t=s.n(a);t.a},"6a4d":function(e,r,s){"use strict";var a=s("38c3"),t=s.n(a);t.a},"900c":function(e,r,s){"use strict";var a=s("b33c"),t=s.n(a);t.a},b19e:function(e,r,s){},b33c:function(e,r,s){},c1c3:function(e,r,s){},d119:function(e,r,s){}});