export function addTodoItem() {
    let container = document.createElement("div")

    let titleinput = document.createElement("input")
    titleinput.type = "text"
    titleinput.placeholder = "Title"
    container.appendChild(titleinput)

    let descinput = document.createElement("input")
    descinput.type = "text"
    descinput.placeholder = "Description"
    container.appendChild(descinput)
    return container
}