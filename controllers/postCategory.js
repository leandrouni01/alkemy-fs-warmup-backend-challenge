const PostCategory = require('../models/PostCategory');

exports.findAll = (req,res) => {
  PostCategory.findAll({raw:true})
  .then((data)=> {
    return res.status(200).send(data);
  })
  .catch((err)=> {
    return res.status(500).send(err.message);
  })  
}

exports.findOne = (req,res) => {
  PostCategory.findByPk(req.params.id)
  .then((data)=> {
    if(data === null) return res.status(404).send("Category not found");
    return res.status(200).send(data);
  })
  .catch((err)=> {
    return res.status(500).send(err.message);
  })
}

exports.create = (req,res) => {
  PostCategory.create(req.body,{fields: ['categoryName']})
  .then((postCategory) => {
    return res.status(200).send({id: postCategory.id});
  })
  .catch((err) => {
    return res.status(500).send(err.message);
  })
}

exports.update = (req,res) => {

}

exports.remove = (req,res) => {

}