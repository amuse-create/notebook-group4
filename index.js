/* Global variables go here */
/*Goran variables*/


/*Alejandra variables*/

const listItems = document.querySelector(".add-to-do");

//document.forms[0];
const itemInput = listItems.children[1];
let todoItems = []
let ul = document.querySelector('.list');
let li = document.createElement('li');

/*Adrian variables*/
/*Global variables end here */
/* Goran Works from  here */
/* Goran work ends here*/

/*Alejandra works from here */


// submit data function
let addItem = (event) => {
    event.preventDefault();
    if (itemInput.value != '') {
        addListItem(itemInput.value);
itemInput.value = '';
    } 
    todoItems.push(itemInput);
}

// add tasks
let addListItem = (todoItems) => {
    li.innerText = `${todoItems}` ; 
    ul.appendChild(li);
    document.querySelector('.newTask').style.display = 'block';
}

//load every event in the page
listItems.addEventListener('submit', addItem);


/*Alejandra work ends here */


/*Adrian works from here */


/*Adrian work ends here*/ 
