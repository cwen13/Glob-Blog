const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");


Post.hasMany(Comment, {
  foreignKey: "post_id"
});

Comment.belongsTo(Post, {
  foreignKey: "post_id"
});

User.hasMany(Post, {
  foreignKey: "author"
});
