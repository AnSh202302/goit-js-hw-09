!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t);var r=t("6JpON"),i=document.querySelector(".form");function a(e,n){var o=Math.random()>.3;return new Promise((function(t,r){var i={position:e,delay:n};setTimeout((function(){o?t(i):r(i)}))}),n)}i.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.preventDefault();for(var n=Number(i.delay.value),o=1;o<=i.amount.value;o+=1)a(o,n).then((function(e){var n=e.position,o=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=Number(i.step.value)}))}();
//# sourceMappingURL=03-promises.b198876a.js.map
