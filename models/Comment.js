const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init (
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      allowNull: false,
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
	unique: true
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
