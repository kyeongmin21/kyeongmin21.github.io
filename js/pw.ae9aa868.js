(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pw"],{"82ae":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"findPw"},[t("h6",[e._v("PW를 잊으셨나요?")]),t("span",[e._v("아래 정보를 입력해주세요.")]),t("ValidationObserver",{ref:"observer",staticClass:"mt30",attrs:{tag:"div"},scopedSlots:e._u([{key:"default",fn:function({invalid:a}){return[t("p",[e._v("이름")]),t("InputWithValidation",{attrs:{rules:"required|name",type:"text",title:"이름",name:"form.name",autocomplete:"off",placeholder:"이름을 입력하세요."},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),t("p",[e._v("아이디")]),t("InputWithValidation",{attrs:{rules:"required|id",type:"text",title:"아이디",name:"form.userId",autocomplete:"off",placeholder:"아이디를 입력하세요."},model:{value:e.form.userId,callback:function(t){e.$set(e.form,"userId",t)},expression:"form.userId"}}),t("p",[e._v("이메일")]),t("InputWithValidation",{attrs:{rules:"required|email",type:"text",title:"이메일",name:"form.email",autocomplete:"off",placeholder:"이메일을 입력해주세요."},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),t("div",{staticClass:"btn_wrap mt30"},[t("button",{staticClass:"button_default",attrs:{disabled:a},on:{click:e.checkPw}},[e._v("확인")]),t("router-link",{attrs:{to:"/join/step1"}},[t("p",[e._v("회원가입")])])],1)]}}])})],1)},r=[],o=a("7bb1"),n=a("6636"),i=a("e639"),l={name:"FindPw",components:{ValidationObserver:o["a"],InputWithValidation:n["a"]},data(){return{form:{name:"",userId:"",email:""}}},methods:{checkPw(){i["a"].checkPw(this.form,e=>{e.success&&alert(e.data.message)})}}},c=l,u=a("2877"),d=Object(u["a"])(c,s,r,!1,null,null,null);t["default"]=d.exports},e639:function(e,t,a){"use strict";var s=a("8ab8");const r=async(e,t)=>{const a={method:"POST",url:"/user/id",data:e};await Object(s["a"])(a).then(e=>{e.data.success&&t(e.data)}).catch(e=>{alert(e.response.data.error.message)})},o=async(e,t)=>{const a={method:"POST",url:"/user/pw",data:e};await Object(s["a"])(a).then(e=>{e.data.success&&t(e.data)}).catch(e=>{alert(e.response.data.error.message)})};t["a"]={checkId:r,checkPw:o}}}]);
//# sourceMappingURL=pw.ae9aa868.js.map