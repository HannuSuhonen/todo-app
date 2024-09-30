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
    content.appendChild(displayProjectsAndTodos());
})

function displayProjectsAndTodos(){
    let projects = getProjects();
    projects.forEach(project => {
        let title = document.createElement("h2");
        let list = document.createElement("ul");

        project.todos.forEach(todoObj => {
            let item = document.createElement("li");
            item.textContent = todoObj.title;
            list.appendChild(item);
        });

        title.textContent = project.name;
        title.appendChild(list);
        content.appendChild(title);
    });
}