const sequelize = require("../config/connection");
const { User, BlogPost, Comment } = require("../models");

const userData = require("./userData.json");
const blogPostData = require("./blogPostData.json");
const commentData = require("./commentData.json");

console.log(typeof BlogPost);
console.log(typeof User);

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPosts of blogPostData) {
    await BlogPost.create({
      ...blogPosts,
      author: users[Math.floor(Math.random() * users.length)].id,
      date_created: Date.now()
    });
  }

  for (const comments of commentData) {
    await Comment.create({
      ...comments,
    });
  }

  process.exit(0);
};

seedDatabase();
