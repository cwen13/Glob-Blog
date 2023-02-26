// need to grab comment data and input into the db

const getComment = async (event) => {
  event.preventDefault();

  
  const comment = document.querySelector("#comment-box").value.trim();

  if (comment) {
    const resonse = await fetch("/api/blogpost/:id/comment", {
      method:"POST",
      body: JSON.stringify({comment, blogpost_id, user_id}),
      headers: {"Content-Type": "application/json"},
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

