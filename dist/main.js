!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){for(let n in t)e.style[n]=t[n]}n.r(t);{!function(){let e=document.createElement("h5");e.innerText="Vai a schermo intero per avere la massima esperienza!";let t=document.createElement("button");t.innerText="Play Game!",t.addEventListener("click",r);let n=document.createElement("label");n.innerText="Select the speed    ";let o=document.createElement("select");o.id="speed";let a=document.createElement("option"),i=document.createElement("option"),l=document.createElement("option"),u=document.createElement("option"),d=document.createElement("option"),c=document.createElement("option");a.text="Regular",i.text="Fast",l.text="Slow",u.text="Super Slow",d.text="Super Fast",c.text="Insane",a.value=150,i.value=100,l.value=250,u.value=400,d.value=70,c.value=50,o.add(a),o.add(u),o.add(l),o.add(i),o.add(d),o.add(c),document.body.appendChild(e),document.body.appendChild(n),document.body.appendChild(o),document.body.appendChild(t)}();let e,t,n=[{x:160,y:160}],c=0,m=!1,s=80,f=0,y=!1,p=document.getElementById("gameCanvas"),g=document.getElementById("score"),h=p.getContext("2d");function r(){y=!1,function o(){if(document.addEventListener("keydown",a),y)return;(function(){let e=new l;for(let t=3;t<n.length;t++)n[t].x===n[0].x&&n[t].y===n[0].y&&(n=[{x:160,y:160}],y=!0,e.sayMessage(),c=0,document.getElementById("score").innerHTML=c);let t=n[0].x<0,o=n[0].x>p.width-80,r=n[0].y<0,a=n[0].y>p.height-80;(t||o||r||a)&&(n=[{x:160,y:160}],y=!0,e.sayMessage(),c=0,document.getElementById("score").innerHTML=c)})(),setTimeout((function(){m=!1,h.fillStyle="#ffffff",h.strokestyle="#000000",h.fillRect(0,0,p.width,p.height),h.strokeRect(0,0,p.width,p.height),function(){let n=document.getElementById("mouse");h.drawImage(n,e,t,80,80)}(),function(){let o={x:n[0].x+s,y:n[0].y+f};n.unshift(o),n[0].x===e&&n[0].y===t?(c+=1,document.getElementById("score").innerHTML=c,d()):n.pop()}(),n.forEach(i),o()}),document.getElementById("speed").value)}(),d()}function a(e){if(m)return;m=!0;let t=e.key,n=-80===f,o=80===f,r=-80===s;"ArrowLeft"!==t||80===s||(s=-80,f=0),"ArrowUp"!==t||o||(s=0,f=-80),"ArrowRight"!==t||r||(s=80,f=0),"ArrowDown"!==t||n||(s=0,f=80)}function i(e){let t=document.getElementById("snake");h.drawImage(t,e.x,e.y,80,80)}function l(){this.gameOver="Game Over, your score is: ",this.sayMessage=()=>alert(this.gameOver+c+this.playAgainMessage)}function u(e,t){return 80*Math.round((Math.random()*(t-e)+e)/80)}function d(){e=u(0,p.width-80),t=u(0,p.height-80),n.forEach((function(n){n.x==e&&n.y==t&&d()}))}o(p,{position:"absolute",marginLeft:"50%",top:"50%",left:"3%",transform:"translate(-50%, -50%)"}),o(g,{textAlign:"left",fontSize:"240px"}),l.prototype.playAgainMessage="     Play again!!"}}]);