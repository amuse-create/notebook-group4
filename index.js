/* Global variables go here */
/*Goran variables*/


/*Alejandra variables*/

const listItems = document.forms[0];
const itemInput = listItems.children[2];
let todoItems = []
let ul = document.getElementById('list');
let li = document.createElement('li');
let tasks = document.getElementsByClassName('tasks');
/*Adrian variables*/
/*Global variables end here */
/* Goran Works from  here */
/* Goran work ends here*/

/*Alejandra works from here */


// submit data function
let addItem = (event) => {
event.preventDefault();
    if (itemInput.value) {
        addListItem(itemInput.value);
        itemInput.value = '';     
todoItems.push(addItem);
} else ("no task added");
}

// add tasks
let addListItem = (tasks) => {
    return  li.innerText = `${tasks}` ;  
    ul.appendChild(li);
        document.querySelector('.content').style.display = 'block';
    }
    

//load every event in the page
listItems.addEventListener('submit', addItem);


/*let attachClickEventToTask = () => {
    const tasks = document.getElementsByClassName("tasks");
    for (let task of tasks) {
task.addEventListener("click", addItem);
    }
} */

/*Alejandra work ends here */


/*Adrian works from here */


/*Adrian work ends here*/ 

/*
const item = <li class="item">
                    <i class="fa ${DONE} co" job="complete" id="0"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>
                ; */