(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{285:function(t,n,e){var content=e(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(76).default)("67c3d4b8",content,!0,{sourceMap:!1})},288:function(t,n,e){"use strict";e(285)},289:function(t,n,e){var o=e(75)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.dev{\n  background:#bdc4db;\n  color:#596ca6;\n  width:50%;\n  padding:1.5rem;\n  margin:1rem 0 1rem 1rem\n}\n.dev .subtitle{\n  font-weight:500;\n  font-size:1.2em\n}\n.dev hr{\n  width:50%;\n  border:none;\n  border-top:1px solid #596ca6\n}\n.dev .dev-items{\n  padding:.5rem 1.5rem\n}\n.dev .item{\n  display:flex;\n  align-items:flex-start;\n  margin:5px 0\n}\n.dev .item .tick{\n  width:5px;\n  height:5px;\n  margin-top:7px;\n  margin-right:.6rem;\n  border-radius:50%;\n  background:#596ca6\n}\n.completed .text{\n  text-decoration:line-through\n}\n.completed .content{\n  display:flex;\n  justify-content:flex-end;\n  flex-direction:column\n}\n@media (max-width:960px){\n.dev{\n    width:95%;\n    margin:0 auto;\n    padding:.5rem\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},296:function(t,n,e){"use strict";e.r(n);e(63);var o={name:"FutureDev",data:function(){return{planned:[{id:"".concat(Math.floor(Math.random())),task:"Add More Contact Detail",date:""},{id:"".concat(Math.floor(Math.random())),task:"Add location proximity search",date:""},{id:"".concat(Math.floor(Math.random())),task:"Add local councillors",date:""}],completed:[{id:"".concat(Math.floor(Math.random())),task:"Create web app for MP look-up",date:"".concat((new Date).getMonth(),"/ ").concat((new Date).getFullYear())},{id:"".concat(Math.floor(Math.random())),task:"Add Statistical Information",date:""}]}}},r=(e(288),e(22)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"w-5/6 lg:w-1/2 text-center py-4 px-4 border border-gray-500"},[e("h4",{staticClass:"text-gray-800 text-2xl font-semibold"},[t._v("What to look out for...")]),t._v(" "),e("div",{staticClass:"pl-2"},[e("p",{staticClass:"text-gray-700 text-lg font-medium"},[t._v("Planned")]),t._v(" "),t._l(t.planned,(function(n){return e("ul",{key:n.id,staticClass:"flex gap-5 items-center justify-center"},[e("li",{staticClass:"text-gray-500"},[t._v(t._s(n.task))])])}))],2),t._v(" "),e("div",{staticClass:"pl-2"},[e("p",{staticClass:"text-gray-700 text-lg font-medium"},[t._v("Completed")]),t._v(" "),t._l(t.completed,(function(n){return e("ul",{key:n.id,staticClass:"flex gap-5 items-center justify-center"},[e("li",{staticClass:"text-gray-500 italic line-through"},[t._v(t._s(n.task)+" "),e("i",{staticClass:"text-green-600 fas fa-check"})])])}))],2)])}),[],!1,null,null,null);n.default=component.exports}}]);