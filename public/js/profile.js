const newBlogPost = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector('#blogTitle').value.trim();
  const blogPost = document.querySelector('#blogPost').value.trim();
  const userId = document.querySelector("#user-id").dataset.id;
  let userEntry = {title:blogTitle,
		    user_id: userId,
		    body: blogPost
		   };
  if (blogTitle && blogPost) {
    const response = await fetch("/api/blogPosts", {
      method: 'POST',
      body: JSON.stringify(userEntry),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog post!');
    }
  }
};

const delButtonHandler = async (event) => {
  event.preventDefault();
  console.log("Pushing the button");
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    console.log(`/api/blogposts/${id}`);
    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blogpost');
    }
  }
};

document
  .querySelector("#newBlogPost")
  .addEventListener("submit", newBlogPost);

document
  .querySelector("#deletePost")
  .addEventListener("click", delButtonHandler);

console.log("Profile.js loaded");
