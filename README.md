I'm working on the logic first. I rather it be functional than pretty and useless.

I used code from the Module as the foundation.



const todoList = document.getElementById('todo-list');
const addTaskButton = document.getElementById('add-task');


t.addEventListener('click', (e) => {
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

- created function showPosts() to display posts and create new html for new posts that will be displayed.

- added two inputs for the title and content on the html



- I had to built the form by adding labels, textfield, and submission button

- Created the acutal display area on the screen with div id="postsContainer" and added class="form-container" to the div that's holding the form.

- created the function to handle form submission that stores the local variables and creates a new object containing the title and content values

Now the posts can be pushed to the posts array, then will get saved in the local storage and will be displayed.

- add an event listener to listen for the form submission and getPosts() and showPosts() to load and display any existing posts