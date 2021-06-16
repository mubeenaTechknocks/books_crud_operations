const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
 bookname:{
    type: String,
    required: true
},
    author: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
}, 
// photo: {
//     type: String,
//     required: true
// },
date: {
    type: Date,
    default: Date.now
}

 
})



module.exports = mongoose.model('Posts' , PostSchema);