export function getItems(key) {
    const values = localStorage.getItem(key);
    return values ? JSON.parse(values) : [];
}

export function saveItems(key,values){
    localStorage.setItem(key,JSON.stringify(values));
}

export function addItems(key,value){
    const values = getItems(key);
    values.push(value);
    saveItems(key,values);
}

export function deleteItem(key,index){
    let values = getItems(key);
    if (index > -1) {
        values.splice(index, 1); 
    }
    saveItems(key,values);
}