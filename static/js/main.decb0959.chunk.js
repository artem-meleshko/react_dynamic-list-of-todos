(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),s=n.n(c),o=n(1),u=n.n(o),i=n(9),l=n(2),d=n(5),m=n(6),p=n(8),f=n(7),h=n(10),v=function(e){var t=e.user;return r.a.createElement("div",null,t.name)},b=function(e){var t=e.data;return r.a.createElement("li",null,r.a.createElement(v,{user:t.user}),r.a.createElement("label",{htmlFor:"case",className:"task"},r.a.createElement("input",{id:"case",type:"checkbox",defaultChecked:t.completed}),r.a.createElement("span",{className:"text"},t.title),r.a.createElement("i",{className:"fas fa-check"})))},E=function(e){var t=e.items;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement(b,{data:e,key:e.id})}))},k=function(){var e=Object(l.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=(n(18),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[],isLoaded:!1,isLoading:!1},n.handleClick=Object(l.a)(u.a.mark(function e(){var t,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return t=e.sent,e.next=5,j();case 5:a=e.sent,r=t.map(function(e){return Object(i.a)({},e,{user:a.find(function(t){return t.id===e.userId})})}),n.setState({isLoading:!0}),setTimeout(function(){n.setState({todos:r,isLoaded:!0,isLoading:!1})},2e3);case 9:case"end":return e.stop()}},e)})),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"task-list middle"},this.state.isLoaded?r.a.createElement("div",{className:"todo__items"},r.a.createElement("h1",null,"Todo List"),r.a.createElement(E,{items:this.state.todos})):r.a.createElement("div",null,r.a.createElement("button",{className:"todo__front",type:"submit",onClick:this.handleClick},this.state.isLoading?"Loading...":"Load")))}}]),t}(r.a.Component));s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.decb0959.chunk.js.map