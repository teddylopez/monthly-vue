(function(e){function t(t){for(var a,l,i=t[0],c=t[1],s=t[2],u=0,v=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&v.push(r[l][0]),r[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(v.length)v.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"db",(function(){return B}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("Calendar")],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[e._v(" New Event ")]),n("v-btn",{staticClass:"mr-4",attrs:{outlined:""},on:{click:e.setToday}},[e._v(" Today ")]),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:e.prev}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-chevron-left")])],1),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:e.next}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-chevron-right")])],1),n("v-toolbar-title",[e._v(e._s(e.title))]),n("div",{staticClass:"flex-grow-1"}),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{outlined:""}},a),[n("span",[e._v(e._s(e.typeToLabel[e.type]))]),n("v-icon",{attrs:{right:""}},[e._v("mdi-menu-down")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(t){e.type="day"}}},[n("v-list-item-title",[e._v("Day")])],1),n("v-list-item",{on:{click:function(t){e.type="week"}}},[n("v-list-item-title",[e._v("Week")])],1),n("v-list-item",{on:{click:function(t){e.type="month"}}},[n("v-list-item-title",[e._v("Month")])],1),n("v-list-item",{on:{click:function(t){e.type="4day"}}},[n("v-list-item-title",[e._v("4 days")])],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-container",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.addEvent(t)}}},[n("v-text-field",{attrs:{type:"text",label:"event name (required)"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"detail"},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}}),n("v-text-field",{attrs:{type:"date",label:"start (required)"},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}}),n("v-text-field",{attrs:{type:"date",label:"end (required)"},model:{value:e.end,callback:function(t){e.end=t},expression:"end"}}),n("v-text-field",{attrs:{type:"color",label:"color (click to open color menu)"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(t){t.stopPropagation(),e.dialog=!1}}},[e._v(" create event ")])],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialogDate,callback:function(t){e.dialogDate=t},expression:"dialogDate"}},[n("v-card",[n("v-container",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.addEvent(t)}}},[n("v-text-field",{attrs:{type:"text",label:"event name (required)"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"detail"},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}}),n("v-text-field",{attrs:{type:"date",label:"start (required)"},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}}),n("v-text-field",{attrs:{type:"date",label:"end (required)"},model:{value:e.end,callback:function(t){e.end=t},expression:"end"}}),n("v-text-field",{attrs:{type:"color",label:"color (click to open color menu)"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(t){t.stopPropagation(),e.dialog=!1}}},[e._v(" create event ")])],1)],1)],1)],1),n("v-sheet",{attrs:{height:"90vh"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:e.events,"event-color":e.getEventColor,"event-margin-bottom":3,now:e.today,type:e.type},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.setDialogDate,change:e.updateRange},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4",width:350,flat:""}},[n("v-toolbar",{attrs:{color:e.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.deleteEvent(e.selectedEvent.id)}}},[n("v-icon",[e._v("mdi-delete")])],1),n("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)}}),n("div",{staticClass:"flex-grow-1"})],1),n("v-card-text",[e.currentlyEditing!==e.selectedEvent.id?n("form",[e._v(" "+e._s(e.selectedEvent.details)+" ")]):n("form",[n("textarea-autosize",{staticStyle:{width:"100%"},attrs:{type:"text","min-height":100,placeholder:"add note"},model:{value:e.selectedEvent.details,callback:function(t){e.$set(e.selectedEvent,"details",t)},expression:"selectedEvent.details"}})],1)]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.selectedOpen=!1}}},[e._v(" close ")]),e.currentlyEditing!==e.selectedEvent.id?n("v-btn",{attrs:{text:""},on:{click:function(t){return t.preventDefault(),e.editEvent(e.selectedEvent)}}},[e._v(" edit ")]):n("v-btn",{attrs:{text:"",type:"submit"},on:{click:function(t){return t.preventDefault(),e.updateEvent(e.selectedEvent)}}},[e._v(" Save ")])],1)],1)],1)],1)],1)],1)},i=[],c=(n("99af"),n("4160"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),s={data:function(){return{today:(new Date).toISOString().substr(0,10),focus:(new Date).toISOString().substr(0,10),type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},name:null,details:null,start:null,end:null,color:"#1976D2",currentlyEditing:null,selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],dialog:!1,dialogDate:!1}},mounted:function(){this.getEvents()},computed:{title:function(){var e=this.start,t=this.end;if(!e||!t)return"";var n=this.monthFormatter(e),a=this.monthFormatter(t),r=n===a?"":a,o=e.year,l=t.year,i=o===l?"":l,c=e.day+this.nth(e.day),s=t.day+this.nth(t.day);switch(this.type){case"month":return"".concat(n," ").concat(o);case"week":case"4day":return"".concat(n," ").concat(c," ").concat(o," - ").concat(r," ").concat(s," ").concat(i);case"day":return"".concat(n," ").concat(c," ").concat(o)}return""},monthFormatter:function(){return this.$refs.calendar.getFormatter({timeZone:"UTC",month:"long"})}},methods:{getEvents:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B.collection("calEvent").get();case 2:n=t.sent,a=[],n.forEach((function(e){var t=e.data();t.id=e.id,a.push(t)})),e.events=a;case 6:case"end":return t.stop()}}),t)})))()},setDialogDate:function(e){var t=e.date;this.dialogDate=!0,this.focus=t},viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=this.today},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},addEvent:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.name&&e.start&&e.end)){t.next=7;break}return t.next=3,B.collection("calEvent").add({name:e.name,details:e.details,start:e.start,end:e.end,color:e.color});case 3:e.getEvents(),e.name="",e.details="",e.start="",e.end="",e.color="",t.next=8;break;case 7:alert("You must enter event name, start, and end time");case 8:case"end":return t.stop()}}),t)})))()},editEvent:function(e){this.currentlyEditing=e.id},updateEvent:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,B.collection("calEvent").doc(t.currentlyEditing).update({details:e.details});case 2:t.selectedOpen=!1,t.currentlyEditing=null;case 3:case"end":return n.stop()}}),n)})))()},deleteEvent:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,B.collection("calEvent").doc(e).delete();case 2:t.selectedOpen=!1,t.getEvents();case 3:case"end":return n.stop()}}),n)})))()},showEvent:function(e){var t=this,n=e.nativeEvent,a=e.event,r=function(){t.selectedEvent=a,t.selectedElement=n.target,setTimeout((function(){return t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(r,10)):r(),n.stopPropagation()},updateRange:function(e){var t=e.start,n=e.end;this.start=t,this.end=n},nth:function(e){return e>3&&e<21?"th":["th","st","nd","rd","th","th","th","th","th","th"][e%10]}}},d=s,u=n("2877"),v=n("6544"),f=n.n(v),p=n("8336"),m=n("a4f6"),h=n("b0af"),b=n("99d9"),y=n("62ad"),g=n("a523"),x=n("169a"),k=n("4bd4"),E=n("132d"),w=n("8860"),_=n("da13"),O=n("5d23"),D=n("e449"),V=n("0fd9"),C=n("8dd9"),T=n("8654"),j=n("71d9"),S=n("2a7f"),P=Object(u["a"])(d,l,i,!1,null,null,null),R=P.exports;f()(P,{VBtn:p["a"],VCalendar:m["a"],VCard:h["a"],VCardActions:b["a"],VCardText:b["b"],VCol:y["a"],VContainer:g["a"],VDialog:x["a"],VForm:k["a"],VIcon:E["a"],VList:w["a"],VListItem:_["a"],VListItemTitle:O["a"],VMenu:D["a"],VRow:V["a"],VSheet:C["a"],VTextField:T["a"],VToolbar:j["a"],VToolbarTitle:S["a"]});var I={name:"App",components:{Calendar:R}},M=I,q=n("7496"),A=n("f6c4"),L=Object(u["a"])(M,r,o,!1,null,null,null),$=L.exports;f()(L,{VApp:q["a"],VMain:A["a"]});var F=n("f309");a["a"].use(F["a"]);var z=new F["a"]({}),J=n("3f9d"),U=n("260b");n("e71f");a["a"].config.productionTip=!1,a["a"].use(J["a"]),U["a"].initializeApp({apiKey:"AIzaSyC15Zd6A0yjhe6UhHAuNb-EuxaJ8q3p6Kg",authDomain:"calendar-9a800.firebaseapp.com",databaseURL:"https://calendar-9a800.firebaseio.com",projectId:"calendar-9a800",storageBucket:"calendar-9a800.appspot.com",messagingSenderId:"804739191757",appId:"1:804739191757:web:5d211d6b2879a825f4aa84"});var B=U["a"].firestore();new a["a"]({vuetify:z,render:function(e){return e($)}}).$mount("#app")}});
//# sourceMappingURL=app.0b863fb8.js.map