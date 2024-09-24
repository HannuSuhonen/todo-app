import "./styles.css"
import { createTodo } from "./createTodo"

let content = document.getElementById("content");
let btn = document.createElement("button");
content.appendChild(btn);
btn.textContent = "add";

btn.addEventListener("click", () => {
    let test = new createTodo("test","desc","today");
})