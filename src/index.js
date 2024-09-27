import "./styles.css"
import { createTodo, getTodoItems, deleteTodoItem } from "./createTodo"
import { generateModal } from "./modal";

let btn = document.createElement("button");
btn.textContent = "add";
content.appendChild(btn);

let listContainer = document.createElement("div");
content.appendChild(listContainer);

btn.addEventListener("click", () => {

    let modal = generateModal();
    content.appendChild(modal);
    modal.style.display = "block"
})

export function displayAllProjectsAndTodos() {
    const projectKeys = Object.keys(localStorage);
    const container = document.createElement("div");

    projectKeys.forEach(projectName => {
        let title = document.createElement("h2");
        title.textContent = projectName
        const todos = getTodoItems(projectName); // Get todos for each project

        console.log(`Project: ${projectName}`); // Display the project name

        if (todos.length === 0) {
            console.log("  No todos for this project.");
        } else {
            let todosListIng = document.createElement("ul");
            todos.forEach((todo, index) => {
                console.log(`  ${index + 1}. ${todo.title} - ${todo.description}`);
                let todoItem = document.createElement("li");
                todoItem.textContent = todo.title;
                todosListIng.appendChild(todoItem);
            });
            title.appendChild(todosListIng);
        }
        container.appendChild(title);
    });
    return container;
}

content.append(displayAllProjectsAndTodos());
// loadTodos();

