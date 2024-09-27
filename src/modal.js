export function generateModal(){
    let modal = document.createElement("div");
    let modalContent = document.createElement("div");
    let titleInput = document.createElement("input");
    let descInput = document.createElement("input");
    let datepicker = document.createElement("input");
    let projectInput = document.createElement("input");
    let closeButton = document.createElement("button");

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

    closeButton.onclick = () => {
        modal.style.display = "none";
    }

    return modal;
}

    // new createTodo(titleInput.value,descInput.value,datepicker.value,projectInput.value);
    // let container = displayAllProjectsAndTodos();
    // listContainer.innerHTML = "";
    // listContainer.appendChild(container);
    // loadTodos();