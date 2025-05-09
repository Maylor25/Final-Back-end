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

//Create - POST
//Read - GET
//Update - PUT
//Delete - DELETE

mongoose.connect(uri)
    .then(app.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}`)
    }))
    .catch((err) => console.log(err)) 

// READ/GET
app.use(express.json());


app.get("/classes", async function(req, res) {
    try {
       const classes = await Classes.find();
       res.json(classes);
    }
    catch (ex) {
       res.status(400).send(ex.message);
    }
 });

 //GET by specific ID

 //NOT WORKING RIGHT NOW

 app.get("/classes/:id", async function(req, res) {
    try {      
       // Use the ID in the URL path to find the class
       const Classes = await Classes.findById(req.params.id);
       res.json(classes);
    }
    catch (ex) {
       res.status(400).send(ex.message);
    }
 }); 


 //CREATE/POST
 app.post("/classes", async function(req, res) {
    try {
       const classes = new Classes(req.body);
       await classes.save();
       res.status(201).json(classes);
    }
    catch (ex) {
       res.status(400).send(ex.message);
    }
 });


 
//Update/PUT
app.put("/classes/:id", async function(req, res) {
    // Class to update sent in body of request
    const classes = req.body;
 
    try {
       // Replace existing class fields with updated class
       const result = await Classes.updateOne({ _id: req.params.id }, classes);
       if (result.matchedCount === 0) {
          res.sendStatus(404);
       } 
       else {
          res.sendStatus(204);
       }
    }
    catch (ex) {
       res.status(400).send(ex.message);
    }
 });

 //Delete/DELETE
 app.delete("/classes/:id", async function(req, res) {
    try {
       const result = await Classes.deleteOne({ _id: req.params.id });
       if (result.deletedCount === 0) {
          res.sendStatus(404);
       } 
       else {
          res.sendStatus(204);
       }
    }
    catch (ex) {
       res.status(400).send(ex.message);
    }
 });

 //updated