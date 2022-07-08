document.querySelector('#push').onclick = function () {
    // alert if theres no input
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task")
    }
    //if inforamtion is added it should display on screen
    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                // delete button that appears with each task
                <button class="delete">
                    <i class="far fa-trash-alt">delete</i>
                </button>
            
            </div>
        `;
      //enables the task to be deleted
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }




    }
}
