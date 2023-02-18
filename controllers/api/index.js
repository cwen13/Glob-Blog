const router = require("express").Router();

const apiRoutes = require("./api");
const userRoutes = require("./usersRoutes");
const blogPostRoutes = require("./blogPostRoutes");

router.use("/users", userRoutes );
router.use("/blogPost", blogPostRoutes);

module.exports = router;
