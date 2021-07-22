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

}

exports.create = (req,res) => {

}

exports.update = (req,res) => {

}

exports.remove = (req,res) => {

}