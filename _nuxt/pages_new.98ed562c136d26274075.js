webpackJsonp([2],{"/Do1":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".item[data-v-f2a89916]{display:grid;grid:repeat(4,1.5em)/repeat(10,1fr);grid-row-gap:1em}.score[data-v-f2a89916]{grid-row:1/-1;grid-column:span 1;-ms-flex-item-align:center;align-self:center;justify-self:center}.title[data-v-f2a89916]{grid-row:1/3;grid-column:2/-2;-ms-flex-item-align:end;align-self:end}.details[data-v-f2a89916]{grid-row:3/-1;grid-column:6/-2;justify-self:end}.comments[data-v-f2a89916]{grid-row:3/-1;grid-column:2/6}",""])},"3jiD":function(t,e,s){"use strict";var a=s("Xxa5"),n=s.n(a),i=s("exGp"),r=s.n(i),c=s("MBjo");e.a={components:{Items:c.a},fetch:function(){var t=r()(n.a.mark(function t(e){var s=e.store;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.dispatch("LOAD_ITEMS","newstories.json");case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},"5ExO":function(t,e,s){var a=s("/Do1");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("3e0c2560",a,!1,{sourceMap:!1})},"I8/Z":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box content"},t._l(t.items,function(e){return s("article",{key:e.id,staticClass:"post"},[s("h4",{staticClass:"title"},[t._v("\n      "+t._s(e.title)+"\n      "),e.url?[s("a",{staticClass:"f7",attrs:{href:e.url}},[t._v("("+t._s(t._f("hostname")(e.url))+")")])]:t._e()],2),s("span",{staticClass:"pull-right has-text-grey-light"},[e.descendants?[s("i",{staticClass:"fa fa-comments"}),t._v("  \n        "),s("nuxt-link",{attrs:{to:"/item/"+e.id}},[t._v(t._s(e.descendants)+" comments")])]:t._e()],2),s("div",{staticClass:"media"},[t._m(0,!0),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("nuxt-link",{attrs:{to:"/user/"+e.by}},[t._v(" "+t._s(e.by)+" ")]),t._v("\n             \n            "+t._s(t._f("timeSince")(e.time))+" ago\n            "),s("span",{staticClass:"tag"},[t._v("\n              "+t._s(e.score)+"\n            ")])],1)])])])])}))};a._withStripped=!0;var n={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-left"},[e("p",{staticClass:"image is-32x32"},[e("img",{attrs:{src:"http://bulma.io/images/placeholders/128x128.png",alt:""}})])])}]};e.a=n},MBjo:function(t,e,s){"use strict";var a=s("fd7L"),n=s("I8/Z"),i=!1;var r=function(t){i||s("5ExO")},c=s("VU/8")(a.a,n.a,!1,r,"data-v-f2a89916",null);c.options.__file="components/Items.vue",e.a=c.exports},Vc0N:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("3jiD"),n=s("pSfI"),i=s("VU/8")(a.a,n.a,!1,null,null,null);i.options.__file="pages/new.vue",e.default=i.exports},fd7L:function(t,e,s){"use strict";var a=s("NYxO");e.a={computed:Object(a.mapState)(["users","ids","items"])}},pSfI:function(t,e,s){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Items")],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n}});