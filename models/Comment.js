const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init (
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull:false
    },
    blog_post_id: {
      type: DataTypes.INTEGER,
      refernces: {
	model: "blogPost",
	key: "id",
	unique: false
      }
    },
    comment_author_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      reference: {
	model: "user",
	key: "id",
	unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
