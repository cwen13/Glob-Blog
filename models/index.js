const BlogPost = require("./BlogPost");
const User = require("./User");
const Comment = require("./Comment");

// blogposts has many comments
BlogPost.hasMany(Comment, {
  foreignKey: "blogpost_id"
});

// comment belong to one blogpost
Comment.belongsTo(BlogPost, {
  foreignKey: "blogpost_id"
});

// Comment has one author
Comment.belongsTo(User, {
  foreignKey: "user_id"
});

// author has many comments
User.hasMany(Comment, {
  foreignKey: "user_id"
});

// user has many blogposts
User.hasMany(BlogPost, {
  foreignKey: "user_id",
});

// blogpost has one author
BlogPost.belongsTo(User, {
  foreginKey: "user_id"
});

module.exports = {
  BlogPost,
  User,
  Comment
};
