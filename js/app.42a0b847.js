(function(t){function n(n){for(var s,o,r=n[0],l=n[1],u=n[2],c=0,h=[];c<r.length;c++)o=r[c],i[o]&&h.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(n);while(h.length)h.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],s=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(s=!1)}s&&(a.splice(n--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},a=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5aa20244"}[t]+".js"}function r(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var n=[],e=i[t];if(0!==e)if(e)n.push(e[2]);else{var s=new Promise(function(n,s){e=i[t]=[n,s]});n.push(e[2]=s);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t),a=function(n){l.onerror=l.onload=null,clearTimeout(u);var e=i[t];if(0!==e){if(e){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+a+")");o.type=s,o.request=a,e[1](o)}i[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(n)},r.m=t,r.c=s,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)r.d(e,s,function(n){return t[n]}.bind(null,s));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var p=u;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"246b":function(t,n,e){},"472c":function(t,n,e){"use strict";var s=e("246b"),i=e.n(s);i.a},"48f9":function(t,n,e){},"52f7":function(t,n,e){},"54ef":function(t,n,e){"use strict";var s=e("48f9"),i=e.n(s);i.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("appheader",{staticClass:"appheader"}),e("div",{staticClass:"blank"}),e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/info"}},[t._v("Info")])],1),e("router-view")],1)},a=[],o=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"appheader"},[e("h1",[t._v("TODO APP")])])}],l={name:"appheader"},u=l,c=(e("c253"),e("2877")),p=Object(c["a"])(u,o,r,!1,null,"2e0532f3",null),h=p.exports,f={name:"App",components:{appheader:h}},d=f,v=(e("54ef"),Object(c["a"])(d,i,a,!1,null,"bba0cb48",null)),m=v.exports,g=e("8c4f"),w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"taskList stock board task"},[e("table",[e("tr",[t._m(0),e("th",[e("span",{staticClass:"button",on:{click:function(n){return t.addTask("stock")}}},[e("p",{staticClass:"add"},[t._v("+")])])])]),t._l(t.list,function(n,s){return e("tr",{key:s},["stock"==n.status?e("td",{attrs:{colspan:"2"},on:{click:function(e){return t.show(n,s)}}},[e("label",[t._v(t._s(n.title))]),e("star-rating",{attrs:{"star-size":20,inline:"","show-rating":!1,"read-only":!0},model:{value:n.rating,callback:function(e){t.$set(n,"rating",e)},expression:"task.rating"}})],1):t._e()])})],2)]),e("div",{staticClass:"taskList running board task"},[e("table",[e("tr",[t._m(1),e("th",[e("span",{staticClass:"button",on:{click:function(n){return t.addTask("running")}}},[e("p",{staticClass:"add"},[t._v("+")])])])]),t._l(t.list,function(n,s){return e("tr",{key:s},["running"==n.status?e("td",{attrs:{colspan:"2"},on:{click:function(e){return t.show(n,s)}}},[e("label",[t._v(t._s(n.title))]),e("star-rating",{attrs:{"star-size":20,inline:"","show-rating":!1,"read-only":!0},model:{value:n.rating,callback:function(e){t.$set(n,"rating",e)},expression:"task.rating"}})],1):t._e()])})],2)]),e("div",{staticClass:"taskList completion board task"},[e("table",[e("tr",[t._m(2),e("th",[e("span",{staticClass:"button",on:{click:function(n){return t.addTask("completion")}}},[e("p",{staticClass:"add"},[t._v("+")])])])]),t._l(t.list,function(n,s){return e("tr",{key:s},["completion"==n.status?e("td",{attrs:{colspan:"2"},on:{click:function(e){return t.show(n,s)}}},[e("label",[t._v(t._s(n.title))]),e("star-rating",{attrs:{"star-size":20,inline:"","show-rating":!1,"read-only":!0},model:{value:n.rating,callback:function(e){t.$set(n,"rating",e)},expression:"task.rating"}})],1):t._e()])})],2)]),e("modal",{staticClass:"showBox",attrs:{name:"popup",adaptive:!0,draggable:!0,width:700,height:400}},[e("div",{staticClass:"main"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.shown.title,expression:"shown.title"}],staticClass:"shownTitle",attrs:{type:"text",placeholder:"タイトルを入力"},domProps:{value:t.shown.title},on:{input:function(n){n.target.composing||t.$set(t.shown,"title",n.target.value)}}}),e("a",[t._v("状態:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.shown.status,expression:"shown.status"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.$set(t.shown,"status",n.target.multiple?e:e[0])}}},[e("option",[t._v("stock")]),e("option",[t._v("running")]),e("option",[t._v("completion")])]),e("a",[t._v("優先度:")]),e("star-rating",{attrs:{"star-size":20,inline:""},model:{value:t.shown.rating,callback:function(n){t.$set(t.shown,"rating",n)},expression:"shown.rating"}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.shown.info,expression:"shown.info"}],staticClass:"shownInfo",attrs:{rows:"8",cols:"80"},domProps:{value:t.shown.info},on:{input:function(n){n.target.composing||t.$set(t.shown,"info",n.target.value)}}}),e("button",{attrs:{type:"button",name:"button"},on:{click:t.applyTask}},[t.isedit?e("span",[t._v("適用")]):e("span",[t._v("追加")])]),t.isedit?e("button",{attrs:{type:"button",name:"button"},on:{click:t.delTask}},[e("span",[t._v("削除")])]):t._e()],1)])],1)},b=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("th",[e("p",{staticClass:"title"},[t._v("未着手")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("th",[e("p",{staticClass:"title"},[t._v("実行中")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("th",[e("p",{staticClass:"title"},[t._v("完了")])])}],_=e("c1da"),k=e.n(_),y={name:"home",data:function(){return{list:[],shown:{title:null,status:null,info:null,rating:0},editIndex:null,isedit:!1}},components:{StarRating:k.a},mounted:function(){this.list=this.$store.state.task},methods:{show:function(t,n){this.shown.title=t.title,this.shown.status=t.status,this.shown.info=t.info,this.shown.rating=t.rating,this.editIndex=n,this.isedit=!0,this.$modal.show("popup")},hide:function(){this.shown=[],this.$modal.hide("popup")},addTask:function(t){this.shown.title=null,this.shown.status=t,this.shown.info=null,this.shown.rating=0,this.isedit=!1,this.$modal.show("popup")},applyTask:function(){if(this.shown.title){if(this.isedit){var t=this.editIndex,n=["title","status","info","rating"];n.title=this.shown.title,n.status=this.shown.status,n.info=this.shown.info,n.rating=this.shown.rating,this.list.splice(t,1,n)}else{var e=["title","status","info","rating"];e.title=this.shown.title,e.status=this.shown.status,e.info=this.shown.info,e.rating=this.shown.rating,this.list.push(e),this.shown.title=null,this.shown.status=null,this.shown.info=null,this.shown.rating=0}this.$store.dispatch("updatelist",this.list).then(function(){return function(){this.list=this.$store.state.task}}),this.$modal.hide("popup")}else alert("タイトルを入力してください!!")},delTask:function(){var t=this.editIndex;this.list.splice(t,1),this.$modal.hide("popup")}}},x=y,$=(e("472c"),Object(c["a"])(x,w,b,!1,null,"0567504e",null)),C=$.exports,O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"info"},[e("h1",[t._v(" Info ")]),e("h2",[t._v(" "+t._s(t.message)+" ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newmessage,expression:"newmessage"}],attrs:{type:"text"},domProps:{value:t.newmessage},on:{input:function(n){n.target.composing||(t.newmessage=n.target.value)}}}),e("br"),e("input",{attrs:{type:"button",value:"commit"},on:{click:function(n){return t.updateMessage()}}})])},T=[],j={name:"info",data:function(){return{newmessage:""}},methods:{updateMessage:function(){}}},P=j,E=(e("c8a0"),Object(c["a"])(P,O,T,!1,null,"7b7390c4",null)),I=E.exports;s["a"].use(g["a"]);var S=new g["a"]({routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/info",name:"info",component:I}]}),M=e("2f62");s["a"].use(M["a"]);var A=new M["a"].Store({state:{task:[{title:"title1",status:"stock",info:"text",rating:0},{title:"title2",status:"running",info:"text",rating:0},{title:"title3",status:"completion",info:"text",rating:0}]},mutations:{updatelist:function(t,n){t.task=n.list}},actions:{updatelist:function(t,n){var e=t.commit;e("updatelist",{list:n})}}}),z=e("1881"),L=e.n(z);s["a"].use(L.a),s["a"].config.productionTip=!1,new s["a"]({router:S,store:A,render:function(t){return t(m)}}).$mount("#app")},c253:function(t,n,e){"use strict";var s=e("c66e"),i=e.n(s);i.a},c66e:function(t,n,e){},c8a0:function(t,n,e){"use strict";var s=e("52f7"),i=e.n(s);i.a}});
//# sourceMappingURL=app.42a0b847.js.map