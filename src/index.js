import "./styles.css"
import { createTodoModal } from "./createTodo"

const container = document.getElementById("content")
let addTodoItembtn = document.createElement("button")
addTodoItembtn.textContent = "add item"
container.appendChild(addTodoItembtn)

addTodoItembtn.addEventListener("click", () => {
    let modal = createTodoModal()
    container.appendChild(modal)
    modal.style.display = "block"
})