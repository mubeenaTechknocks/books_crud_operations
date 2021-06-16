// const express = require('express');
// const { Mongoose } = require('mongoose');
// const router = require('express').Router();
// const multer = require('multer');
// const Image = require('../model/Image');
// const bodyParser = require('body-parser');
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, './uploads/');
//     },
//     filename: function(req, file, cb) {
//       cb(null,  file.originalname);
//     }
//   });
//     const upload = multer({storage: storage,});
//   router.get('/',   (req, res, next) => {
//     res.send(req.user);
//   });

//   router.post('/', upload.single('postImage'), (req, res,next) => {
//         console.log(req.file);
//     const images = new Image({
//         //_id: new Mongoose.Types.ObjectId(),
//         Name: req.body.Name,
//        postImage: req.file.path 
//     });
    
// images
//     .save()
//     .then(result => {
//       console.log(result);
//         res.status(201).json({
//         message: "Created post successfully",
//         createdImage: {
//             Name: result.Name,
//             postImage:result.postImage,
//             _id: result._id,
//             request: {
//                 type: 'GET',
//                 url: "http://127.0.0.1:4000/images/" + result._id
//             }
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
    
//     });
//   })
//     module.exports = router;