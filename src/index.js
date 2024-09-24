import "./styles.css"
import { createTodo, getTodos, deleteTodo } from "./createTodo"

let content = document.getElementById("content");
let btn = document.createElement("button");
let todolist = document.createElement("ul");
let titleInput = document.createElement("input");
let descInput = document.createElement("input");
let datepicker = document.createElement("input");
datepicker.type = "date";
titleInput.value = "Hello";
descInput.value = "Hello";
content.appendChild(titleInput);
content.appendChild(descInput);
content.appendChild(datepicker);
content.appendChild(btn);
btn.textContent = "add";



btn.addEventListener("click", () => {
    new createTodo(titleInput.value,descInput.value,datepicker.value);
    loadTodos();
})

function loadTodos(){
    let todos = getTodos();
    todolist.innerHTML = "";
    todos.forEach((todoObj,index) => {
        const { title, description, dueDate } = todoObj;
        let li = document.createElement("li");
        li.textContent = `${title} ${description} ${dueDate}`;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        li.append(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            deleteTodo(index);
            loadTodos();
        })
        todolist.appendChild(li);
    });
    content.appendChild(todolist);
}

loadTodos();

