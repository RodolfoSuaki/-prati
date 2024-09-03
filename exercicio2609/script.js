const taskRegister = document.querySelector(".register-space-value")
const btnRegister = document.querySelector('.register-space-btn')
const tasks = document.querySelector('.tasks')
const yearFilter = document.querySelector('#year')
const monthFilter = document.querySelector('#month')
const dayFilter = document.querySelector('#day')
const typeFilter = document.querySelector('#type')

btnRegister.addEventListener('click', function () {
    if (taskRegister.value && yearFilter.value && monthFilter.value && dayFilter.value && typeFilter.value) {
        const task = taskRegister.value
        const date = `${dayFilter.value}/${monthFilter.value}/${yearFilter.value}`
        const type = typeFilter.value
        const tr = createTask(task, date, type)
        tasks.appendChild(tr)
        taskRegister.value = ""
        yearFilter.value = ""
        monthFilter.value = ""
        dayFilter.value = ""
        typeFilter.value = ""
    }
    else {
        alert('Digite um valor válido')
    }
})


function createTask(task, date, type) {
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>${date}</td>
                    <td>${type}</td>
                    <td>${task}</td>`

    // const inputDate = document.createElement('input')
    // inputDate.setAttribute('type', 'datetime')
    // inputDate.setAttribute('id', 'task-date')
    // inputDate.value = date
    // li.appendChild(inputDate)

    // const inputType =  document.createElement('input')
    // inputType.setAttribute('type', 'text')
    // inputType.setAttribute('id', 'task-type')
    // inputType.value = type
    // li.appendChild(inputType)

    // const inputDescrption =  document.createElement('input')
    // inputDescrption.setAttribute('type', 'text')
    // inputDescrption.setAttribute('id', 'task-description')
    // inputDescrption.value = task
    // li.appendChild(inputDescrption)

    return tr
}