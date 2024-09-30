import "./styles.css"
import PubSub from "pubsub-js";
import { getProjects } from "./createTodo"
import { generateModal } from "./modal";

let btn = document.createElement("button");
btn.textContent = "add";
content.appendChild(btn);

let modal = generateModal();
content.appendChild(modal);

btn.addEventListener("click", () => {
    modal.style.display = "block"
})

PubSub.subscribe("todo-created", () => {
    displayProjectsAndTodos();
})

function displayProjectsAndTodos(){
    let displayDiv = document.querySelector(".display");
    if (displayDiv) {
        displayDiv.innerHTML = "";
    } else {
        displayDiv = document.createElement("div");
        displayDiv.classList.add("display");
        content.appendChild(displayDiv);
    }

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
        displayDiv.appendChild(title);
    });
}