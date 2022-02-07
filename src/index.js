import css from "./index.mcss";
// import css from "./index.module.css";

console.log(css);

const red = document.createElement("div");
const blue = document.createElement("div");

red.className = css.red;
blue.className = css.blue;

red.innerText = "red";
blue.innerText = "blue";

const loader = async () => {
    await import("./other.js");
}

document.body.appendChild(red);
document.body.appendChild(blue);

const btn = document.querySelector("#load");

btn.addEventListener("click", loader);