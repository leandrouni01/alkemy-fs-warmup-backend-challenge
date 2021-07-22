const db = require('../database/DatabaseConection');

const PostCategory = db.define(
    "PostCategory", {
    categoryName: {
      type: DataTypes.STRING
    }
  }
)

module.exports = PostCategory;