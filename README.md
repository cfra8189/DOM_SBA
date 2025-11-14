I'm working on the logic first. I rather it be functional than pretty and useless.

I used code from the Module as the foundation.



const todoList = document.getElementById('todo-list');
const addTaskButton = document.getElementById('add-task');


todoList.addEventListener('click', (e) => {
if (e.target.classList.contains('delete')) {
e.target.parentElement.remove(); // Remove the task
}
});


addTaskButton.addEventListener('click', () => {
const newTask = document.createElement('li');
newTask.innerHTML = 'New Task <button class="delete">Delete</button>';
todoList.appendChild(newTask);
});

- Set up the localStorage to the posts and global variable to hold the array of post objects.

- added two functions to get and save the posts.
- added || [] after JSON.parse(storedPosts) to return an empty array if nothing is stored to prevent errors.

- add container to HTML to display posts on screen