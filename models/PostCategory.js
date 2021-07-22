const db = require('../database/DatabaseConection');
const { DataTypes } = require('sequelize');

const PostCategory = db.define(
    "PostCategory", {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "Category already exists"}
    }
  }
)

module.exports = PostCategory;