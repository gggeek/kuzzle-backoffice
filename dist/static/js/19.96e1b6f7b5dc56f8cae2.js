webpackJsonp([19],{230:function(e,t,i){i(661);var a=i(0)(i(601),i(789),"data-v-675c2b5f",null);e.exports=a.exports},251:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={id:"title",update:function(e,t){!0===t.value.active&&(e.classList.add("tooltipped"),e.setAttribute("data-position",t.value.position||"right"),e.setAttribute("data-delay","50"),e.setAttribute("data-tooltip",t.value.title),$(e).tooltip(),$(e).on("click",function(){$(e).tooltip("remove")}))}}},254:function(e,t,i){i(282);var a=i(0)(i(280),i(283),"data-v-5b3bf2a1",null);e.exports=a.exports},255:function(e,t,i){i(270);var a=i(0)(i(266),i(273),"data-v-e614ba38",null);e.exports=a.exports},265:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(60);t.default={name:"CommonBreadcrumb",methods:{canSearchIndex:a.canSearchIndex,isCollectionRealtime:function(){return!!this.$store.state.index.indexesAndCollections[this.$store.state.route.params.index]&&-1!==this.$store.state.index.indexesAndCollections[this.$store.state.route.params.index].realtime.indexOf(this.$store.state.route.params.collection)},isRouteActive:function(e){return Array.isArray(e)?e.indexOf(this.$store.state.route.name)>=0:this.$store.state.route.name===e}}}},266:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(271),n=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"headline",props:{title:String},components:{Breadcrumb:n.default}}},267:function(e,t,i){t=e.exports=i(226)(),t.push([e.i,".nav-breadcrumb[data-v-20abad6e]{margin-bottom:1.68rem;padding-left:2px}.nav-breadcrumb i[data-v-20abad6e]{height:auto;margin-right:3px}.nav-breadcrumb ul[data-v-20abad6e]{color:#aaa;padding:0;margin:0}.nav-breadcrumb ul .separator[data-v-20abad6e]{margin-left:3px}.nav-breadcrumb ul li[data-v-20abad6e]{display:inline-block}.nav-breadcrumb ul a[data-v-20abad6e]{color:#aaa}.nav-breadcrumb ul a[data-v-20abad6e]:hover{color:#444}",""])},268:function(e,t,i){t=e.exports=i(226)(),t.push([e.i,".headline[data-v-e614ba38]{margin-bottom:30px}.headline a.btn[data-v-e614ba38]{margin-top:5px;margin-left:15px}.headline h1[data-v-e614ba38]{margin-bottom:0}",""])},269:function(e,t,i){var a=i(267);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(227)("fd616dba",a,!0)},270:function(e,t,i){var a=i(268);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(227)("2f4e468e",a,!0)},271:function(e,t,i){i(269);var a=i(0)(i(265),i(272),"data-v-20abad6e",null);e.exports=a.exports},272:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"nav-breadcrumb"},[0===e.$route.path.indexOf("/security")?i("ul",[i("li",[i("router-link",{attrs:{to:{name:"Security"}}},[e._v("\n        security\n      ")])],1),e._v(" "),e.isRouteActive("SecurityUsersList")?i("li",[i("i",{staticClass:"fa fa-angle-right separator",attrs:{"aria-hidden":"true"}}),e._v(" "),i("router-link",{attrs:{to:{name:"SecurityUsersList"}}},[e._v("\n        users\n      ")])],1):e._e(),e._v(" "),e.isRouteActive("SecurityProfilesList")?i("li",[i("i",{staticClass:"fa fa-angle-right separator",attrs:{"aria-hidden":"true"}}),e._v(" "),i("router-link",{attrs:{to:{name:"SecurityProfilesList"}}},[e._v("\n        profiles\n      ")])],1):e._e(),e._v(" "),e.isRouteActive("SecurityRolesList")?i("li",[i("i",{staticClass:"fa fa-angle-right separator",attrs:{"aria-hidden":"true"}}),e._v(" "),i("router-link",{attrs:{to:{name:"SecurityRolesList"}}},[e._v("\n        roles\n      ")])],1):e._e()]):e._e(),e._v(" "),0===e.$route.path.indexOf("/data")?i("ul",[i("li",[i("router-link",{attrs:{to:{name:"Data"}}},[e._v("\n        data\n      ")])],1),e._v(" "),e.$store.state.route.params.index?i("li",[i("i",{staticClass:"fa fa-angle-right separator",attrs:{"aria-hidden":"true"}}),e._v(" "),i("router-link",{attrs:{to:{name:"DataIndexSummary",params:{index:e.$store.state.route.params.index}}}},[e._v("\n        "+e._s(e.$store.state.route.params.index)+"\n      ")])],1):e._e(),e._v(" "),e.$store.state.route.params.collection?i("li",[i("i",{staticClass:"fa fa-angle-right separator",attrs:{"aria-hidden":"true"}}),e._v(" "),e.isCollectionRealtime()?i("router-link",{attrs:{to:{name:"DataCollectionWatch",params:{index:e.$store.state.route.params.index,collection:e.$store.state.route.params.collection}}}},[e._v("\n        "+e._s(e.$store.state.route.params.collection)+"\n      ")]):i("router-link",{attrs:{to:{name:"DataDocumentsList",params:{index:e.$store.state.route.params.index,collection:e.$store.state.route.params.collection}}}},[e._v("\n        "+e._s(e.$store.state.route.params.collection)+"\n      ")])],1):e._e()]):e._e()])},staticRenderFns:[]}},273:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"headline"},[i("h1",[e._t("default",[e._v(e._s(e.title))])],2),e._v(" "),i("breadcrumb")],1)},staticRenderFns:[]}},280:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(16),n=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={props:["id","myclass"],computed:{parsedId:function(){return this.id?this.id.replace(/[!"#$%&'()*_+,.\/:;<=>?@[\]^`{|}~]/g,"\\$&"):null}},mounted:function(){var e=this;n.default.nextTick(function(){$(e.$el).find(".dropdown-button").dropdown({constrain_width:!1,belowOrigin:!0})})}}},281:function(e,t,i){t=e.exports=i(226)(),t.push([e.i,"span[data-v-5b3bf2a1]{font-family:Arial,Helvetica Neue,Helvetica,sans-serif}a.dropdown-button[data-v-5b3bf2a1]{cursor:pointer}.action[data-v-5b3bf2a1]{padding:0 7px}.icon-small .action[data-v-5b3bf2a1]{font-size:1.2rem;vertical-align:2px}.icon-medium .fa-ellipsis-v[data-v-5b3bf2a1]{font-size:1.8rem;vertical-align:4px}.icon-black .action[data-v-5b3bf2a1]{color:#666}",""])},282:function(e,t,i){var a=i(281);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(227)("12377a08",a,!0)},283:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{attrs:{cmylass:e.myclass}},[i("a",{staticClass:"action dropdown-button fa fa-ellipsis-v",attrs:{"data-activates":e.parsedId}}),e._v(" "),i("ul",{staticClass:"dropdown-content",attrs:{id:e.id}},[e._t("default")],2)])},staticRenderFns:[]}},337:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(254),n=function(e){return e&&e.__esModule?e:{default:e}}(a),o=i(61);t.default={name:"CollectionDropdown",props:{index:String,collection:String,isRealtime:Boolean,myclass:String},components:{Dropdown:n.default},computed:{isList:function(){return"DataDocumentsList"===this.$route.name}},methods:{removeRealtimeCollection:function(){this.$store.dispatch(o.REMOVE_REALTIME_COLLECTION,{index:this.index,collection:this.collection})}}}},351:function(e,t,i){var a=i(0)(null,i(355),null,null);e.exports=a.exports},352:function(e,t,i){var a=i(0)(i(337),i(356),null,null);e.exports=a.exports},355:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card-panel"},[i("div",{staticClass:"row valign-bottom empty-set empty-set-condensed"},[i("div",{staticClass:"col s1 offset-s1"},[i("i",{staticClass:"fa fa-6x fa-lock grey-text text-lighten-1",attrs:{"aria-hidden":"true"}})]),e._v(" "),i("div",{staticClass:"col s10"},[i("p",[e._v("\n        You are not allowed to access this list"),i("br")]),e._v(" "),i("p",[i("em",[e._v("Learn more about security & permissions on "),i("a",{attrs:{href:"http://docs.kuzzle.io/guide/#security",target:"_blank"}},[e._v("Kuzzle guide")])])])])])])}]}},356:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[i("dropdown",{attrs:{id:e.collection,myclass:e.myclass}},[i("li",[i("router-link",{attrs:{to:{name:"DataCollectionEdit",params:{collection:e.collection,index:e.index}}}},[e._v("Edit collection")])],1),e._v(" "),e.isRealtime?i("li",[i("a",{staticClass:"remove",on:{click:e.removeRealtimeCollection}},[e._v("Remove collection")])]):e._e(),e._v(" "),i("li",{staticClass:"divider"}),e._v(" "),e.isRealtime||e.isList?e._e():i("li",[i("router-link",{attrs:{to:{name:"DataDocumentsList",params:{collection:e.collection,index:e.index}}}},[e._v("Browse documents")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:{name:"DataCollectionWatch",params:{collection:e.collection,index:e.index}}}},[e._v("Watch messages")])],1)])],1)},staticRenderFns:[]}},417:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(254),o=a(n),s=i(439),r=a(s);t.default={name:"IndexDropdown",props:{index:String,myclass:String},data:function(){return{isOpen:!1}},components:{Dropdown:o.default,ModalDelete:r.default},methods:{openModal:function(){this.isOpen=!0},close:function(){this.isOpen=!1}},computed:{isList:function(){return"DataIndexSummary"===this.$route.name}}}},418:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(61),o=i(62),s=a(o),r=i(40),l=a(r),c=i(251),d=a(c);t.default={name:"IndexDeleteModal",props:{id:String,index:String,isOpen:Boolean,close:Function},directives:{Focus:l.default,Title:d.default},components:{Modal:s.default},methods:{toggleTruncatedError:function(){this.errorTruncated=!this.errorTruncated},tryDeleteIndex:function(e){var t=this;e.trim()&&this.$store.dispatch(n.DELETE_INDEX,e).then(function(){t.indexConfirmation="",t.error="",t.close(),t.$router.push({name:"Data"})}).catch(function(e){t.error=e.message})}},data:function(){return{error:"",indexConfirmation:"",errorTruncated:!0}}}},419:function(e,t,i){t=e.exports=i(226)(),t.push([e.i,".error strong[data-v-7b3c581c]{display:block}.input-field label[data-v-7b3c581c]{left:0}button.btn-flat[data-v-7b3c581c]:focus{background-color:#eee}",""])},422:function(e,t,i){var a=i(419);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(227)("854e111a",a,!0)},438:function(e,t,i){var a=i(0)(i(417),i(441),null,null);e.exports=a.exports},439:function(e,t,i){i(422);var a=i(0)(i(418),i(445),"data-v-7b3c581c",null);e.exports=a.exports},441:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[i("dropdown",{attrs:{id:e.index,myclass:e.myclass}},[e.isList?e._e():i("li",[i("router-link",{attrs:{to:{name:"DataIndexSummary",params:{index:e.index}}}},[e._v("Browse collections")])],1),e._v(" "),i("li",{staticClass:"divider"}),e._v(" "),i("li",[i("a",{staticClass:"red-text",on:{click:function(t){t.preventDefault(),e.openModal(t)}}},[e._v("Delete")])])]),e._v(" "),i("modal-delete",{attrs:{id:"index-delete-"+e.index,index:e.index,"is-open":e.isOpen,close:e.close}})],1)},staticRenderFns:[]}},445:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("form",{on:{submit:function(t){t.preventDefault(),e.tryDeleteIndex(e.index)}}},[i("modal",{staticClass:"left-align",attrs:{id:e.id,"is-open":e.isOpen,close:e.close}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col s12"},[i("h4",[e._v("Index "),i("strong",[e._v(e._s(e.index))]),e._v(" deletion")]),e._v(" "),i("div",{staticClass:"divider"})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col s7"},[i("div",{staticClass:"input-field left-align"},[i("label",{attrs:{for:"index-name"}},[e._v("Confirm index name")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.indexConfirmation,expression:"indexConfirmation"},{name:"focus",rawName:"v-focus"}],class:{invalid:e.error},attrs:{id:"index-name",type:"text"},domProps:{value:e.indexConfirmation},on:{input:function(t){t.target.composing||(e.indexConfirmation=t.target.value)}}})])]),e._v(" "),e.error?i("div",{staticClass:"col s5 error"},[i("div",{staticClass:"red-text"},[e._v("An error has occurred during index deletion:")]),e._v(" "),i("span",{class:{truncate:e.errorTruncated}},[e._v("\n          "+e._s(e.error)+"\n        ")]),e._v(" "),i("a",{on:{click:function(t){t.preventDefault(),e.toggleTruncatedError()}}},[e.errorTruncated?i("span",[e._v("view more")]):e._e(),e._v(" "),e.errorTruncated?e._e():i("span",[e._v("view less")])])]):e._e()]),e._v(" "),i("span",{slot:"footer"},[i("button",{directives:[{name:"title",rawName:"v-title",value:{active:e.index===e.indexConfirmation,position:"left",title:"Be careful. This action can not be undone"},expression:"{active: index === indexConfirmation, position: 'left', title: 'Be careful. This action can not be undone'}"}],staticClass:"waves-effect btn",class:{unauthorized:e.index!==e.indexConfirmation},attrs:{type:"submit",disabled:e.index!==e.indexConfirmation}},[e._v("\n          Delete\n      ")]),e._v(" "),i("button",{staticClass:"btn-flat waves-effect waves-grey",attrs:{href:"#!"},on:{click:function(t){t.preventDefault(),e.close(t)}}},[e._v("\n          Cancel\n      ")])])])],1)},staticRenderFns:[]}},599:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(352),o=a(n),s=i(60),r=i(251),l=a(r);t.default={name:"CollectionBoxed",props:["index","collection","isRealtime"],components:{CollectionDropdown:o.default},methods:{canManageRealtime:s.canManageRealtime,canCreateDocument:s.canCreateDocument},directives:{Title:l.default}}},601:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(255),o=a(n),s=i(438),r=a(s),l=i(351),c=a(l),d=i(767),u=a(d),f=i(60),v=i(251),m=a(v),p=i(94),x=a(p);t.default={name:"CollectionsList",props:{index:String},components:{Headline:o.default,ListNotAllowed:c.default,CollectionBoxed:u.default,IndexDropdown:r.default},methods:{canSearchIndex:f.canSearchIndex,canSearchCollection:f.canSearchCollection,canCreateCollection:f.canCreateCollection,orderedFilteredStoredCollections:function(e){return x.default.orderBy(this.filteredStoredCollections,e)},orderedFilteredRealtimeCollections:function(e){return x.default.orderBy(this.filteredRealtimeCollections,e)}},directives:{Title:m.default},data:function(){return{filter:""}},computed:{collectionCount:function(){return this.$store.state.index.indexesAndCollections[this.index]?this.$store.state.index.indexesAndCollections[this.index].stored.length+this.$store.state.index.indexesAndCollections[this.index].realtime.length:0},isCollectionForFilter:function(){var e=this;if(this.$store.state.index.indexesAndCollections[this.index])return this.$store.state.index.indexesAndCollections[this.index].stored.filter(function(t){return t.indexOf(-1!==e.filter)}).length>0||this.$store.state.index.indexesAndCollections[this.index].realtime.filter(function(t){return t.indexOf(-1!==e.filter)}).length>0},storedCollections:function(){return this.$store.state.index.indexesAndCollections[this.index]?this.$store.state.index.indexesAndCollections[this.index].stored:[]},realtimeCollections:function(){return this.$store.state.index.indexesAndCollections[this.index]?this.$store.state.index.indexesAndCollections[this.index].realtime:[]},filteredStoredCollections:function(){var e=this;return this.storedCollections.filter(function(t){return-1!==t.indexOf(e.filter)})},filteredRealtimeCollections:function(){var e=this;return this.realtimeCollections.filter(function(t){return-1!==t.indexOf(e.filter)})}}}},632:function(e,t,i){t=e.exports=i(226)(),t.push([e.i,".name[data-v-1a82af39]{font-family:AnonymousPro,sans-serif}.card-title[data-v-1a82af39]{font-size:22px;padding:1rem;margin-bottom:0}.card-title .fa-bolt[data-v-1a82af39],.card-title .fa-th-list[data-v-1a82af39]{font-size:1.1rem;vertical-align:2px;margin-right:4px}.card-title .fa-th-list[data-v-1a82af39]{vertical-align:0}.card-content[data-v-1a82af39]{border-top:1px solid hsla(0,0%,63%,.2)}.switch label .lever[data-v-1a82af39]{margin:0}",""])},638:function(e,t,i){t=e.exports=i(226)(),t.push([e.i,".switch label .lever[data-v-675c2b5f]{margin:0}.actions[data-v-675c2b5f]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.input-field[data-v-675c2b5f]{margin-top:0}.input-field label[data-v-675c2b5f]{left:0}.input-field input[data-v-675c2b5f]{margin-bottom:0}.list[data-v-675c2b5f]{margin-top:25px}",""])},655:function(e,t,i){var a=i(632);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(227)("48fed19c",a,!0)},661:function(e,t,i){var a=i(638);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(227)("16b61cab",a,!0)},767:function(e,t,i){i(655);var a=i(0)(i(599),i(777),"data-v-1a82af39",null);e.exports=a.exports},777:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col s12 m6 l4 collection-boxed"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-title row"},[i("div",{staticClass:"col s11 truncate"},[i("router-link",{staticClass:"fluid-hover",attrs:{to:{name:"DataDocumentsList",params:{index:e.index,collection:e.collection}}}},[i("i",{staticClass:"fa grey-text text-darken-1",class:e.isRealtime?"fa-bolt":"fa-th-list",attrs:{"aria-hidden":"true"}}),e._v(" "),i("span",{staticClass:"name"},[e._v(e._s(e.collection))])])],1),e._v(" "),i("div",{staticClass:"col s1 right-align"},[i("collection-dropdown",{staticClass:"icon-small icon-black",attrs:{collection:e.collection,index:e.index,"is-realtime":e.isRealtime}})],1)]),e._v(" "),i("div",{staticClass:"card-action right-align"},[!e.isRealtime&&e.canCreateDocument(e.index,e.collection)?i("router-link",{directives:[{name:"title",rawName:"v-title",value:{active:!e.canCreateDocument(e.index,e.collection),title:"Your rights disallow you to create documents on collection "+e.collection+" of index "+e.index},expression:"{active: !canCreateDocument(index, collection), title: 'Your rights disallow you to create documents on collection ' + collection + ' of index ' + index}"}],staticClass:"btn btn-small",class:{unauthorized:!e.canCreateDocument(e.index,e.collection)},attrs:{to:{name:"DataCreateDocument",params:{index:e.index,collection:e.collection}}}},[e._v("\n          Create a document\n        ")]):e._e(),e._v(" "),e.isRealtime&&e.canManageRealtime(e.index,e.collection)?i("router-link",{directives:[{name:"title",rawName:"v-title",value:{active:!e.canManageRealtime(e.index,e.collection),title:"Your rights disallow you to watch realtime messages on collection "+e.collection+" of index "+e.index},expression:"{active: !canManageRealtime(index, collection), title: 'Your rights disallow you to watch realtime messages on collection ' + collection + ' of index ' + index}"}],staticClass:"btn btn-small",class:{unauthorized:!e.canManageRealtime(e.index,e.collection)},attrs:{to:{name:"DataCollectionWatch",params:{index:e.index,collection:e.collection}}}},[e._v("\n          Watch messages\n        ")]):e._e()],1)])])},staticRenderFns:[]}},789:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("headline",[e._v("\n    "+e._s(e.index)+"\n    "),i("index-dropdown",{staticClass:"icon-medium icon-black",attrs:{index:e.index}})],1),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col s12 m10 l8"},[e.collectionCount?i("div",{staticClass:"row actions"},[i("div",{staticClass:"col s9"},[e.canCreateCollection(e.index)?i("router-link",{directives:[{name:"title",rawName:"v-title",value:{active:!e.canCreateCollection(e.index),title:"Your rights disallow you to create collections on index "+e.index},expression:"{active: !canCreateCollection(index), title: 'Your rights disallow you to create collections on index ' + index}"}],staticClass:"btn waves-effect waves-light primary",class:{unauthorized:!e.canCreateCollection(e.index)},attrs:{to:{name:"DataCreateCollection",params:{index:e.index}}}},[i("i",{staticClass:"fa fa-plus-circle left"}),e._v("Create a collection\n          ")]):e._e()],1),e._v(" "),i("div",{staticClass:"col s3"},[e.collectionCount>1?i("div",{staticClass:"input-field left-align"},[e._m(0),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],attrs:{id:"filter",type:"text",tabindex:"1"},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}})]):e._e()])]):e._e(),e._v(" "),i("div",{staticClass:"row list"},[e.canSearchCollection(e.index)?e._e():i("list-not-allowed"),e._v(" "),e.canSearchCollection(e.index)&&!e.collectionCount?i("div",{staticClass:"card-panel"},[i("div",{staticClass:"row valign-bottom empty-set empty-set"},[e._m(1),e._v(" "),i("div",{staticClass:"col s9"},[i("p",[e._v("\n                Here, you'll see the collections in "),i("strong",[e._v(e._s(e.index))]),e._v(". "),i("br"),e._v(" "),i("em",[e._v("There are currently no collection here.")])]),e._v(" "),i("router-link",{directives:[{name:"title",rawName:"v-title",value:{active:!e.canCreateCollection(e.index),title:"Your rights disallow you to create collections on index "+e.index},expression:"{active: !canCreateCollection(index), title: 'Your rights disallow you to create collections on index ' + index}"}],staticClass:"btn primary waves-effect waves-light",class:{unauthorized:!e.canCreateCollection(e.index)},attrs:{to:{name:"DataCreateCollection",params:{index:e.index}}}},[i("i",{staticClass:"fa fa-plus-circle left"}),e._v("\n                Create a collection\n              ")])],1)])]):e._e(),e._v(" "),!e.isCollectionForFilter&&e.filter?i("div",{staticClass:"card-panel card-body"},[e._m(2)]):e._e(),e._v(" "),e.canSearchCollection(e.index)?i("div",[e._l(e.orderedFilteredStoredCollections(1),function(t){return i("collection-boxed",{key:Math.random(),attrs:{index:e.index,collection:t,"is-realtime":!1}})}),e._v(" "),e._l(e.orderedFilteredRealtimeCollections(1),function(t){return i("collection-boxed",{key:Math.random(),attrs:{index:e.index,collection:t,"is-realtime":!0}})})],2):e._e()],1)])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{attrs:{for:"filter"}},[i("i",{staticClass:"fa fa-search"}),e._v(" Filter")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col s1 offset-s1"},[i("i",{staticClass:"fa fa-6x fa-th-list grey-text text-lighten-1",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row valign-center empty-set"},[i("div",{staticClass:"col s2 offset-s1"},[i("i",{staticClass:"fa fa-6x fa-search grey-text text-lighten-1",attrs:{"aria-hidden":"true"}})]),e._v(" "),i("div",{staticClass:"col s12"},[i("p",[e._v("\n                There is no collection matching your filter."),i("br"),e._v("\n                Please try with another one.\n              ")])])])}]}}});