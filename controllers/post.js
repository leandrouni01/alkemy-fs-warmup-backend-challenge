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
  Post.findByPk(req.params.id,{
    raw: true,
    include: [
      {model: PostCategory, required: true}
    ]
  })
  .then((data)=> {
    if(data === null) return res.status(404).send("Post not found");
    return res.status(200).send(data);
  })
  .catch((err)=> {
    return res.status(500).send(err.message);
  })
}

exports.create = (req, res) => {
  Post.create(req.body,{fields: ['title', 'content', 'image', "PostCategoryId"]})
  .then((post) => {
    return res.status(200).send({id: post.id});
  })
  .catch((err) => {
    return res.status(500).send(err.message);
  })
}

exports.update = (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    return res.status(200).send("Post updated");
  })
  .catch((err) => {
    return res.status(500).send(err.message);
  })
}

exports.remove = (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    return res.status(200).send("Post deleted");
  })
  .catch((err) => {
    return res.status(500).send(err.message);
  })
}
