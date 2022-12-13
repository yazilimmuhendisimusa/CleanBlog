const express = require('express');
const mongoose =require('mongoose');
const ejs = require('ejs');
const path =require('path');
const Blog =require('./models/blog');

const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/clean-blog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//TEMPLATE ENGINE
app.set("view engine","ejs");

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//ROUTES
app.get('/', async(req, res)=>{
    const blog = await Blog.find({})
    res.render('index',{
        blog
    });
});

app.get('/about', (req, res)=>{
    res.render('about')
});

app.get('/add_post', (req, res)=>{
    res.render('add_post')
});

app.post('/blogs', async(req,res) => {
   // console.log(req.body);
     await Blog.create(req.body);
     res.redirect('/')
});



const port = 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});