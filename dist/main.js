!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){for(let n in t)e.style[n]=t[n]}n.r(t);{!function(){const e=document.createElement("h5");e.innerText="Vai a schermo intero per avere la massima esperienza!";const t=document.createElement("button");t.innerText="Play Game!",t.addEventListener("click",r);const n=document.createElement("label");n.innerText="Select the speed    ";const o=document.createElement("select");o.id="speed";const i=document.createElement("option"),a=document.createElement("option"),u=document.createElement("option"),d=document.createElement("option"),c=document.createElement("option"),l=document.createElement("option");i.text="Regular",a.text="Fast",u.text="Slow",d.text="Super Slow",c.text="Super Fast",l.text="Insane",i.value=150,a.value=100,u.value=250,d.value=400,c.value=70,l.value=50,o.add(i),o.add(d),o.add(u),o.add(a),o.add(c),o.add(l),document.body.appendChild(e),document.body.appendChild(n),document.body.appendChild(o),document.body.appendChild(t)}();let e,t,n,s,y,p,g,h,x=[{x:320,y:320}],E=0,v=!1,w=80,b=0,I=!1,M=document.getElementById("gameCanvas"),S=document.getElementById("score"),B=M.getContext("2d");function r(){I=!1,function o(){if(document.addEventListener("keydown",i),I)return;(function(){let e=new u;for(let t=3;t<x.length;t++)x[t].x===x[0].x&&x[t].y===x[0].y&&(x=[{x:320,y:320}],I=!0,e.sayMessage(),E=0,document.getElementById("score").innerHTML=E);let t=x[0].x<0,o=x[0].x>M.width-80,r=x[0].y<0,i=x[0].y>M.height-80,a=(x[0].x===g&&x[0].y,x[0].x===g-80&&x[0].y===h),d=x[0].x===g-160&&x[0].y===h,c=x[0].x===n&&x[0].y===s,l=x[0].x===y&&x[0].y===p;(t||o||r||i||c||l||a||d)&&(x=[{x:320,y:320}],I=!0,e.sayMessage(),E=0,document.getElementById("score").innerHTML=E)})(),setTimeout((function(){v=!1,B.fillStyle="#ffffff",B.strokestyle="#000000",B.fillRect(0,0,M.width,M.height),B.strokeRect(0,0,M.width,M.height),function(){let n=document.getElementById("mouse");B.drawImage(n,e,t,80,80)}(),function(){let e=document.getElementById("fuoco");B.drawImage(e,n,s,80,80)}(),function(){let e=document.getElementById("filo");B.drawImage(e,y,p,80,80)}(),function(){let n={x:x[0].x+w,y:x[0].y+b};x.unshift(n),x[0].x===e&&x[0].y===t?(E+=1,document.getElementById("score").innerHTML=E,c(),m(),l(),f()):x.pop()}(),x.forEach(a),g+=80,g>M.width-80&&(g=80),function(){let e=document.getElementById("bullet");B.drawImage(e,g,h,80,80)}(),o()}),document.getElementById("speed").value)}(),c(),l(),m(),f()}function i(e){if(v)return;v=!0;let t=e.key,n=-80===b,o=80===b,r=-80===w;"ArrowLeft"!==t||80===w||(w=-80,b=0),"ArrowUp"!==t||o||(w=0,b=-80),"ArrowRight"!==t||r||(w=80,b=0),"ArrowDown"!==t||n||(w=0,b=80)}function a(e){let t=document.getElementById("snake");B.drawImage(t,e.x,e.y,80,80)}function u(){this.gameOver="Game Over, your score is: ",this.sayMessage=()=>alert(this.gameOver+E+this.playAgainMessage)}function d(e,t){return 80*Math.round((Math.random()*(t-e)+e)/80)}function c(){e=d(0,M.width-80),t=d(0,M.height-80),x.forEach((function(o){let r=o.x===e&&o.y===t,i=o.x===n&&o.y===s,a=o.x===y&&o.y===p;(r||a||i)&&c()}))}function l(){n=d(0,M.width-80),s=d(0,M.height-80),(n===y&&s===p||n===e&&s===t)&&(l(),m())}function m(){y=d(0,M.width-80),p=d(0,M.height-80)}function f(){g=e+80,h=t}o(M,{position:"absolute",marginLeft:"50%",top:"50%",left:"3%",transform:"translate(-50%, -50%)"}),o(S,{textAlign:"left",fontSize:"280px"}),u.prototype.playAgainMessage="     Play again!!"}}]);