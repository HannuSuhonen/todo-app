export function createTodoModal() {
    let modal = document.createElement("div")
    modal.classList.add("modal")
    let content = document.createElement("form")
    content.classList.add("modal-content")

    let titleinput = document.createElement("input")
    titleinput.type = "text"
    titleinput.placeholder = "Title"
    titleinput.id = "title"
    content.appendChild(titleinput)

    let descinput = document.createElement("input")
    descinput.type = "text"
    descinput.placeholder = "Description"
    descinput.id = "description"
    content.appendChild(descinput)

    let dateInput = document.createElement("input")
    dateInput.type = "date"
    dateInput.id = "date"
    content.appendChild(dateInput)

    let addbutton = document.createElement("button")
    addbutton.textContent = "Add"
    content.appendChild(addbutton)

    modal.appendChild(content)

    return modal
}