(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(6),r=n.n(o),l=n(1),i=n(2),s=n(4),u=n(3),m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={date:new Date},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){console.log("Current time: ".concat(t.state.date.toLocaleTimeString())),t.setState({date:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var t=this.state.date.toLocaleTimeString();return c.a.createElement("div",null,c.a.createElement("h1",null,"React clock"),c.a.createElement("p",null,"Current time: ".concat(t)))}}]),n}(c.a.Component),b=(n(12),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={clockName:"",isClockVisiable:!0},t.setRandom=function(){var e=10*Math.random();t.setState({name:e}),console.log("\n    The Clock was renamed from ".concat(t.state.name," to ").concat(e,"\n  "))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.clockName,a=e.isClockVisiable;return c.a.createElement("div",{className:"wrapper"},a&&c.a.createElement(m,{name:n}),c.a.createElement("div",{className:"container"},c.a.createElement("button",{className:"button",type:"button",onClick:function(){t.setState({isClockVisiable:!0})}},"ShowClock"),c.a.createElement("button",{className:"button",type:"button",onClick:function(){t.setState({isClockVisiable:!1})}},"Hide Clock"),c.a.createElement("button",{className:"button",type:"button",onClick:function(){return t.setRandom()}},"Set random name")))}}]),n}(c.a.Component));r.a.render(c.a.createElement(b,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.fd682d94.chunk.js.map