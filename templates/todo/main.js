
let todos = [
    {
        id: Math.random() * 99,
        title: "Belajar"
    },
    {
        id: Math.random() * 99,
        title: "Lari"
    },
]

renderListTodo()

function renderListTodo() {
    const element = document.getElementById("list-todo")
    element.innerHTML = ""
    let content = ``
    todos.forEach(todo => {
        content += `
            <li>${todo.title}  <button onclick="updateTodo(${todo.id})">update</button> <button onclick="deleteTodo(${todo.id})">delete</button> </li>
        `
    });
    element.innerHTML = content
}

function addTodo() {
    const element = document.getElementById("input-add-title")
    const valueInput = element.value
    todos.push({
        id: Math.random() * 99,
        title: valueInput
    })

    renderListTodo()
    element.value = ""
}


function updateTodo(id) {
    const element = document.getElementById("input-update-title")
    document.getElementById("inputId").value = id
    todos.forEach(todo => {
        if (todo.id === id) {
            element.value = todo.title
            // break;
            return;
        }
    })

    // element.value = title
}

function deleteTodo(id) {
    // console.log(id)
    const newTodos = []
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i].id, id)
        if (todos[i].id !== id) {
            newTodos.push(todos[i])
        }
    }
    todos = newTodos
    renderListTodo()
}

function update() {
    const id =  document.getElementById("inputId").value
    if (!id) {
        alert("id tidak di temukan!")
        return;
    }
    const title = document.getElementById("input-update-title")
    console.log(id)
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i].id, id)
        if (String(todos[i].id) == id) {
            todos[i].title = title.value
        }
    }
    title.value = ""
    document.getElementById("inputId").value = ""
    renderListTodo()
}