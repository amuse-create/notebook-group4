/*Alejandra variables*/
const listItems = document.forms[0];
const itemInput = listItems.children[2];
const todoItems = [];
const ul = document.getElementById("list");
const tasks = document.getElementsByClassName("tasks");
/*Adrian variables*/
/*Global variables end here */
/* Goran Works from  here */

/* Goran work ends here*/

/*Alejandra works from here */

// mark a task as done

const markTaskAsDone = (event) => {
  const label = event.currentTarget.parentNode.children[1];
  label.classList.toggle("finishedTask");
};

// add tasks
const addListItem = (tasks) => {
  const li = document.createElement("li");
  li.classList.add("task");
  const taskTemplate = `
    <input type="checkbox" name="my-checkbox" id="opt-in">
    <label for="opt-in">${tasks}</label> 
  `;
  li.innerHTML = taskTemplate;
  ul.appendChild(li);
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  for (let checkbox of checkboxes) {
    checkbox.addEventListener("click", markTaskAsDone);
  }
  document.querySelector(".text-container").style.display = "block";
};

// submit data function
const addItem = (event) => {
  event.preventDefault();
  if (itemInput.value) {
    addListItem(itemInput.value);
    itemInput.value = "";
    todoItems.push(addItem);
  }
};

//load every event in the page
listItems.addEventListener("submit", addItem);
