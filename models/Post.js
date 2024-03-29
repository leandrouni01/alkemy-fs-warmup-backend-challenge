const db = require('../database/DatabaseConection');
const { DataTypes } = require('sequelize');
const PostCategory = require('./PostCategory');

const Post = db.define(
  "Post",{
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title:{
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING
    }
  }
)

Post.belongsTo(PostCategory);

module.exports = Post;