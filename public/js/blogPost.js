// need to grab comment data and input into the db


const getComment = async (event) => {
  event.preventDefault();
 
  const comment = document.querySelector("#comment-box").value.trim();
  const URL = (window.location.href).split("/");
  const blogpost_id = URL[URL.length-1];

  const commentURL = (window.location.href).replace("/blogpost", "/api/blogpost")+"/comment";
  
  if (comment) {
    try { 
      const response = await fetch(commentURL, {
	method:"POST",
	body: JSON.stringify({comment}),
	headers: {"Content-Type": "application/json"},
      });
      document.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
};

const getEditHandler= async (event) => {

  let editURL = (window.location.href).replace("/blogpost", "/api/blogpost");
  let body = document.querySelector("#blogPost").value.trim();
  
  try {
    const blogpostEdit = await fetch(editURL, {
      method:"PUT",
      body:JSON.stringify({body}),
      headers: {"Content-Type": "application/json"}
    });
    let blogpostURL = editURL.replace("/api/blogpost","/blogpost").replace("/edit","").trim();
    document.location.replace(blogpostURL);
    
  } catch (err) {
    console.log(err);
  }
  
};


document.querySelector("#comment-submit").addEventListener("click", getComment);
if (document.querySelector("#edit-submit")) {
  document.querySelector("#edit-submit").addEventListener("click", getEditHandler);
}
