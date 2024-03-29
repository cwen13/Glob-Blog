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

// create a new blog post
router.post('/', withAuth, async (req,res) => {
  try {
    const blogPost = await BlogPost.create(req.body);    
    res.status(200).json(blogPost);
  } catch (err) {
    res.status(400).json(err);
  }

});


// edit a post's data
router.put("/:id", withAuth, async (req,res) => {
  try{
    const blogPostData = req.body.body
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }    
});



// delete a blog post
router.delete("/:id", withAuth, async (req,res) => {
  try{
    const blogPost = await BlogPost.destroy({
      where: {
	id: req.params.id
      }
    });
    res.status(200).json(blogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//comment on blog post
router.post("/:id/comment", withAuth, async (req,res) => {
  
  try {
    const blogComment = await Comment.create({
      blogpost_id: req.params.id,
      ...req.body,
      user_id: req.session.user_id,
    })
    
    res.status(200).json(blogComment);
  } catch (err) {
    res.status(400).json(err);
  }
  
});

router.put("/:id/edit" ,withAuth, async (req,res) => {
  try {
    console.log(req.body.body);
    const blogEdit = await BlogPost.update(
      {body: req.body.body},
      {where: {
	id: req.params.id
      }
    })          
   
    res.status(200).json(blogEdit);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
 
