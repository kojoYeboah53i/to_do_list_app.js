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
}