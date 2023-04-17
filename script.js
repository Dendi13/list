let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('.addBtn__add');
let list = document.querySelector('#list');

let tasks  =  [];

if(localStorage.getItem('tasksLS')){
    list.innerHTML = localStorage.getItem('tasksLS')
}

addBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    addTask(newItem);
    list.append(newItem);
    taskInput.value = '';
    localStorage.setItem('tasksLS', list.innerHTML);
    writeLS();
})

function addTask(newItem){
    newItem.classList.add('item');
    newItem.textContent = taskInput.value;
    const item__btns = document.createElement('div');
    newItem.append(item__btns);
    item__btns.className = 'item__btns'

    const doneBtn = document.createElement('i');
    doneBtn.className = 'fa-regular fa-square-check';
    item__btns.append(doneBtn);
    doneBtn.setAttribute('data-action', 'complete');

    const deleteButton = document.createElement('i');
    deleteButton.className = 'fa-solid fa-trash-can';
    item__btns.append(deleteButton);
    deleteButton.setAttribute('data-action', 'delete');

    let newTask = {
        id: Date.now(),
        text: taskInput.value,
        complete: false
    }

    tasks.push(newTask);
    newItem.setAttribute('id',  newTask.id)
}

list.addEventListener('click', function(event) {
    let target = event.target
    if (target.dataset.action == 'complete') {
        completeBtn(target);
    }
    if(target.dataset.action == 'delete') {
        removeTask(target);
    }
    writeLS();
})

function completeBtn(target) {
    target.closest('li').classList.toggle('done');
    let currentId = target.closest('li').id;
    const index = tasks.findIndex((task) => {
        return task.id == currentId;
    })

    if(tasks[index].complete == false) {
        tasks[index].complete = true;
    } else {
        tasks[index].complete = false;
    }
}

function removeTask(target) {
    target.closest('li').remove();
    taskInput.value = '';
    localStorage.setItem('tasksLS', list.innerHTML)
    let index  = tasks.findIndex((task)=>  {
        return  task.id == target.closest('li').id;
    })

    tasks.splice(index, 1);
}

function eriteLS() {
    localStorage.setItem('tasksLS', JSON.stringify(tasks));
}










