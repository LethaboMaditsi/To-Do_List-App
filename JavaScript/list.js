//select everything 
//select todo-form
const todoForm = document.querySelector('.todo-form');
//select the input box 
const todoInput = document.querySelector('.todo-input');
//select the <ul> with class="todo-items"
const todoItemsList = document.querySelector('todo-items');
//array which stores every todos
let todos = [];

//add an eventListener on form, and listen for submit event 
todoForm.addEventListener('submit', 
function(event) {
    //prevent the page from reloading when submitting 
    event.preventDefault();
    addTodo(todoInput.value); 
    //call addTodo function with input box current value
}
);

//function to add todo