const form = document.querySelector('#form');
const todoul = document.querySelector('#todo');
const input = document.querySelector('#input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    if (todo) {
        todoText = todo.text
    }
    console.log(todoText)
    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
        })
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
        })
        todoEl.innerText = todoText
        todoul.appendChild(todoEl)
        input.value = ''
    }
    else {
        alert('PLEASE ENTER A TASK!!!')
    }
}
