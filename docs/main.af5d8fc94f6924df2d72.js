(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.d({},{L:()=>p});var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorage()}var r,o,a;return r=t,(o=[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(t){var r,n=e(this.todos);try{for(n.s();!(r=n.n()).done;){var o=r.value;if(o.id==t){o.completado=!o.completado,this.guardarLocalStorage();break}}}catch(t){n.e(t)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[]}}])&&n(r.prototype,o),a&&n(r,a),Object.defineProperty(r,"prototype",{writable:!1}),t}();function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var l=i((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}));function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=document.querySelector(".todo-list"),d=document.querySelector(".new-todo"),f=document.querySelector(".clear-completed"),m=document.querySelector(".filters"),v=document.querySelectorAll(".filtro"),y=function(t){var e='\n     <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n\t\t\t<label>").concat(t.tarea,'</label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li>'),r=document.createElement("div");return r.innerHTML=e,s.append(r.firstElementChild),r.firstElementChild};d.addEventListener("keyup",(function(t){if(13===t.keyCode&&d.value.length>0){console.log(d.value);var e=new l(d.value);p.nuevoTodo(e),y(e),d.value=""}})),s.addEventListener("click",(function(t){var e=t.target.localName,r=t.target.parentElement.parentElement,n=r.getAttribute("data-id");e.includes("input")?(p.marcarCompletado(n),r.classList.toggle("completed")):e.includes("button")&&(p.eliminarTodo(n),s.removeChild(r))})),f.addEventListener("click",(function(){p.eliminarCompletados();for(var t=s.children.length-1;t>=0;t--){var e=s.children[t];e.classList.contains("completed")&&s.removeChild(e)}})),m.addEventListener("click",(function(t){var e=t.target.text;if(e){v.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var r,n=c(s.children);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(e){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(t){n.e(t)}finally{n.f()}}}));var p=new o;p.todos.forEach((function(t){return y(t)}))})();