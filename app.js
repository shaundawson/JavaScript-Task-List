// Define UI variables 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Call funtion to load all event listeners
loadEventListners();

// Load all event listners
function loadEventListners(){
  // Add task event
  form.addEventListener('submit', addTask);  
  // Remove task event
  taskList.addEventListener('click', removeTask);
}

// Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a Task');
  }

  // Create li lelement
  const li = document.createElement('li');
  // Add a class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add Class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);
  
  // Append li to ul
  taskList.appendChild(li);

  // Clear Input
  taskInput.value = '';
  e.preventDefault();
}

// Remove tasks
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log(e.target);
    if(confirm('Are you sure')){ 
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault(); 
}
}