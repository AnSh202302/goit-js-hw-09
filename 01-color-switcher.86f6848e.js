const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let l=null;function n(){t.parentElement.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.toggleAttribute("disabled",!0),t.addEventListener("click",(function(o){l=setInterval(n,1e3),t.toggleAttribute("disabled",!0),e.toggleAttribute("disabled",!1)})),e.addEventListener("click",(function(){clearInterval(l),t.toggleAttribute("disabled",!1),e.toggleAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.86f6848e.js.map