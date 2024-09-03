const taskInput = document.querySelector(".add-task-input");
const taskButton = document.querySelector(".add-task-button");
const toDoList = document.querySelector(".to-do-list");
const liList = document.querySelectorAll("li")
const allBtn = document.querySelector(".status-all")
const doneBtn = document.querySelector(".status-done")
const undoneBtn = document.querySelector(".status-undone")


taskButton.addEventListener("click", function () {
    if (taskInput.value) {
        const task = taskInput.value;
        tasks(task);
        taskInput.value = "";
    } else{
        alert("Insira um texto válido")
    }
});


function tasks(task) {
    const div = document.createElement('div')

    const li = document.createElement('li')
    li.innerHTML = `${task}`

    const removeButton = document.createElement('button')
    removeButton.innerHTML = '<button type="button">Remover</button>'

    const editButton = document.createElement('button')
    editButton.innerHTML = '<button type="button">Editar</button>'

    div.append(li)
    div.append(removeButton)
    div.append(editButton)

    toDoList.append(div)


    li.addEventListener("click", function(){
    li.classList.toggle('done')
    filterTasks('all')
    })

    allBtn.addEventListener('click', function(){
        filterTasks('all')
    })

    doneBtn.addEventListener('click', function(){
        filterTasks('done')
    })

    undoneBtn.addEventListener('click', function(){
        filterTasks('undone')
    })
}


function filterTasks(status) {
    liList.forEach(li => {
        if (status === 'all') {
            li.style.display = 'block';
        } else if (status === 'done' && li.classList.contains('done')) {
            li.style.display = 'block';
        } else if (status === 'undone' && !li.classList.contains('done')) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
}



