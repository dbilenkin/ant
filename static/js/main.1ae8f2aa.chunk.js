(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r,a,o=n(0),l=n.n(o),i=n(7),c=n.n(i),s=(n(15),n(8)),u=n(1),d=n(2),f=n(4),p=n(3),h=n(5),m=(n(17),0),g=[],v={x:250,y:250,d:"up"},y=function(e,t){r=t.getContext("2d"),a=e,function(){for(var e=0;e<500;e++){g[e]=[];for(var t=0;t<500;t++)g[e][t]="white"}}(),function e(){if(!(m>1e7)&&g[v.x]&&g[v.x][v.y]){m++,document.getElementById("steps").innerHTML=m;var t=g[v.x][v.y],n=a[t].color;g[v.x][v.y]=n;var o=a[t].dir;r.fillStyle=n,r.fillRect(1*v.x,1*v.y,1,1),"up"===v.d?"left"===o?(v.x--,v.d="left"):(v.x++,v.d="right"):"down"===v.d?"left"===o?(v.x++,v.d="right"):(v.x--,v.d="left"):"left"===v.d?"left"===o?(v.y++,v.d="down"):(v.y--,v.d="up"):"left"===o?(v.y--,v.d="up"):(v.y++,v.d="down"),m%1e3===0?setTimeout(e,1):e()}}()},w=function(e){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas;y(this.props.rules,e)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Grid"},l.a.createElement("div",null,"steps:",l.a.createElement("span",{id:"steps"})),l.a.createElement("canvas",{ref:"canvas",width:"500",height:"500"})),l.a.createElement("button",{onClick:this.props.pause},this.props.startStopText),l.a.createElement("button",{onClick:this.props.reset},"Reset"))}}]),t}(o.Component),b=function(e){return l.a.createElement("div",{className:"Rules"},l.a.createElement("h1",null,"Rules"),Object.keys(e.rules).map(function(t){return l.a.createElement("div",{className:"rule"},l.a.createElement("div",{className:"ruleColor",style:{backgroundColor:t}}),l.a.createElement("div",{onClick:function(){return e.toggle(t)}},e.rules[t].dir))}))},E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={rules:{white:{color:"red",dir:"left"},red:{color:"yellow",dir:"left"},yellow:{color:"blue",dir:"right"},blue:{color:"orange",dir:"left"},orange:{color:"green",dir:"right"},green:{color:"purple",dir:"right"},purple:{color:"white",dir:"left"}},running:!1},n.toggle=function(e){var t=Object(s.a)({},n.state);"left"===t.rules[e].dir?t.rules[e].dir="right":t.rules[e].dir="left",n.setState(t)},n.pause=function(){},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(w,{rules:this.state.rules,running:this.state.running}),l.a.createElement(b,{toggle:this.toggle,rules:this.state.rules}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.1ae8f2aa.chunk.js.map