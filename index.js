/* Global variables go here */
/*Goran variables*/


/*Alejandra variables*/

const listItems = document.forms[0];
const itemInput = listItems.children[0];
let todoItems = []
let ul = document.querySelector('ul');
let li = document.querySelector('li');


/*Adrian variables*/
/*Global variables end here */
/* Goran Works from  here */
/* Goran work ends here*/

/*Alejandra works from here */

// submit data function
addItem = (event) => {
    event.preventDefault();
    if (itemInput.value != '') {
        addListItem(itemInput.value);
        itemInput.value = '';
    } 
}
//load every event in the page
listItems.addEventListener('submit', addItem);

// add tasks
addListItem = (task) => {
    li.innerHTML = `<input type="checkbox"> <label> item 1 </label>`; ul.appendChild(li);
    document.querySelector('.to-do-list').style.display = 'block';
}



/*Alejandra work ends here */


/*Adrian works from here */


/*Adrian work ends here*/
            
