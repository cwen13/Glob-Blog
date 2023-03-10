// need to grab comment data and input into the db

const getComment = async (event) => {
  event.preventDefault();

  
  const comment = document.querySelector("#comment-box").value.trim();
  const URL = (window.location.href).split("/");
  const blogpost_id = URL[URL.length-1];

  const commentURL = (window.location.href).replace("/blogpost", "/api/blogpost")+"/comment";
  
  if (comment) {
    const resonse = await fetch(commentURL, {
      method:"POST",
      body: JSON.stringify({comment, blogpost_id}),
      headers: {"Content-Type": "application/json"},
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#comment-submit").addEventListener("click", getComment);

