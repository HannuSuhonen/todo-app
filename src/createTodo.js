import { addItems,getItems,deleteItem } from "./saver";

export function createTodo(title,description,dueDate, projectName) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

    addItems(projectName === null || projectName === "" ? "default" : projectName,this);
}

export function getTodoItems(projectName = "default"){
    return getItems(projectName);
}

export function deleteTodoItem(projectName,index){
    return deleteItem(projectName,index)
}


