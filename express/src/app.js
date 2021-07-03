const express = require('express');
const app =express();
const path = require('path');
const hbs= require('hbs');
const prot= 5000;


const staticPath= path.join(__dirname,'../public');
const templatePath= path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname, '../templates/partials/');

// set view engine
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

// bulding middle ware
app.use(express.static(staticPath));




// web and template engine routeing start here:-

app.get('/', (req ,res)=>{
    res.render('index')

});

app.get('/about', (req ,res)=>{
    res.render('about')

});
app.get('/contact', (req ,res)=>{
    res.render('contact')

});app.get('/skill', (req ,res)=>{
    res.render('skill')

});
app.get('/work', (req ,res)=>{
    res.render('work')

});
app.get('*', (req ,res)=>{
    res.render('nopage')

});




// server listen start here
app.listen(prot,()=>{
    `listen the port at${prot}`
})