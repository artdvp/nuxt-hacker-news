webpackJsonp([0],{"9hjX":function(t,e,s){"use strict";var n=s("NYxO");e.a={computed:Object(n.mapState)(["users","ids","items"])}},FC6P:function(t,e,s){var n=s("fum9");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s("rjj0")("376446b4",n,!0)},FVkV:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("div",{staticClass:"box content"},t._l(t.items,function(e){return s("article",{key:e.id,staticClass:"post"},[s("h4",[t._v("\n           "+t._s(e.title)+"\n         "),e.url?[s("a",{staticClass:"f7",attrs:{href:e.url}},[t._v(t._s(t._f("hostname")(e.url)))])]:t._e()],2),s("span",{staticClass:"pull-right has-text-grey-light"},[e.descendants?[s("i",{staticClass:"fa fa-comments"}),t._v("     \n              "),s("nuxt-link",{attrs:{to:"/item/"+e.id}},[t._v(t._s(e.descendants)+" comments")])]:t._e()],2),s("div",{staticClass:"media"},[t._m(0,!0),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("nuxt-link",{attrs:{to:"/user/"+e.by}},[t._v(" @"+t._s(e.by)+" ")]),t._v(" \n                  "+t._s(t._f("timeSince")(e.time))+" \n                      \n                  "),s("span",{staticClass:"tag"},[t._v(" "+t._s(e.score))])],1)])])])])}))])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media-left"},[s("p",{staticClass:"image is-32x32"},[s("img",{attrs:{src:"http://bulma.io/images/placeholders/128x128.png"}})])])}],i={render:n,staticRenderFns:a};e.a=i},MBjo:function(t,e,s){"use strict";function n(t){s("FC6P")}var a=s("9hjX"),i=s("FVkV"),r=s("VU/8"),c=n,l=r(a.a,i.a,!1,c,"data-v-5fc8520d",null);e.a=l.exports},b9Rn:function(t,e,s){"use strict";var n=s("Xxa5"),a=s.n(n),i=s("exGp"),r=s.n(i),c=s("MBjo");e.a={components:{Items:c.a},fetch:function(){function t(t){return e.apply(this,arguments)}var e=r()(a.a.mark(function t(e){var s=e.store;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.dispatch("LOAD_ITEMS","showstories.json");case 2:case"end":return t.stop()}},t,this)}));return t}()}},fum9:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,".item[data-v-5fc8520d]{display:grid;grid:repeat(4,1.5em)/repeat(10,1fr);grid-row-gap:1em}.score[data-v-5fc8520d]{grid-row:1/-1;grid-column:span 1;-ms-flex-item-align:center;align-self:center;justify-self:center}.title[data-v-5fc8520d]{grid-row:1/3;grid-column:2/-2;-ms-flex-item-align:end;align-self:end}.details[data-v-5fc8520d]{grid-row:3/-1;grid-column:6/-2;justify-self:end}.comments[data-v-5fc8520d]{grid-row:3/-1;grid-column:2/6}",""])},rAsl:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Items")],1)},a=[],i={render:n,staticRenderFns:a};e.a=i},yOyD:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("b9Rn"),a=s("rAsl"),i=s("VU/8"),r=i(n.a,a.a,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=show.56eb739491eea86cd08d.js.map