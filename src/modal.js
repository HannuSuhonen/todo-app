import { createTodo } from "./createTodo";

let modalElement;
export function generateModal(onCloseCallback){
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
        if (typeof onCloseCallback === 'function') {
            onCloseCallback({
                title: titleInput.value,
                description: descInput.value,
                dueDate: datepicker.value,
                projectName: projectInput.value
            });
        }
        hideModal(modal);
    });

    let container = document.querySelector(".grid-container");
    container.appendChild(modal);

    modalElement = modal;
}

export function showTodoDetails(todo){
    clearModalFields();
    modalElement.querySelector(".modal-title").value = todo.title;
    modalElement.querySelector(".modal-description").value = todo.description;
    modalElement.querySelector(".modal-duedate").value = todo.dueDate;
    modalElement.querySelector(".modal-project").value = todo.projectName === "undefined" || todo.projectName === null ? "": todo.projectName;
    showModal();
}

function clearModalFields(){
    modalElement.querySelector(".modal-title").value = "";
    modalElement.querySelector(".modal-description").value = "";
    modalElement.querySelector(".modal-duedate").value = "";
    modalElement.querySelector(".modal-project").value = "";
}

// Show modal
export function showModal() {
    modalElement.classList.add("is-visible");
}

// Hide modal
export function hideModal() {
    modalElement.classList.remove("is-visible");
}