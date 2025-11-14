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

function removePost(){
    posts.splice(postIndex, 1)
    savePosts()
    showPosts()
}

function editPost(postIndex) {
    const postToEdit = posts[postIndex];

}

function showPosts() {
    const container = document.getElementById('postsContainer')
    container.innerHTML = '';

    posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.classList.add('post');
        postItem.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <button class ="edit">Edit</button>
        <button class ="remove">Remove</button>
        `;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add = "remove";
        removeButton.addEventListener('click', removePost(index));

        postItem.appendChild(removeButton);

        container.appendChild(postItem);
    });

};

function formSubmit(event){
    event.preventDefault();

    const titleInput = document.getElementById('postTitle')
    const contentInput = document.getElementById('postContent')

    const newPost = {
        id: Date.now()
        title: titleInput.value,
        content: contentInput.value
    };

    posts.push(newPost);
    savePosts();
    showPosts();

   
}

 document.getElementById('postForm').addEventListener('submit', formSubmit)
 getPosts();
 showPosts();
