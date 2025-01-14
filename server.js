const express = require('express')
const app = require("liquid-express-views")(express());
const port = 3000;
const drinks = require('./models/drinks.js')

app.listen(3000,()=>{
    console.log("Welcome to the Gitpub App!")
})


// app.get('/drinks/',(req,res) => {
//     res.send(drinks)
// })



app.get('/drinks',(req,res) => {
    res.render('index',{
        alldrinks: drinks
    })
})

app.get('/drinks/:id',(req,res) => {
    res.render("show",{
        drink: drinks[req.params.id]
})
    })
//Linking index.liquid to show.liquid   already did.