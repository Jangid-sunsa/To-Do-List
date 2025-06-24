let todoList = [];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');   
    let dateElement = document.querySelector('#todo-date');   
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if(todoItem && todoDate){
        todoList.push({item: todoItem, dueDate: todoDate});
        saveToLocalStorage();
        inputElement.value = '';
        dateElement.value = '';
        displayItems();
    }
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for(let i = 0; i < todoList.length; i++){
        let {item, dueDate} = todoList[i];
        newHtml +=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>`;
    } containerElement.innerHTML = newHtml;
}

function saveToLocalStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}



