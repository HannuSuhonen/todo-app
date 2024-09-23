import "./styles.css"
import { addTodoItem } from "./createTodo"

const container = document.getElementById("content")
let addTodoItembtn = document.createElement("button")
addTodoItembtn.textContent = "add item"
container.appendChild(addTodoItembtn)

addTodoItembtn.addEventListener("click", () => {
    container.appendChild(addTodoItem())
})