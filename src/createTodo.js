import { addItems,getItems,deleteItem } from "./saver";

const TODOKEY = "todos";

export function createTodo(title,description,dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

    addItems(TODOKEY,this);
}

export function getTodoItems(){
    return getItems(TODOKEY);
}

export function deleteTodoItem(index){
    return deleteItem(TODOKEY,index)
}