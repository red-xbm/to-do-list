// #3

// setting Up Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks");
let TasksCuont = document.querySelector(".task-count span");
let TasksComp = document.querySelector(".task-comp span");

// fucos on input field
window.onload = function () {
    theInput.focus();
};

// adding the task
theAddButton.onclick = function () {

    // if bottun is empty
    if (theInput.value === "") {

        console.log("no value")

    }
    else {

        // check no task to show
        let noTask = document.querySelector(".no-tasks");

        // check if span with no tasks msg is exist
        if (document.body.contains(document.querySelector(".no-tasks"))) {

            // remove no tasks msg
            noTask.remove();
        };

        // create main span element 
        let mainSpan = document.createElement("span");


        // create delete button
        let deleteElement = document.createElement("span");

        // create the main span text 
        let text = document.createTextNode(theInput.value);

        // create the delete button text 
        let deleteText = document.createTextNode("delete");

        // add text to main span
        mainSpan.appendChild(text);

        // add class to main span
        mainSpan.className = `task-box`;

        // add text to delete button
        deleteElement.appendChild(deleteText);

        // add class to button
        deleteElement.className = `delete`;

        // add delete button to main span
        mainSpan.appendChild(deleteElement);

        // add the task to the container
        tasksContainer.appendChild(mainSpan);

        // empty the input
        theInput.value = '';

        theInput.focus();

        // calculate task
        calculateTasks();

    }
};

// #4

document.addEventListener(`click`, function (e) {

    // delete task
    if (e.target.className == `delete`) {

    // remove current
    e.target.parentNode.remove()

    // check number of tasks inside the container
    if (tasksContainer.childElementCount == 0) {

        createNoTasks();
}; }

    if (e.target.className == `task-box`) {

    // toggle class `finished`
    e.target.classList.toggle("finished");
}

    // calculate task
    calculateTasks();
});


// #5 the End

// function to create no tasks msg
function createNoTasks() {

    // create msg span element
    let msgSpan = document.createElement("span");

    // create text msg
    let msgText = document.createTextNode("No Tasks To Show");

    //add text to msg span element
    msgSpan.appendChild(msgText);

    //add class to msg span
    msgSpan.className = `no-tasks`;

    // append the msg span element to the task contaier
    tasksContainer.appendChild(msgSpan);
};

// function to calculate tasks
function calculateTasks() {

    // calculate all tasks
    TasksCuont.innerHTML = document.querySelectorAll(`.tasks .task-box`).length;

    //calculate comleted tasks
    TasksComp.innerHTML = document.querySelectorAll(`.tasks .finished`).length;


};
































































































