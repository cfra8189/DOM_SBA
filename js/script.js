const STORAGE_KEY = 'postsData'

let posts = [];

const editFormContainer = document.getElementById('editFormContainer');

function getPosts() {
    const storedPosts = localStorage.getItem(STORAGE_KEY)
    posts = JSON.parse(storedPosts) || [];
}

function savePosts() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}

function removePost(postIndex) {
    posts.splice(postIndex, 1)
    savePosts()
    showPosts()
}

function editPost(postIndex) {
    const postToEdit = posts[postIndex];

    document.getElementById('editPostIndex').value = postIndex;
    document.getElementById('editPostTitle').value = postToEdit.title;
    document.getElementById('editPostContent').value = postToEdit.content;

    document.getElementById('postForm').style.display = 'none';
    editFormContainer.style.display = 'block';

}

function saveEdit(event) {
    event.preventDefault();


    const index = document.getElementById('editPostIndex').value;
    const updatedTitle = document.getElementById('editPostTitle').value;
    const updatedContent = document.getElementById('editPostContent').value;

    posts[Number(index)].title = updatedTitle;
    posts[Number(index)].content = updatedContent;

    savePosts();
    showPosts();
    cancelEdit();
}

function cancelEdit() {
    document.getElementById('postForm').style.display = 'block';
    editFormContainer.style.display = 'none';
    document.getElementById('editPostForm').reset();
}

function showPosts() {
    const container = document.getElementById('postsContainer')
    container.innerHTML = '';

    posts.forEach((post, index) => {
        const postItem = document.createElement('div');
        postItem.classList.add('post');
        postItem.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        `;

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.classList.add("edit", "waves-effect","waves-light", "btn", "yellow","darken-3");
        editButton.addEventListener('click', () => editPost(index));
        

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove", "waves-effect", "waves-light", "btn", "red");
        removeButton.addEventListener('click', () => removePost(index));

        postItem.appendChild(removeButton);
        postItem.appendChild(editButton);

        container.appendChild(postItem);
    });

};

function formSubmit(event) {
    event.preventDefault();

    const titleInput = document.getElementById('postTitle')
    const contentInput = document.getElementById('postContent')

    const newPost = {
        id: Date.now(),
        title: titleInput.value,
        content: contentInput.value
    };

    posts.push(newPost);
    savePosts();
    showPosts();

    titleInput.value = '';
    contentInput.value = '';
}

document.getElementById('postForm').addEventListener('submit', formSubmit)

document.getElementById('editPostForm').addEventListener('submit', saveEdit);
document.getElementById('cancelEditButton').addEventListener('click', cancelEdit);

getPosts();
showPosts();
