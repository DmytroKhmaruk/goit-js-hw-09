const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.body;let a=null;t.addEventListener("click",(function(){!0===t.disabled&&(e.disabled=!1),a=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`;o.style.backgroundColor=t}),1e3)}));
//# sourceMappingURL=01-color-switcher.e246cbc4.js.map
