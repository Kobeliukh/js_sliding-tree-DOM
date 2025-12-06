"use strict";
const tree = document.querySelector(".tree");
const uls = tree.querySelectorAll("ul");
tree.addEventListener("click", (e)=>{
    if (e.target.tagName !== "SPAN") return;
    const ul = e.target.nextElementSibling;
    let state = "none";
    if (!ul) return;
    if (ul.style.display === "none") state = "";
    ul.style.display = state;
});
uls.forEach((ul)=>{
    if (ul.previousSibling.nodeType !== 3) return;
    const span = document.createElement("span");
    span.textContent = ul.previousSibling.textContent.trim();
    ul.previousSibling.replaceWith(span);
});

//# sourceMappingURL=index.f75de5e1.js.map
