(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{271:function(t,e,n){"use strict";n.r(e);n(33),n(25),n(27),n(42),n(26),n(43);var o=n(20);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{post:{type:Object,required:!1}},data:function(){return{editedPost:this.post?c({},this.post):{author:"",title:"",thumbnail:"",content:"",previewText:""}}},methods:{onSave:function(){this.$emit("submit",this.editedPost)},onCancel:function(){this.$router.push("/admin")}}},d=n(6),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[n("AppControlInput",{model:{value:t.editedPost.author,callback:function(e){t.$set(t.editedPost,"author",e)},expression:"editedPost.author"}},[t._v("\n    Author Name\n  ")]),t._v(" "),n("AppControlInput",{model:{value:t.editedPost.title,callback:function(e){t.$set(t.editedPost,"title",e)},expression:"editedPost.title"}},[t._v("Title")]),t._v(" "),n("AppControlInput",{model:{value:t.editedPost.thumbnail,callback:function(e){t.$set(t.editedPost,"thumbnail",e)},expression:"editedPost.thumbnail"}},[t._v("\n    Thumbnail Link\n  ")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.content,callback:function(e){t.$set(t.editedPost,"content",e)},expression:"editedPost.content"}},[t._v("\n    Content\n  ")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.previewText,callback:function(e){t.$set(t.editedPost,"previewText",e)},expression:"editedPost.previewText"}},[t._v("\n    Preview Text\n  ")]),t._v(" "),n("AppButton",{attrs:{type:"submit"}},[t._v("\n    Save\n  ")]),t._v(" "),n("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("\n    Cancel\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5239c072",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(277)},291:function(t,e,n){var o=n(15)(!1);o.push([t.i,".update-form[data-v-36d86660]{width:90%;margin:20px auto}@media (min-width:768px){.update-form[data-v-36d86660]{width:500px}}",""]),t.exports=o},303:function(t,e,n){"use strict";n.r(e);n(33),n(25),n(27),n(42),n(26),n(43);var o=n(20);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={layout:"admin",head:{title:"Edit Post"},middleware:["check-auth","auth"],components:{AdminPostForm:n(271).default},asyncData:function(t){return t.app.$axios.$get("/posts/"+t.params.postId+".json").then((function(data){return{loadedPost:c(c({},data),{},{id:t.params.postId})}})).catch((function(e){return t.error(e)}))},methods:{onSubmitted:function(t){var e=this;this.$store.dispatch("editPost",t).then((function(){e.$router.push("/admin")}))}}},d=(n(290),n(6)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-post-page"},[n("section",{staticClass:"update-form"},[n("AdminPostForm",{attrs:{post:t.loadedPost},on:{submit:t.onSubmitted}})],1)])}),[],!1,null,"36d86660",null);e.default=component.exports;installComponents(component,{AdminPostForm:n(271).default})}}]);