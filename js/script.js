const STORAGE_KEY = 'postsData'

let posts = [];

function getPosts() {
    const storedPosts = localStorage.getItem(STORAGE_KEY)
    posts = JSON.parse(storedPosts) || [];
}

function savePosts() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
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

        container.appendChild(postItem);
    });

};

function formSubmit(event){
    event.preventDefault();

    const titleInput = document.getElementById('postTitle')
    const contentInput = document.getElementById('postContent')

    const newPost = {
        title: titleInput.value,
        content: contentInput.value
    };
}