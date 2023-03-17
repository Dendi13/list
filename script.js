let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('#addBtn');
let list = document.querySelector('#list');

addBtn.addEventListener('click', (evt) => {
    let li = document.createElement('li');
    li.className('los');
    list.append(li);
    li.append(taskInput.value);
    console.log('faa')
})