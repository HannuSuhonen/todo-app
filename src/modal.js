import { createTodo } from "./createTodo";
import PubSub from "pubsub-js";

export function generateModal(){
    let modal = document.createElement("div");
    let modalContent = document.createElement("div");
    let titleInput = document.createElement("input");
    let descInput = document.createElement("input");
    let datepicker = document.createElement("input");
    let projectInput = document.createElement("input");
    let closeButton = document.createElement("button");

    titleInput.classList.add("modal-title");
    descInput.classList.add("modal-description");
    datepicker.classList.add("modal-duedate");
    projectInput.classList.add("modal-project");
    closeButton.classList.add("closeBtn");

    datepicker.type = "date";
    titleInput.value = "Hello";
    descInput.value = "Hello";
    projectInput.placeholder = "project name"
    closeButton.textContent = "save";

    modalContent.appendChild(titleInput);
    modalContent.appendChild(descInput);
    modalContent.appendChild(projectInput);
    modalContent.appendChild(datepicker);
    modalContent.appendChild(closeButton);

    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    modal.appendChild(modalContent);

    closeButton.addEventListener("click", () => {
        new createTodo(titleInput.value,descInput.value,datepicker.value,projectInput.value);
        hideModal(modal);
    });

    return modal;
}

export function showTodoDetails(todo,modal){
    document.querySelector(".modal-title").value = todo.title;
    document.querySelector(".modal-description").value = todo.description;
    document.querySelector(".modal-duedate").value = todo.dueDate;
    document.querySelector(".modal-project").value = todo.projectName === "undefined" || todo.projectName === null ? "": todo.projectName;
    showModal(modal);
}


// Show modal
export function showModal(modal) {
    modal.classList.add("is-visible");
}

// Hide modal
export function hideModal(modal) {
    modal.classList.remove("is-visible");
}