document.querySelectorAll("li").forEach(function(e){if(e.querySelector("ul")){var t=document.createElement("span");t.append(e.firstChild),e.prepend(t)}}),document.querySelector(".tree").addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.nextElementSibling;t&&(t.style.display="none"===t.style.display?"block":"none")}});
//# sourceMappingURL=index.a76662d7.js.map
