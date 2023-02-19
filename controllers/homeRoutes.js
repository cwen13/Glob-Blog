const router = require("express").Router();
const { Comment, BlogPost, User } = require("../models");
const {Op} = require("sequelize");
const withAuth = require("../utils/auth");

// get the home page
router.get('/',  async(req,res) => {
  try{
    const dbBlogPostData = await BlogPost.findAll({
      include: [
	{ model: User,}
      ]
    });
    console.log(dbBlogPostData);
    const blogPosts = dbBlogPostData.map((blogpost) =>
      blogpost.get({plain: true})
    );
    res.render("homepage",{
      blogPosts
    });
  } catch (err) {
    res.status(500).json({message:"Faild to laod"});
  }
});

// get user profile
router.get("/profile", withAuth, async (req, res) => {

});

//get the blogpost
router.get("/blogpost/:id", withAuth, async(req,res) => {

});

// get user information
router.get("/user/:id", withAuth, async(req,res) => {

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
