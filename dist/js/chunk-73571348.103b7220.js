(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73571348"],{"0bfb":function(s,e,t){"use strict";var r=t("cb7c");s.exports=function(){var s=r(this),e="";return s.global&&(e+="g"),s.ignoreCase&&(e+="i"),s.multiline&&(e+="m"),s.unicode&&(e+="u"),s.sticky&&(e+="y"),e}},"11e9":function(s,e,t){var r=t("52a7"),n=t("4630"),a=t("6821"),i=t("6a99"),o=t("69a8"),u=t("c69a"),c=Object.getOwnPropertyDescriptor;e.f=t("9e1e")?c:function(s,e){if(s=a(s),e=i(e,!0),u)try{return c(s,e)}catch(t){}if(o(s,e))return n(!r.f.call(s,e),s[e])}},3846:function(s,e,t){t("9e1e")&&"g"!=/./g.flags&&t("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:t("0bfb")})},"5dbc":function(s,e,t){var r=t("d3f4"),n=t("8b97").set;s.exports=function(s,e,t){var a,i=e.constructor;return i!==t&&"function"==typeof i&&(a=i.prototype)!==t.prototype&&r(a)&&n&&n(s,a),s}},"5e95":function(s,e,t){"use strict";t.r(e);var r=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("NavBar"),t("div",{staticClass:"business-profile"},[t("b-row",{staticClass:"m-5",attrs:{"no-gutters":""}},[t("b-col",{attrs:{cols:"4"}},[t("BusinessInfo",{attrs:{businessID:s.businessID}})],1),t("b-col",[t("MetricsList",{attrs:{businessID:s.businessID}})],1)],1)],1)],1)},n=[],a=(t("c5f6"),function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("b-card",{staticClass:"mb-5",attrs:{title:s.business.name}},[s.editing?t("div",[t("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter new description",rows:"2",maxlength:"150"},model:{value:s.description,callback:function(e){s.description=e},expression:"description"}}),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Business Type: ","label-for":"businessType"}},[t("b-form-select",{attrs:{id:"businessType",options:s.possibleTypes},model:{value:s.type,callback:function(e){s.type="string"===typeof e?e.trim():e},expression:"type"}})],1),t("b-form-group",{staticClass:"mt-1",attrs:{"label-cols-sm":"4",label:"Status: ","label-for":"status"}},[t("b-form-select",{attrs:{id:"status",options:s.possibleStatuses},model:{value:s.status,callback:function(e){s.status="string"===typeof e?e.trim():e},expression:"status"}})],1),t("u",[s._v("Contact")]),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Address: ","label-for":"address"}},[t("b-form-input",{attrs:{id:"address",placeholder:"Enter new address"},model:{value:s.address,callback:function(e){s.address=e},expression:"address"}})],1),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Phone: ","label-for":"phone"}},[t("b-form-input",{attrs:{id:"phone",placeholder:"Enter new number"},model:{value:s.phone,callback:function(e){s.phone=e},expression:"phone"}})],1),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Email: ","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",placeholder:"Enter new email"},model:{value:s.email,callback:function(e){s.email=e},expression:"email"}})],1),t("u",[s._v("Hours")]),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Monday: ","label-for":"mondayHours"}},[t("b-form-input",{attrs:{id:"mondayHours",placeholder:"Enter Monday hours"},model:{value:s.monday_hours,callback:function(e){s.monday_hours=e},expression:"monday_hours"}})],1),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Tuesday: ","label-for":"tuesdayHours"}},[t("b-form-input",{attrs:{id:"tuesdayHours",placeholder:"Enter Tuesday hours"},model:{value:s.tuesday_hours,callback:function(e){s.tuesday_hours=e},expression:"tuesday_hours"}})],1),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Wednesday: ","label-for":"wednesdayHours"}},[t("b-form-input",{attrs:{id:"wednesdayHours",placeholder:"Enter Wednesday hours"},model:{value:s.wednesday_hours,callback:function(e){s.wednesday_hours=e},expression:"wednesday_hours"}})],1),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Thursday: ","label-for":"thursdayHours"}},[t("b-form-input",{attrs:{id:"thursdayHours",placeholder:"Enter Thursday hours"},model:{value:s.thursday_hours,callback:function(e){s.thursday_hours=e},expression:"thursday_hours"}})],1),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Friday: ","label-for":"fridayHours"}},[t("b-form-input",{attrs:{id:"fridayHours",placeholder:"Enter Friday hours"},model:{value:s.friday_hours,callback:function(e){s.friday_hours=e},expression:"friday_hours"}})],1),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Saturday: ","label-for":"saturdayHours"}},[t("b-form-input",{attrs:{id:"saturdayHours",placeholder:"Enter Saturday hours"},model:{value:s.saturday_hours,callback:function(e){s.saturday_hours=e},expression:"saturday_hours"}})],1),t("b-form-group",{attrs:{"label-cols-sm":"4",label:"Sunday: ","label-for":"sundayHours"}},[t("b-form-input",{attrs:{id:"sundayHours",placeholder:"Enter Sunday hours"},model:{value:s.sunday_hours,callback:function(e){s.sunday_hours=e},expression:"sunday_hours"}})],1),t("div",{staticClass:"edit-info"},[t("b-row",{staticClass:"mt-4"},[t("b-button",{staticClass:"ml-3",on:{click:s.cancelChanges}},[s._v(" Cancel Changes")]),t("b-button",{staticClass:"ml-2",on:{click:s.saveChanges}},[s._v("Save Changes")])],1)],1)],1):t("div",[t("b-card-sub-title",[s._v(s._s(s.business.description))]),t("br"),t("p",[s._v("Business Type: "+s._s(s.business.type))]),t("p",[s._v("Status: "+s._s(s.business.status))]),t("p",[t("u",[s._v(" Contact ")])]),s._v(" Address: "+s._s(s.business.address)+" "),t("br"),s._v(" Phone: "+s._s(s.business.phone)+" "),t("br"),s._v(" Email: "+s._s(s.business.email)+" "),t("br"),t("br"),t("p",[t("u",[s._v(" Hours ")])]),s._v(" Monday: "+s._s(s.business.monday_hours)+" "),t("br"),s._v(" Tuesday: "+s._s(s.business.tuesday_hours)+" "),t("br"),s._v(" Wednesday: "+s._s(s.business.wednesday_hours)+" "),t("br"),s._v(" Thursday: "+s._s(s.business.thursday_hours)+" "),t("br"),s._v(" Friday: "+s._s(s.business.friday_hours)),t("br"),s._v(" Saturday: "+s._s(s.business.saturday_hours)+" "),t("br"),s._v(" Sunday: "+s._s(s.business.sunday_hours)+" "),t("br"),s.correctBusiness?t("div",[t("b-button",{staticClass:"mt-4",on:{click:s.editBusinessInfo}},[s._v("Edit business info")])],1):s._e()],1)])],1)}),i=[],o=(t("7f7f"),t("6b54"),t("bc3a")),u=t.n(o),c=t("56d7"),l={name:"BusinessProfile",data:function(){return{business:Object,editing:!1,name:"",password:"",status:"",email:"",phone:"",type:"",description:"",address:"",monday_hours:"",tuesday_hours:"",wednesday_hours:"",thursday_hours:"",friday_hours:"",saturday_hours:"",sunday_hours:"",possibleStatuses:[],possibleTypes:[],correctBusiness:!1}},props:{businessID:Number},created:function(){this.loadStatuses(),this.loadBusinessTypes(),this.getBusiness(),this.correctBusiness=this.businessID.toString()===this.$cookie.get("business-auth")},methods:{getBusiness:function(){var s=this;u.a.get("/api/business/id/".concat(this.businessID)).then((function(e){s.business=e.data,s.name=s.business.name,s.password=s.business.password,s.status=s.business.status,s.email=s.business.email,s.phone=s.business.phone,s.type=s.business.type,s.description=s.business.description,s.address=s.business.address,s.monday_hours=s.business.monday_hours,s.tuesday_hours=s.business.tuesday_hours,s.wednesday_hours=s.business.wednesday_hours,s.thursday_hours=s.business.thursday_hours,s.friday_hours=s.business.friday_hours,s.saturday_hours=s.business.saturday_hours,s.sunday_hours=s.business.sunday_hours}))},editBusinessInfo:function(){this.editing=!0},cancelChanges:function(){this.editing=!1,this.name=this.business.name,this.password=this.business.password,this.status=this.business.status,this.email=this.business.email,this.phone=this.business.phone,this.type=this.business.type,this.description=this.business.description,this.address=this.business.address,this.monday_hours=this.business.monday_hours,this.tuesday_hours=this.business.tuesday_hours,this.wednesday_hours=this.business.wednesday_hours,this.thursday_hours=this.business.thursday_hours,this.friday_hours=this.business.friday_hours,this.saturday_hours=this.business.saturday_hours,this.sunday_hours=this.business.sunday_hours},saveChanges:function(){var s=this,e=this.$data;u.a.put("/api/business/id/".concat(this.businessID),e).then((function(){s.newAddress="",s.newPhone="",s.editing=!1,s.getBusiness()})).catch((function(s){c["eventBus"].$emit("update-business-error",s)}))},loadStatuses:function(){var s=this;u.a.get("/api/business/statuses").then((function(e){s.possibleStatuses=e.data}))},loadBusinessTypes:function(){var s=this;u.a.get("/api/business/types").then((function(e){s.possibleTypes=e.data}))}}},d=l,b=t("2877"),h=Object(b["a"])(d,a,i,!1,null,null,null),f=h.exports,p=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"ml-5"},[t("p",[t("b",[s._v("Safety Rating: "+s._s(s.score))])]),t("div",[s.success?t("div",{staticClass:"success-message"},[s._v(" "+s._s(s.success)+" ")]):s._e(),s.error?t("div",{staticClass:"error-message"},[s._v(" "+s._s(s.error)+" ")]):s._e(),t("div",{staticClass:"metric-container"},[t("b-list-group",s._l(s.metrics,(function(s){return t("b-list-group-item",{key:s.metric_id},[t("Metric",{attrs:{metric:s}})],1)})),1)],1)])])},m=[],y=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"metric"},[t("div",{staticClass:"metric-name"},[t("b-row",[t("b-col",[t("p",[s._v(s._s(s.metric.metric)+": ")])]),t("b-col",{attrs:{cols:"3"}},[t("p",[t("b-button",{staticClass:"mr-2",on:{click:s.addConfirm}},[s._v("Confirm")]),s._v(" "+s._s(s.metric.confirms))],1),t("p",[t("b-button",{staticClass:"mr-2",on:{click:s.addDeny}},[s._v("Deny")]),s._v(" "+s._s(s.metric.denies))],1)])],1)],1)])},_=[],v={name:"Metric",props:{metric:Object},data:function(){return{}},methods:{addConfirm:function(){u.a.put("/api/metrics/confirmation/".concat(this.metric.metric_id)).then((function(s){c["eventBus"].$emit("confirm-success",s)})).catch((function(s){c["eventBus"].$emit("confirm-error",s)}))},addDeny:function(){u.a.put("/api/metrics/refutation/".concat(this.metric.metric_id)).then((function(s){c["eventBus"].$emit("deny-success",s)})).catch((function(s){c["eventBus"].$emit("deny-error",s)}))}}},g=v,I=Object(b["a"])(g,y,_,!1,null,null,null),w=I.exports,E={name:"MetricsList",components:{Metric:w},data:function(){return{error:"",success:"",metrics:[],score:"No rating yet"}},props:{businessID:Number},created:function(){var s=this;c["eventBus"].$on("confirm-success",(function(){s.loadMetrics()})),c["eventBus"].$on("deny-success",(function(){s.clearMessages(),s.loadMetrics()}))},mounted:function(){this.loadMetrics()},methods:{loadMetrics:function(){var s=this;u.a.get("/api/metrics/".concat(this.businessID)).then((function(e){s.metrics=e.data;var t=s.metrics.map((function(s){return s.confirms/(s.confirms+s.denies)})),r=100*t.reduce((function(s,e){return s+e}))/s.metrics.length;s.score=isNaN(r)?"No rating yet!":"".concat(Math.round(r),"%")}))},clearMessages:function(){var s=this;setInterval((function(){s.success="",s.error=""}),7e3)},getTitle:function(){return"Safety Rating: ".concat(this.score)}}},C=E,x=Object(b["a"])(C,p,m,!1,null,null,null),N=x.exports,k=t("d000"),S={name:"businessProfile",components:{BusinessInfo:f,MetricsList:N,NavBar:k["a"]},data:function(){return{businessID:Number(this.$route.params.businessID),editingInfo:!1,isSignedIn:!!this.$cookie.get("scope-auth")}},methods:{editInfo:function(){this.editingInfo=!0}}},B=S,T=Object(b["a"])(B,r,n,!1,null,null,null);e["default"]=T.exports},"6b54":function(s,e,t){"use strict";t("3846");var r=t("cb7c"),n=t("0bfb"),a=t("9e1e"),i="toString",o=/./[i],u=function(s){t("2aba")(RegExp.prototype,i,s,!0)};t("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?u((function(){var s=r(this);return"/".concat(s.source,"/","flags"in s?s.flags:!a&&s instanceof RegExp?n.call(s):void 0)})):o.name!=i&&u((function(){return o.call(this)}))},"8b97":function(s,e,t){var r=t("d3f4"),n=t("cb7c"),a=function(s,e){if(n(s),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};s.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(s,e,r){try{r=t("9b43")(Function.call,t("11e9").f(Object.prototype,"__proto__").set,2),r(s,[]),e=!(s instanceof Array)}catch(n){e=!0}return function(s,t){return a(s,t),e?s.__proto__=t:r(s,t),s}}({},!1):void 0),check:a}},9093:function(s,e,t){var r=t("ce10"),n=t("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(s){return r(s,n)}},aa77:function(s,e,t){var r=t("5ca1"),n=t("be13"),a=t("79e5"),i=t("fdef"),o="["+i+"]",u="​",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(s,e,t){var n={},o=a((function(){return!!i[s]()||u[s]()!=u})),c=n[s]=o?e(b):i[s];t&&(n[t]=c),r(r.P+r.F*o,"String",n)},b=d.trim=function(s,e){return s=String(n(s)),1&e&&(s=s.replace(c,"")),2&e&&(s=s.replace(l,"")),s};s.exports=d},c5f6:function(s,e,t){"use strict";var r=t("7726"),n=t("69a8"),a=t("2d95"),i=t("5dbc"),o=t("6a99"),u=t("79e5"),c=t("9093").f,l=t("11e9").f,d=t("86cc").f,b=t("aa77").trim,h="Number",f=r[h],p=f,m=f.prototype,y=a(t("2aeb")(m))==h,_="trim"in String.prototype,v=function(s){var e=o(s,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():b(e,3);var t,r,n,a=e.charCodeAt(0);if(43===a||45===a){if(t=e.charCodeAt(2),88===t||120===t)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var i,u=e.slice(2),c=0,l=u.length;c<l;c++)if(i=u.charCodeAt(c),i<48||i>n)return NaN;return parseInt(u,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(s){var e=arguments.length<1?0:s,t=this;return t instanceof f&&(y?u((function(){m.valueOf.call(t)})):a(t)!=h)?i(new p(v(e)),t,f):v(e)};for(var g,I=t("9e1e")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;I.length>w;w++)n(p,g=I[w])&&!n(f,g)&&d(f,g,l(p,g));f.prototype=m,m.constructor=f,t("2aba")(r,h,f)}},fdef:function(s,e){s.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-73571348.103b7220.js.map