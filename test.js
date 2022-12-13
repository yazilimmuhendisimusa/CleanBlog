const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Connect DB

mongoose.connect('mongodb://localhost/clean-blog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create a schema
//ODM Object Dokuman Mapper.
const BlogSchema = new Schema({
  postname: String,
  postmessage: String,
  postdateCreated: {
    type: Date,
    default: Date.now,
  },
});

//create a blog post

const Blog = mongoose.model('Blog', BlogSchema);

//Create a Blog Post
// Blog.create({
//   postname: 'Blog Title 3',
//   postmessage: 'Blog Description 3',
// });

//read a photo
// Blog.find({},(err,data)=>{
//     console.log(data);
// })

const id = '63905098603f43d081c22b8f';
Blog.findByIdAndUpdate(
  id,
  {
    postname: 'Blog Name 3 Updated',
    postmessage: 'Blog Description 3 Updated',
  },
  {
    new:true
  },
  (err, data) => {
    console.log(data);
  }
);
