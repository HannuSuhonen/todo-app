export function createTodoModal() {
    let modal = document.createElement("div")
    let todoObj = {}
    modal.classList.add("modal")
    let content = document.createElement("div")
    content.classList.add("modal-content")

    let titleinput = document.createElement("input")
    titleinput.type = "text"
    titleinput.placeholder = "Title"
    content.appendChild(titleinput)

    let descinput = document.createElement("input")
    descinput.type = "text"
    descinput.placeholder = "Description"

    content.appendChild(descinput)

    let dateInput = document.createElement("input")
    dateInput.type = "date"
    content.appendChild(dateInput)

    let addbutton = document.createElement("button")
    addbutton.textContent = "Add"
    addbutton.addEventListener("click", () => {
        todoObj.title = titleinput.value;
        todoObj.descinput = descinput.value;

        localStorage.setItem(titleinput.placeholder,JSON.stringify(todoObj))
        modal.style.display = "none"
    })
    content.appendChild(addbutton)

    modal.appendChild(content)

    return modal
}