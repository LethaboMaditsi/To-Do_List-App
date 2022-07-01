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
    function (event) {
        //prevent the page from reloading when submitting 
        event.preventDefault();
        addTodo(todoInput.value); //call addTodo function with input box current value
    }
);

//function to add todo
function addTodo(item) {
    //if item is not empty
    if (item !== '') {
        //make a todo object, which has id, name, and completed properties

        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        };
        //then add it to todos array
        todos.puse(todo);
        addToLocalStorage(todos); //then store in localstorage
        //finally clear the input box value
        todoInput.value = '';
    }
}
//function to render given todos to screen
function renderTodos(todos) {
    //clear everything inside <ul> with class="todo-items"
    todoItemsList.innerHTML = '';

    //run through each item inside todos
    todos.forEach(function (item)) {
        //check if the item is completed 
        const checked = item.completed ? 'checked' : null;

        //make a <li> element fill it 
        //<li> </li>

        const li = document.createElement('li');
        //<li class="item"> </li>

        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);

        //if item is completed,add a line
        if (item.completed == true) {
            li.class.add('checked');
         }

         li.innerHTML =
            <input type="checkbox" class="checkbox" ${checked} ></input>
                ${item.name}
                <button class="delete-button">X</button>
             ;
             
             //add <li> to <ul>
             todoItemsList.append(li);
        });
        
}
//function to add todos to locakl storage 
function addToLocalStorage(todos) {
    //convert the array to string an store it
    localStorage.setItem('todos',JSON.stringify(todos));
    //render them to screen
    renderTodos(todo);
}
//get items from local storage
function getFromLocalStorage(){
const reference = localStorage.getItem('todos');
//if reference exists

if(reference){
    todos =JSON.parse(reference);
    renderTodos(todos);
}
}
