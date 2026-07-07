const container= document.querySelector(".container");
// container.style.display="flex";
// container.style.justifyContent="center";
// container.style.flexDirection="column";
container.style.height="auto";
container.style.width="700px";
container.style.marginTop="80px";
container.style.marginLeft="300px";
container.style.border="5px solid red";
container.style.backgroundColor="hsl(0,0%,94%)";
container.style.paddingBottom="20px";

const fields= document.querySelector("#fields");
fields.style.display="flex";
fields.style.justifyContent="center";
fields.style.marginBottom="10px";


const taskInput =document.querySelector("#taskInput");
taskInput.style.height="30px";
taskInput.style.width="350px";
taskInput.style.marginTop="20px";
taskInput.style.marginLeft="20px";
taskInput.style.border="2px solid blue";
taskInput.style.padding="10px";


const button = document.querySelector("button");
button.style.height="30px";
button.style.width="100px";
button.style.marginTop="20px";
button.style.marginLeft="20px";
button.style.border="2px solid blue";
// button.style.backgroundColor="black";
button.style.color="white";
button.style.cursor="pointer";
// button:hover.style.backgroundColor="green";

function addTask(){
    const newTask= document.createElement('li');
    const taskList=document.getElementById('taskList');
    taskList.appendChild(newTask);
    newTask.textContent =document.getElementById('taskInput').value;
    document.getElementById('taskInput').value="";
    editTask(newTask)
    deleteTask(newTask)
    
}

function editTask(newTask){

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    newTask.appendChild(editBtn);
    editBtn.style.marginLeft = "auto";
    editBtn.style.marginRight="20px";
    editBtn.onclick = function(){
        const newText = prompt("Edit Task:");
        if(newText !== null && newText.trim() !== ""){
            newTask.firstChild.textContent = newText;
        }
    };
}

function deleteTask(newTask){
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginRight="10px";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function(){
        newTask.remove();
    };
}

