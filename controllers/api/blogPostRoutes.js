const router = require("express").Router();
const { Comment, BlogPost, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get data from the blog post
router.get('/', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [{model: User}]
    });
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit a post's data
router.put("/:id", withAuth, async (req,res) => {
  try{

  } catch (err) {
    res.status(500).json(err);
  }    
});


// create a new blog post
router.post('/', withAuth, async (req,res) => {
  try {
    console.log(req.body);
//    console.log(req);
    const blogPost = await BlogPost.Create(
      req.body[0]
    );
    res.status(200).console.log(blogPost);
  } catch (err) {
    res.status(400).json(err);
  }

});

// delete a blog post
router.delete("/:id", withAuth, async (req,res) => {


});

//comment on blog post
router.post("/:id/comment", withAuth, async (req,res) => {

});

module.exports = router;
 
