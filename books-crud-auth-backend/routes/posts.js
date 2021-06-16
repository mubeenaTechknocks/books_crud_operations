const express = require('express');

const router = express.Router();
const verify = require('./verifyTocken');
const Post = require('../models/Post');
const multer = require('multer');

const User = require('../models/User');




//get back all the posts
router.get('/', async (req, res) => {
     try{
        const posts = await Post.find();
        res.json(posts);
     }catch(err){
         res.json({message:err});
     }
});

//submits a post
// router.post('/', async (req,res) =>{
//     console.log(req.file);
//     console.log(req.body);
//     const posts = new Post({
//          bookname: req.body.bookname,
//          author: req.body.author,
//          description: req.body.description


         router.post('/', async (req,res,next) =>{
            console.log(req.file);
            // console.log(req.body);
            const posts = new Post({
                 bookname: req.body.bookname,
                 author: req.body.author,
                 description: req.body.description,
                 
        

    });
     try{

    const savedPost = await posts.save();
     return res.json(savedPost);
     }
     catch (err) {
         res.json({ message: err });
     }

     posts
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created post successfully",
        createdPost: {
            bookname: result.bookname,
            author: result.author,
            description: result.description,
            _id: result._id,
            request: {
                type: 'GET',
                url: "http://127.0.0.1:4000/posts/" + result._id
            }
        }
      });
    })

});

//get back a specific post
router.get('/:postId', async (req, res) => {

    try{
       const post = await Post.findById(req.params.postId);
          res.json(post);
         }
         catch (err) {
             res.json({ message: err });
         }   
});

//DLT A SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try{
       const removedPost = await Post.remove({_id: req.params.postId });
       res.json(removedPost);
         }
         catch (err) {
             res.json({ message: err });
         }   
});

//update a post
router.patch('/:postId', async (req, res) => {
    try{
       const updatedPost = await Post.updateOne(
           {_id: req.params.postId }, 
           {$set: { bookname:req.body.bookname}
        });
       res.json(updatedPost);
         }
         catch (err) {
             res.json({ message: err });
         }   
});

module.exports = router;