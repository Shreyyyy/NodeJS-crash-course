const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

//Register View Engine
app.set('view engine','ejs');

app.get('/', (req,res) => {
    const blogs = [
    {title: 'Yoshi finds eggs', description: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', description: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', description: 'Lorem ipsum dolor sit amet consectetur'},
  ];
    res.render('index',{title: 'Home' , blogs});
});

app.get('/about', (req,res) => {
    res.render('about',{title: 'About'});
});

app.get('/blogs/create',(req,res) => {
    res.render('create',{title: 'Create Blog'});
})

//redirects
app.get('/about-us', (req,res) => {
    res.redirect('/about')
})


app.use((req,res) => {
    res.status(404).render('404',{title:'404'});
});

//listen for requests
app.listen(3000);