const TODOKEY = "todos";

export function createTodo(title,description,dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

    addTodo(this);
}

export function getTodos() {
    const todos = localStorage.getItem(TODOKEY);
    return todos ? JSON.parse(todos) : [];
}

function saveTodos(todos){
    localStorage.setItem(TODOKEY,JSON.stringify(todos));
}

function addTodo(todo){
    const todos = getTodos();
    todos.push(todo);
    saveTodos(todos);
}

export function deleteTodo(index){
    let todos = getTodos();
    if (index > -1) {
        todos.splice(index, 1); 
    }
    saveTodos(todos);
}