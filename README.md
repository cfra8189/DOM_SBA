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


- added an id key to the newPost object: id: Date.now()
    
- add remove button functionality: removePost()
    - using postIndex to identify the position
    - .splice() is like a pair of scissors on the array

- add the remove button functionality to the posts.forEach() block to create a new button that has the remove button functionality

I Googled how to edit a post:

<h2>Edit Post</h2>
<!-- The edit form starts hidden via CSS or JS, here we make it visible for setup -->
<div id="editFormContainer" style="display: none;">
    <form id="editPostForm">
        <input type="hidden" id="editPostIndex"> <!-- Hidden field to store the index of the post being edited -->
        <label for="editPostTitle">Title:</label>
        <input id="editPostTitle" type="text" required>
        <label for="editPostContent">Content:</label>
        <textarea id="editPostContent" rows="4"></textarea>
        <button type="submit">Save Changes</button>
        <button type="button" id="cancelEditButton">Cancel Edit</button>
    </form>
</div>

</div>

- Replicate the form as the edit form element to HTML

- add edit form container variable to global 

- Create function editPost(postIndex) to handle the start of an edit action and find the post object to edit based on its index

- Add post values to variables 

- Need function saveEdit(event) to save edits and the local variables to update the original post in the array | posts[index] will target the exact post in the array

- Hid the main form to show the edit form