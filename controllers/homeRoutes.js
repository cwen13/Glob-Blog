const router = require("express").Router();
const { Comment, BlogPost, User } = require("./../models");
const withAuth = require("./../utils/auth");

// get the home page
router.get('/',  async(req,res) => {
  try{
    const dbBlogPostData = await BlogPost.findAll({
      include: [{ model: User}]
    });
    const blogPosts = dbBlogPostData.map((blogpost) =>
      blogpost.get({plain: true})
    );
//    console.log(blogPosts);
    res.render("homepage",{
       blogPosts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get the blogpost
// need to get comments
router.get("/blogpost/:id",  async(req,res) => {
  try{
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [{model: User}]
    });
    const blogPost = blogPostData.get({plain:true});
    res.render("blogpost", {
      blogPost
    });
  } catch (err) {
    res.status(500).json(err);
  }   
});

// get user information
// need to check if this is the correct user
router.get("/user/:id", withAuth, async(req,res) => {
  try{
    const userData = await User.findByPk(req.params.id, {
      include: [{model: User, BlogPost, Comment}]
    });
    const user = userData.get({plain:true});
    res.render("profile", {
      user
    });
  } catch (err) {
    res.status(500).json(err);
  }   
  
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
