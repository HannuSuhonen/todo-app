const TODOKEY = "todos";

export function createTodo(title,description,dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

    addTodo(this);
}

function getTodos() {
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