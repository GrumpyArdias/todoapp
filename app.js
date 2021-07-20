// Button Creation
let root = document.querySelector("#root");
let btn = document.createElement("button");
root.appendChild(btn);
btn.type = "button";
// Style
btn.style.boxShadow = "0px 0px 0px 2px #9fb4f2";
btn.style.backgroundColor = "#7892c2";
btn.style.borderRadius = "10px";
btn.style.border = "1px solid #4e6096";
btn.style.display = "inline-block";
btn.style.cursor = "pointer";
btn.style.color = "#ffffff";
btn.style.fontFamily = "Arial";
btn.style.fontSize = "19px";
btn.style.padding = "12px 37px";
btn.style.textDecoration = "none";
btn.style.textShadow = btn.innerHTML = "boton de mierda";
// Adding a class
btn.style.btn.classList.add("boton");
