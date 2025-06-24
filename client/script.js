
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts => renderPosts(posts));
});

function renderPosts(posts) {
  const container = document.getElementById('blog-posts');
  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <h2>${post.title}</h2>
      <small>By ${post.author} on ${post.date}</small>
      <p>${post.content}</p>
    `;
    container.appendChild(div);
  });
}
