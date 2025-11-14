const STORAGE_KEY = 'postsData'

let posts = [];

function getPosts() {
    const storedPosts = localStorage.getItem(STORAGE_KEY)
    posts = JSON.parse(storedPosts) || [];
}

function savePosts(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}

function showPosts(){
    const container = document.getElementById('postsContainer')
}