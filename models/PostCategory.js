const db = require('../database/DatabaseConection');
const { DataTypes } = require('sequelize');

const PostCategory = db.define(
    "PostCategory", {
    categoryName: {
      type: DataTypes.STRING
    }
  }
)

module.exports = PostCategory;