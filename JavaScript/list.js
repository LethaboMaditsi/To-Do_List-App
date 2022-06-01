window.addEventListener('load' ,()=> {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task_input");
    const list_el = document.querySelector("#tasks");

    //for the page not to refresh
    form.addEventListener('submit',(e) => {
        e.preventDefault();

        const task = input.value ;
        
        if(!task) {
            alert("Add Task");
            return;
        }
    })
})