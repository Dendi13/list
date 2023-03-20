let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('.addBtn__add');
let list = document.querySelector('#list');
let addBtn__clear = document.querySelector('.addBtn__clear');

addBtn.addEventListener('click', (evt) => {

    let li = document.createElement('li');
    li.classList.add('item');
    list.append(li);
    li.append(taskInput.value);
    taskInput.value = '';

    let deletes = document.createElement('div');
    deletes.classList.add('item__btns');
    li.append(deletes);
    deletes.style.textAlign = 'right';

    let mus = document.createElement('i');
    mus.classList.add('fa-square-check');
    mus.classList.add('fa-regular');
    deletes.append(mus);

    mus.addEventListener('click', (evt) => {
        li.classList.toggle('done');
    })

    let cor = document.createElement('i');
    cor.classList.add('fa-trash-can');
    cor.classList.add('fa-solid');
    deletes.append(cor);

    cor.addEventListener('click', (evt) => {
        list.removeChild(li);
    })
})

addBtn__clear.addEventListener('click', (evt) => {

})






