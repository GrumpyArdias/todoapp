// Button Creation
let root = document.querySelector("#root");
let btn = document.createElement("button");
root.appendChild(btn);
btn.type = "button";
// Style
btn.style.boxShadow = "0px 0px 0px 2px #9fb4f2";
btn.style.backgroundColor = "7892c2";
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
btn.classList.add("boton");

// 	background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%); te falta esto
// 	text-decoration:none;
// 	text-shadow:0px 1px 0px #283966;
// }
// .myButton:hover {
// 	background:linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
// 	background-color:#476e9e;
// }
// .myButton:active {
// 	position:relative;
// 	top:1px;
// }
