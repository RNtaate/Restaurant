(()=>{"use strict";let e=document.querySelector("body");document.getElementById("content").appendChild(function(e,t=""){let n=document.createElement("div");n.classList.add("info-div");let d=document.createElement("h1");d.textContent=e;let a=document.createElement("p");return a.textContent=t,n.appendChild(d),n.appendChild(a),n}("NORP RESTAURANT","Your stop for an exquisite and relaxing meal."));let t=document.createElement("nav"),n=(e,t="")=>{let n=document.createElement("button");return n.textContent=e,n.classList.add(t),n};t.appendChild(n("Home","tab-button")),t.appendChild(n("Menu","tab-button")),t.appendChild(n("Contacts","tab-button")),e.appendChild(t)})();