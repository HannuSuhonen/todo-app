import "./styles.css"
import { createTodo, getTodoItems, deleteTodoItem } from "./createTodo"

let content = document.getElementById("content");
let btn = document.createElement("button");
let todolist = document.createElement("ul");
let titleInput = document.createElement("input");
let descInput = document.createElement("input");
let datepicker = document.createElement("input");
let projectInput = document.createElement("input");

datepicker.type = "date";
titleInput.value = "Hello";
descInput.value = "Hello";
projectInput.placeholder = "project name"
content.appendChild(titleInput);
content.appendChild(descInput);
content.appendChild(projectInput);
content.appendChild(datepicker);
content.appendChild(btn);
btn.textContent = "add";

btn.addEventListener("click", () => {
    new createTodo(titleInput.value,descInput.value,datepicker.value,projectInput.value);
    // loadTodos();
    displayAllProjectsAndTodos();
})

export function displayAllProjectsAndTodos() {
    const projectKeys = Object.keys(localStorage);

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
        content.appendChild(title);
    });
}

displayAllProjectsAndTodos();
// loadTodos();

