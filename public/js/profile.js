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
    const response = await fetch("/api/blogPost", {
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
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    console.log(`/api/blogpost/${id}`);
    const response = await fetch(`/api/blogpost/${id}`, {
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
  .addEventListener("click", newBlogPost);

document
  .querySelector("#deletePost")
  .addEventListener("click", delButtonHandler);

document
  .querySelector("#editPost")
  .addEventListener("click", editPostHandler);


console.log("Profile.js loaded");
