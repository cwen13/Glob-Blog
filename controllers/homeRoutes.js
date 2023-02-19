const router = require("express").Router();
const { Comment, BlogPost, User } = require("../models");
const withAuth = require("../utils/auth");

// get the home page
router.get('/', withAuth, async(req,res) => {

});


//get the blogpost
router.get("/blogpost/:id", withAuth, async(req,res) => {

});

// get user profile
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
