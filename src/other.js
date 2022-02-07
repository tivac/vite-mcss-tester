// import css from "./other.module.css";
import css from "./other.mcss";

console.log(css);

const green = document.createElement("div");

green.className = css.green;

green.innerText = "green";

document.body.appendChild(green);