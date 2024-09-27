import "./styles.css"
import PubSub from "pubsub-js";
import { createTodo, getTodoItems, deleteTodoItem } from "./createTodo"
import { generateModal } from "./modal";

let btn = document.createElement("button");
btn.textContent = "add";
content.appendChild(btn);

let todoContainer = document.createElement("div");
content.appendChild(todoContainer);

btn.addEventListener("click", () => {
    let modal = generateModal();
    content.appendChild(modal);
    modal.style.display = "block"
})

PubSub.subscribe("todo-created", () => {
    displayAllProjectsAndTodos();
})

function displayAllProjectsAndTodos() {
    todoContainer.innerHTML = "";
    const projectKeys = Object.keys(localStorage);
    const container = document.createElement("div");

    projectKeys.forEach(projectName => {
        let title = document.createElement("h2");
        title.textContent = projectName
        const todos = getTodoItems(projectName); // Get todos for each project

        if (todos.length === 0) {
            console.log("  No todos for this project.");
        } else {
            let todosListIng = document.createElement("ul");
            todos.forEach((todo, index) => {
                let todoItem = document.createElement("li");
                todoItem.textContent = todo.title;
                todosListIng.appendChild(todoItem);
            });
            title.appendChild(todosListIng);
        }
        container.appendChild(title);
    });
    todoContainer.appendChild(container);
}

displayAllProjectsAndTodos();