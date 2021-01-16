//selectors

const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")


//eventlistners
todoButton.addEventListener('click', addTodo);



//functions
function addTodo(event){
    event.preventDefault();
    console.log("hellow to do lis")

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //  const newTodo = document.createElement("todo");
    // todoDiv.classList.add("todo");

     const newTodo = document.createElement('li')
     newTodo.innerText = "style-this";
     newTodo.classList.add('todo-item');

     const completedButton = document.createElement('button');
     completedButton.innerHTML = '<i class="fas fa-check"></i>';
     completedButton.classList.add("completed-btn");
     todoDiv.appendChild(completedButton);

     const trashButton = document.createElement('button');
     completedButton.innerHTML = '<i class="fas fa-trash"></i>';
     completedButton.classList.add("completed-btn");
     todoDiv.appendChild(trashButton);

     //create the html
     todolist.appendChild(todoDiv)

}