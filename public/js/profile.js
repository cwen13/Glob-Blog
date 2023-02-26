const newBlogPost = async (event) => {
  event.preventDefault();
  console.log("NEW BLOG POST FUNCTOIN");

  const blogTitle = document.querySelector('#blogTitle').value.trim();
  const blogPost = document.querySelector('#blogPost').value.trim();
  const userId = document.querySelector("#user-id").dataset.id;
  let userEntry = [{title:blogTitle,
		    user_id: userId,
		    body: blogPost
		   }];

  console.log("going to post it");
  if (blogTitle && blogPost) {
    const response = await fetch("/api/blogposts", {
      method: 'POST',
      body: JSON.stringify(userEntry),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector("#newBlogPost")
  .addEventListener('click', newBlogPost);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);

console.log("Profile.js loaded");
