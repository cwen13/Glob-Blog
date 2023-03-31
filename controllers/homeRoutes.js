const router = require("express").Router();
const { User, Comment, BlogPost } = require("./../models");
const withAuth = require("./../utils/auth");

// get the home page
router.get('/',  async(req,res) => {
  try{
    const dbBlogPostData = await BlogPost.findAll({
      order:[["date_created", "DESC"]],
      include: [{ model: User}]
    });
    const blogPosts = dbBlogPostData.map((blogpost) =>
      blogpost.get({plain: true})
    );
    
    res.render("homepage",{
       blogPosts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




// get user information
// need to check if this is the correct user
router.get("/profile", withAuth, async(req,res) => {
  try{
    const userData = await User.findByPk(req.session.user_id, {
      include: [{model: BlogPost}]
    });

    const user = userData.get({plain:true});
    const loggedIn = req.session.loggedIn;
    res.render("profile", {
      user,
      loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }   
  
});

//get the blogpost
router.get("/blogpost/:id", withAuth, async(req,res) => {

  try{
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [{model: User, attributes: ["id","name","email"]}, {model: Comment,include: [{model: User}]}],
    });
    const blogPost = blogPostData.get({plain:true});

    const loggedIn = req.session.loggedIn;
    let edit = false;
    
    res.render("blogpost", {
      loggedIn,
      edit,
      ...blogPost,
    });
  } catch (err) {
    res.status(500).json(err);
  }   
});

//get the blogpost
router.get("/blogpost/:id/edit", withAuth, async(req,res) => {
  try{
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [{model: User, attributes: ["id","name","email"]}, {model: Comment,include: [{model: User}]}],
    });
    const blogPost = blogPostData.get({plain:true});
    let edit  = true;
    const loggedIn = req.session.loggedIn;
    
    res.render("blogpost", {
      loggedIn,
      edit,
      ...blogPost,
    });
  } catch (err) {
    res.status(500).json(err);
  }   
});




// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
