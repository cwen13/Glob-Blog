const router = require("express").Router();
const { Project } = require("../../models");
const withAuth = require("../../utils/auth");

// get data from the blog post
router.get('/', withAuth, async (req, res) => {


});

// edit a post's data
router.put("/:id", withAuth, async (req,res) => {


});


// create a new blog post
router.post('/', withAuth, async (req,res) => {


});

// delete a blog post
router.delete("/:id", withAuth async (req,res) => {


});

module.exports = router;
