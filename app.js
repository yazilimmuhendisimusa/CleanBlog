const express = require('express');
const ejs= require('ejs');
const path =require('path');

const app = express();

//TEMPLATE ENGINE
app.set("view engine","ejs");

//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res)=>{
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/add_post', (req, res)=>{
    res.render('add_post')
})

// app.get('/',(req,res)=>{

//     const blog ={
//         id:1,
//         name:"Blog title",
//         description:"Blog Description"
//     }
//     res.send(blog)
// })

const port = 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});