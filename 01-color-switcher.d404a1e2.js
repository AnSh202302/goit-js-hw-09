!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;function a(){t.parentElement.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.toggleAttribute("disabled",!0),t.addEventListener("click",(function(o){n=setInterval(a,1e3),t.toggleAttribute("disabled",!0),e.toggleAttribute("disabled",!1)})),e.addEventListener("click",(function(){clearInterval(n),t.toggleAttribute("disabled",!1),e.toggleAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.d404a1e2.js.map