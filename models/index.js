const BlogPost = require("./BlogPost");
const User = require("./User");
const Comment = require("./Comment");

// blogposts has many comments
BlogPost.hasMany(Comment, {
  foreignKey: "blog_post_id"
});

// comment belong to one blogpost
Comment.belongsTo(BlogPost, {
  foreignKey: "blog_post_id"
});

// Comment has one author
Comment.belongsTo(User, {
  foreignKey: "comment_author_id"
});

// author has many comments
User.hasMany(Comment, {
  foreignKey: "comment_author_id"
});

// user has many blogposts
User.hasMany(BlogPost, {
  foreignKey: "author_id",
});

// blogpost has one author
BlogPost.belongsTo(User, {
  foreginKey: "author_id"
});

module.exports = {
  BlogPost,
  User,
  Comment
};
