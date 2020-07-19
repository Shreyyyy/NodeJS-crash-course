const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

//Register View Engine
app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.render('index')
});

app.get('/about', (req,res) => {
    res.render('about')
});

//redirects
app.get('/about-us', (req,res) => {
    res.redirect('/about')
})

app.use((req,res) => {
    res.status(404).render('404');
});

//listen for requests
app.listen(3000);