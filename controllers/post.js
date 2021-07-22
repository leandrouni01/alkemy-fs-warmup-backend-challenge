const Post = require('../models/Post');
const PostCategory = require('../models/PostCategory');

exports.findAll = (req, res) => {
  Post.findAll({
    attributes: {
      exclude:["content"]
    },
    include: [
      {model: PostCategory, required: true}
    ]
  })
  .then((data)=> {
    return res.status(200).send(data);
  })
  .catch((err)=> {
    return res.status(500).send(err.message)
  });
}

exports.findOne = (req, res) => {

}

exports.create = (req, res) => {

}

exports.update = (req, res) => {

}

exports.remove = (req, res) => {

}
