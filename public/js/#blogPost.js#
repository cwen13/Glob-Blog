// need to grab comment data and input into the db

const getComment = async (event) => {
  event.preventDefault();

  
  const comment = document.querySelector("#comment-box").value.trim();
  const URL = (window.location.href).split("/");
  const blogpost_id = URL[URL.length-1];

  const commentURL = (window.location.href).replace("/blogpost", "/api/blogpost")+"/comment";
  console.log(commentURL);
  
  if (comment) {
    try { 
      const response = await fetch(commentURL, {
	method:"POST",
	body: JSON.stringify({comment}),
	headers: {"Content-Type": "application/json"},
      });
      
      console.log("Comment");
      console.log(response);
      document.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
};

const editPost = async (event) => {

}

document.querySelector("#comment-submit").addEventListener("click", getComment);

