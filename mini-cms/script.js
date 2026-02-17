function getPosts() {
  return JSON.parse(localStorage.getItem("posts")) || [];
}

function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function addPost() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  let posts = getPosts();

  let newPost = {
    id: Date.now(),
    title: title,
    content: content
  };

  posts.push(newPost);
  savePosts(posts);

  location.reload();
}

function deletePost(id) {
  let posts = getPosts();
  posts = posts.filter(post => post.id !== id);
  savePosts(posts);
  location.reload();
}

function displayPosts() {
  let posts = getPosts();

  if (document.getElementById("posts")) {
    let container = document.getElementById("posts");
    posts.forEach(post => {
      container.innerHTML += `
        <h4>${post.title}</h4>
        <p>${post.content}</p>
        <hr>
      `;
    });
  }

  if (document.getElementById("adminPosts")) {
    let container = document.getElementById("adminPosts");
    posts.forEach(post => {
      container.innerHTML += `
        <h4>${post.title}</h4>
        <p>${post.content}</p>
        <button onclick="deletePost(${post.id})">Delete</button>
        <hr>
      `;
    });
  }
}

displayPosts();