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
    blogpost_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refernces: {
	model: "blogPost",
	key: "id",
	unique: false
      }
    },
    user_id:{
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
