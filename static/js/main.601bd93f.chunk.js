(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(e,t,a){e.exports=a(383)},177:function(e,t,a){},179:function(e,t,a){},363:function(e,t,a){},383:function(e,t,a){"use strict";a.r(t);var n,r,l,i,o,s=a(0),c=a.n(s),u=a(36),d=a.n(u),h=(a(177),a(53)),m=a(37),p=a(38),f=a(40),g=a(39),v=a(41),E=(a(179),0),C=[],R={},b=!1,w=function(){R={x:Math.floor(250),y:Math.floor(250),d:"up"};for(var e=0;e<500;e++){C[e]=[];for(var t=0;t<500;t++)C[e][t]="#ffffff"}},y=function e(){if(b&&(!function(){n.clearRect(0,0,r.width,r.height);for(var e=0;e<500;e++)for(var t=0;t<500;t++){var a=C[e][t];if("#ffffff"!==a){n.fillStyle=a;var i=e*l.size-(500*l.size-500)/2,o=t*l.size-(500*l.size-500)/2;n.fillRect(i,o,l.size,l.size)}}}(),b=!1),l.running&&!(E>1e7)&&C[R.x]&&C[R.x][R.y]){E++,document.getElementById("steps").innerHTML=E;var t,a=C[R.x][R.y],s=(t=a,l.rules.findIndex(function(e){return e.color===t})),c=(s+1)%l.rules.length,u=l.rules[c].color;C[R.x][R.y]=u;var d=l.rules[s].dir;n.fillStyle=u;var h=R.x*l.size-(500*l.size-500)/2,m=R.y*l.size-(500*l.size-500)/2;n.fillRect(h,m,l.size,l.size),"up"===R.d?"left"===d?(R.x--,R.d="left"):(R.x++,R.d="right"):"down"===R.d?"left"===d?(R.x++,R.d="right"):(R.x--,R.d="left"):"left"===R.d?"left"===d?(R.y++,R.d="down"):(R.y--,R.d="up"):"left"===d?(R.y--,R.d="up"):(R.y++,R.d="down"),E%i===0?setTimeout(e,o):e()}},k=function(){E=0,w(),n.clearRect(0,0,r.width,r.height),R={x:Math.floor(250),y:Math.floor(250),d:"up"}},x=function(e){l.size!==e.size&&(b=!0),(l=e).speed>6?i=Math.pow(10,l.speed-7):(i=1,o=Math.pow(5,6-l.speed)),l.running&&y()},z=a(393),S=a(391),L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).resetCanvas=function(){k(a.canvas)},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e,t;this.canvas=this.refs.canvas,e=this.props.state,t=this.canvas,n=t.getContext("2d"),l=e,r=t,w(),y()}},{key:"componentDidUpdate",value:function(){x(this.props.state)}},{key:"render",value:function(){return c.a.createElement(z.a,{className:"grid-card"},c.a.createElement("div",{className:"Grid"},c.a.createElement("canvas",{ref:"canvas",width:"500",height:"500"})),c.a.createElement("div",{className:"interaction"},c.a.createElement("div",{className:"buttons"},c.a.createElement(S.a,{basic:!0,color:"green",onClick:this.props.toggleRunning},this.props.state.running?"Stop":"Start"),c.a.createElement(S.a,{basic:!0,color:"purple",onClick:this.resetCanvas},"Reset")),c.a.createElement("div",{className:"sliders"},c.a.createElement("input",{type:"range",id:"speed",value:this.props.state.speed,name:"speed",min:"1",max:"10",onChange:this.props.changeSpeed}),c.a.createElement("label",{htmlFor:"volume"},"Speed: ",this.props.state.speed),c.a.createElement("input",{type:"range",id:"size",value:this.props.state.size,name:"size",min:"1",max:"10",onChange:this.props.changeSize}),c.a.createElement("label",{htmlFor:"volume"},"Zoom: ",this.props.state.size)),c.a.createElement("div",{className:"steps"},c.a.createElement("div",null,"steps:",c.a.createElement("span",{id:"steps"})))))}}]),t}(s.Component),j=a(7),I=a.n(j),O=a(162),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={displayColorPicker:!1},a.handleClick=function(){a.setState({displayColorPicker:!a.state.displayColorPicker})},a.handleClose=function(){a.setState({displayColorPicker:!1})},a.handleChange=function(e){a.props.changeColor(a.props.index,e)},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=I()({default:{color:{width:"36px",height:"14px",borderRadius:"2px",background:"rgba(".concat(this.props.color.r,", ").concat(this.props.color.g,", ").concat(this.props.color.b,", ").concat(this.props.color.a,")")},swatch:{padding:"5px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return c.a.createElement("div",null,c.a.createElement("div",{style:e.swatch,onClick:this.handleClick},c.a.createElement("div",{style:e.color})),this.state.displayColorPicker?c.a.createElement("div",{style:e.popover},c.a.createElement("div",{style:e.cover,onClick:this.handleClose}),c.a.createElement(O.SketchPicker,{color:this.props.color,onChange:this.handleChange})):null)}}]),t}(c.a.Component),M=(a(363),a(389)),A=a(153),P=function(e){return c.a.createElement(z.a,{className:"rules"},c.a.createElement(M.a.Content,null,e.rules.map(function(t,a){return c.a.createElement("div",{className:"rule-down"},c.a.createElement("div",{className:"rule",key:a},c.a.createElement(S.a,{basic:!0,disabled:0===a,color:"red",size:"mini",icon:!0,onClick:function(){return e.deleteRule(a)}},c.a.createElement(A.a,{name:"trash"})),0===a?c.a.createElement("div",{className:"white-box"}):c.a.createElement(N,{index:a,changeColor:e.changeColor,color:(n=t.color,{r:parseInt(n.slice(1,3),16),g:parseInt(n.slice(3,5),16),b:parseInt(n.slice(5,7),16),a:1})}),c.a.createElement(S.a,{basic:!0,color:"blue",size:"mini",icon:!0,onClick:function(){return e.toggle(a)}},"left"===t.dir?c.a.createElement(A.a,{name:"arrow left"}):c.a.createElement(A.a,{name:"arrow right"}))),a<e.rules.length-1&&c.a.createElement(A.a,{key:"down".concat(a),name:"arrow down",className:"arrow-down"}));var n})),c.a.createElement(M.a.Content,{className:"add-button-container"},c.a.createElement(S.a,{basic:!0,color:"blue",id:"add-rule",onClick:e.addRule},"Add Rule")))},U=(a(365),a(390)),B=a(392);function T(){return"#"+(16777215*Math.random()<<0).toString(16)}function D(){return Math.random()>.5?"left":"right"}var H={original:{rules:"LR",speed:7,size:6},symmetric:{rules:"LLRR",speed:9,size:4},weirdSquare:{rules:"LRRRRRLLR",speed:10,size:2},weirdHighway:{rules:"LLRRRLRLRLLR",speed:8,size:3},filledTriangle:{rules:"RRLLLRLLLRRR",speed:9,size:2}};var q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={rules:[],running:!1,speed:3,size:5},a.NUM_RULES=Math.floor(10*Math.random())+1,a.makeRules=function(){var e=[];e.push({color:"#ffffff",dir:D()});for(var t=0;t<a.NUM_RULES;t++)e.push({color:T(),dir:D()});a.setState({rules:e})},a.findRuleByColor=function(e){return a.state.rules.filter(function(t){return t.color===e})},a.deleteRule=function(e){var t=Object(h.a)(a.state.rules);t.splice(e,1),a.setState({rules:t})},a.addRule=function(){var e=Object(h.a)(a.state.rules);e.push({color:T(),dir:D()}),a.setState({rules:e})},a.toggle=function(e){var t=Object(h.a)(a.state.rules);"left"===t[e].dir?t[e].dir="right":t[e].dir="left",a.setState({rules:t})},a.changeColor=function(e,t){var n=Object(h.a)(a.state.rules);n[e].color=t.hex,a.setState({rules:n})},a.changeSpeed=function(e){a.setState({speed:e.target.value})},a.changeSize=function(e){a.setState({size:e.target.value})},a.toggleRunning=function(){a.setState({running:!a.state.running})},a.handleItemClick=function(e,t){var n=t.name;a.setState(function(e){var t={running:!0};return t.rules=H[e].rules.split("").map(function(e,t){return{color:0===t?"#ffffff":T(),dir:"L"===e?"left":"right"}}),t.speed=H[e].speed,t.size=H[e].size,t}(n))},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.makeRules()}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(U.a,{text:!0},c.a.createElement(U.a.Item,{header:!0},"Langton's Ant"),c.a.createElement(U.a.Item,{name:"original",onClick:this.handleItemClick}),c.a.createElement(U.a.Item,{name:"symmetric",onClick:this.handleItemClick}),c.a.createElement(U.a.Item,{name:"weirdSquare",onClick:this.handleItemClick}),c.a.createElement(U.a.Item,{name:"weirdHighway",onClick:this.handleItemClick}),c.a.createElement(U.a.Item,{name:"filledTriangle",onClick:this.handleItemClick})),c.a.createElement(B.a,{columns:2,stackable:!0,className:"fill-content"},c.a.createElement(B.a.Row,{stretched:!0},c.a.createElement(B.a.Column,{width:9},c.a.createElement(L,{state:this.state,changeSize:this.changeSize,changeSpeed:this.changeSpeed,toggleRunning:this.toggleRunning})),c.a.createElement(B.a.Column,{width:2}),c.a.createElement(B.a.Column,{width:5},c.a.createElement(P,{toggle:this.toggle,changeColor:this.changeColor,toggleRunning:this.toggleRunning,addRule:this.addRule,deleteRule:this.deleteRule,rules:this.state.rules})))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(c.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[172,2,1]]]);
//# sourceMappingURL=main.601bd93f.chunk.js.map