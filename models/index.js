const BlogPost = require("./BlogPost");
const User = require("./User");
const Comment = require("./Comment");


BlogPost.hasMany(Comment, {
  foreignKey: "post_id"
});

Comment.belongsTo(BlogPost, {
  foreignKey: "post_id"
});

User.hasMany(BlogPost, {
  foreignKey: "author"
});

BlogPost.belongsTo(User, {
  foreginnKey: "author"
});

module.exports = {
  BlogPost,
  User,
  Comment
};
