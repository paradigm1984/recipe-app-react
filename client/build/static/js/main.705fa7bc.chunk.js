(this["webpackJsonprecipe-app-mern-client"]=this["webpackJsonprecipe-app-mern-client"]||[]).push([[0],{30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),o=(a(35),a(17)),s=a.n(o),l=a(20),u=a(8),m=(a(37),a(48)),p=a(51),d=a(47),h=a(49),f=a(27),b=function(e){var t=e.title,a=(e.calories,e.image),r=e.ingredients,i=Object(n.useState)(!1),o=Object(u.a)(i,2),s=o[0],l=o[1];return c.a.createElement(m.a,{className:"recipe-card"},c.a.createElement(m.a.Img,{variant:"top",src:a,alt:t}),c.a.createElement(m.a.Body,null,c.a.createElement(m.a.Title,null,t),c.a.createElement(m.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),c.a.createElement("div",{className:"button-container"},c.a.createElement(p.a,{className:"recipe-button",onClick:function(){return l(!s)},style:{marginBottom:"1rem"}},"View Recipe"))),c.a.createElement(d.a,{isOpen:s},c.a.createElement(h.a,{className:"list-group-flush"},r.map((function(e){return c.a.createElement(f.a,null,e.text)})))))},E=(a(40),a(41),a(46)),w=a(50),v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),m=o[0],d=o[1],h=Object(n.useState)(""),f=Object(u.a)(h,2),v=f[0],g=f[1],j=c.a.useState({width:window.innerWidth,height:window.innerHeight}),O=Object(u.a)(j,2),k=O[0],y=O[1];Object(n.useEffect)((function(){S()}),[v]),Object(n.useEffect)((function(){return window.addEventListener("resize",N),function(){return window.removeEventListener("resize",N)}}));var N=function(){y({minWidth:window.innerWidth,minHeight:window.innerHeight})},S=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(v,"&app_id=").concat("4ca90bc3","&app_key=").concat("efcca35385635d8635bd078f5b89099f"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app",style:k},c.a.createElement("section",{className:"submit-section"},c.a.createElement("h2",{className:"app-header"},"Recipe Search"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g(m),d(""),N()}},c.a.createElement(E.a,{className:"mb-3"},c.a.createElement(w.a,{placeholder:"Search a recipe","aria-label":"Recipe","aria-describedby":"basic-addon2",className:"search-bar",type:"text",value:m,onChange:function(e){d(e.target.value)}}),c.a.createElement(E.a.Append,null,c.a.createElement(p.a,{variant:"outline-secondary",className:"search-button"},"Submit"))))),c.a.createElement("section",{className:"response-section"},a.map((function(e){return c.a.createElement(b,{key:e.recipe.uri,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.705fa7bc.chunk.js.map