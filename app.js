const express = require('express')
const mongoose = require('mongoose')
const Classes = require('./models/classes') 
const hostname = 'localhost' 
const port = 3000

const app = express();
const uri = "mongodb+srv://cferguson25:Password@cluster0.glue8uc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// This is testing stuff:
/*
mongoose.connect(uri)
    .then(app.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}`)
    }))
    .catch((err) => console.log(err)) 


app.get('/add-class', (req,res) => {
    const classes = new Classes({
        name: 'SDEV255', 
    })
    classes.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})
*/

// CORY LOOK AT 6.4 FOR THIS 