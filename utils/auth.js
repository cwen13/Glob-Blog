const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.loggedIn) {
    console.log("Not logged in!");

    res.redirect('/login');
  } else {
    console.log("logged in");
    next();
  }
};

module.exports = withAuth;
