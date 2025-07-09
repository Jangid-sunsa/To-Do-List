const addTask = document.getElementById('add-task');
const addTaskbtn = addTask.innerText
const enterTask = document.getElementById('enter-task');
const recordsDisplay = document.getElementById('records');
let taskArr = [];
let edit_id = null;

let objStr = localStorage.getItem('tasks');
if(objStr!=null){
    taskArr = JSON.parse(objStr);
}
displayInfo();

addTask.onclick=()=>{
    const name = enterTask.value;
    if(edit_id!=null){
        //edit 
        taskArr.splice(edit_id,1,{'name' : name});
        edit_id = null;
    }else{
        //
        taskArr.push({'name' : name});   
    }
    
    console.log(taskArr);
    saveInfo(taskArr); 
    enterTask.value = '';
    addTask.innerText = addTaskbtn;
}

function saveInfo(taskArr){
    let str = JSON.stringify(taskArr);
    localStorage.setItem('tasks', str);
    displayInfo();
}

function displayInfo(){
    let statement = '';
    taskArr.forEach((task,i) =>{
        statement += `<tr>
        <th scope="row">${i+1}</th>
        <td>${task.name}</td>
        <td><i class="btn btn-info text-white fa fa-edit mx-3" onclick='editInfo(${i})'></i><i class="btn btn-danger text-white fa fa-trash-o" onclick='deleteInfo(${i})'></i> </td>
      </tr>`
    });
    recordsDisplay.innerHTML = statement;
}

function editInfo(id){
    edit_id = id;
    enterTask.value = taskArr[id].name;
    addTask.innerText = 'Save Changes';
}

function deleteInfo(id){
    taskArr.splice(id,1);
    saveInfo(taskArr);
    displayInfo();
}