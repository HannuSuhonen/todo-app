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
    loadTodos();
})

function loadTodos(){
    let todos = getTodoItems();
    todolist.innerHTML = "";
    todos.forEach((todoObj,index) => {
        const { title, description, dueDate } = todoObj;
        let li = document.createElement("li");
        li.textContent = `${title} ${description} ${dueDate}`;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        li.append(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            deleteTodoItem("default",index)
            loadTodos();
        })
        todolist.appendChild(li);
    });
    content.appendChild(todolist);
}

loadTodos();

