(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-456023ca"],{"11e9":function(t,e,n){var s=n("52a7"),r=n("4630"),i=n("6821"),a=n("6a99"),c=n("69a8"),o=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=i(t),e=a(e,!0),o)try{return u(t,e)}catch(n){}if(c(t,e))return r(!s.f.call(t,e),t[e])}},"5dbc":function(t,e,n){var s=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&s(i)&&r&&r(t,i),t}},"78c1":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar"),n("BusinessListing",{attrs:{businessID:t.businessID}})],1)},r=[],i=(n("c5f6"),n("d000")),a=n("896a"),c={name:"Test",components:{NavBar:i["a"],BusinessListing:a["a"]},data:function(){return{businessID:Number(this.$route.params.businessID)}}},o=c,u=n("2877"),f=Object(u["a"])(o,s,r,!1,null,null,null);e["default"]=f.exports},"896a":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"business-profile-info"},[n("div",{staticClass:"business-name"},[n("router-link",{attrs:{to:t.getBusinessLink()}},[n("b",[t._v(t._s(t.business.name)+" ")]),n("br")]),n("i",[t._v(t._s(t.business.description))]),n("p",[t._v("Safety Rating: "+t._s(t.score)+" ")]),n("p",[t._v(" Business Type: "+t._s(t.business.type)+" ")]),n("p",[t._v(" Status: "+t._s(t.business.status)+" ")])],1)])},r=[],i=(n("c5f6"),n("bc3a")),a=n.n(i),c={name:"BusinessListing",data:function(){return{business:Object,score:"No rating yet"}},props:{businessID:Number},created:function(){this.getBusiness(),this.loadMetrics()},methods:{getBusiness:function(){var t=this;a.a.get("/api/business/id/".concat(this.businessID)).then((function(e){t.business=e.data}))},loadMetrics:function(){var t=this;a.a.get("/api/metrics/".concat(this.businessID)).then((function(e){var n=e.data,s=n.map((function(t){return t.confirms/(t.confirms+t.denies)})),r=100*s.reduce((function(t,e){return t+e}))/n.length;t.score="".concat(Math.round(r),"%")}))},getBusinessLink:function(){return"/businesses/"+this.businessID}}},o=c,u=n("2877"),f=Object(u["a"])(o,s,r,!1,null,null,null);e["a"]=f.exports},"8b97":function(t,e,n){var s=n("d3f4"),r=n("cb7c"),i=function(t,e){if(r(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,s){try{s=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),s(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:s(t,n),t}}({},!1):void 0),check:i}},9093:function(t,e,n){var s=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return s(t,r)}},aa77:function(t,e,n){var s=n("5ca1"),r=n("be13"),i=n("79e5"),a=n("fdef"),c="["+a+"]",o="​",u=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),p=function(t,e,n){var r={},c=i((function(){return!!a[t]()||o[t]()!=o})),u=r[t]=c?e(b):a[t];n&&(r[n]=u),s(s.P+s.F*c,"String",r)},b=p.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=p},c5f6:function(t,e,n){"use strict";var s=n("7726"),r=n("69a8"),i=n("2d95"),a=n("5dbc"),c=n("6a99"),o=n("79e5"),u=n("9093").f,f=n("11e9").f,p=n("86cc").f,b=n("aa77").trim,l="Number",_=s[l],d=_,v=_.prototype,h=i(n("2aeb")(v))==l,g="trim"in String.prototype,I=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():b(e,3);var n,s,r,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+e}for(var a,o=e.slice(2),u=0,f=o.length;u<f;u++)if(a=o.charCodeAt(u),a<48||a>r)return NaN;return parseInt(o,s)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(h?o((function(){v.valueOf.call(n)})):i(n)!=l)?a(new d(I(e)),n,_):I(e)};for(var N,m=n("9e1e")?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;m.length>y;y++)r(d,N=m[y])&&!r(_,N)&&p(_,N,f(d,N));_.prototype=v,v.constructor=_,n("2aba")(s,l,_)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-456023ca.a61a44c0.js.map