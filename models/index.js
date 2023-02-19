const BlogPost = require("./BlogPost");
const User = require("./User");
const Comment = require("./Comment");


BlogPost.hasMany(Comment, {
  foreignKey: "blog_post_id"
});

Comment.belongsTo(BlogPost, {
  foreignKey: "blog_post_id"
});

User.hasMany(BlogPost, {
  foreignKey: "author_id"
});

BlogPost.belongsTo(User, {
  foreginnKey: "author_id"
});

module.exports = {
  BlogPost,
  User,
  Comment
};
