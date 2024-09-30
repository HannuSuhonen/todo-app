import "./styles.css"
import PubSub from "pubsub-js";
import { getProjects } from "./createTodo"
import { generateModal } from "./modal";

let btn = document.createElement("button");
btn.textContent = "add";
content.appendChild(btn);

let todoContainer = document.createElement("div");
content.appendChild(todoContainer);

let modal = generateModal();
content.appendChild(modal);

btn.addEventListener("click", () => {
    modal.style.display = "block"
})

PubSub.subscribe("todo-created", () => {
    displayProjectsAndTodos();
})

function displayProjectsAndTodos(){
    let projects = getProjects();
    projects.forEach(project => {
        let projectName = project.name;
        let todos = project.todos;

        let projectTitle = document.createElement("h2");
        projectTitle.textContent = projectName;
        content.appendChild(projectTitle);

        todos.forEach(todoObj => {
            let list = document.createElement("ul");
            let item = document.createElement("li");
            const { title } = todoObj;
            item.textContent = title;
            
            list.appendChild(item);
            projectTitle.appendChild(list);
        });

    });
}