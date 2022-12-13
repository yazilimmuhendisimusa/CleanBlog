const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a schema
const BlogSchema = new Schema({
    postname:String,
    postmessage:String,
    dateCreated:{
        type:Date,
        default:Date.now,
    },
});

const Blog = mongoose.model('Blog',BlogSchema);

module.exports = Blog;

// Blog.create({
//     title:'Blog Title 1',
//     description:'Blog Description 1',
// });


