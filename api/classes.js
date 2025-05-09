const Classes = require("../models/classes");
const router = require("express").Router();

//Gets a list of classes
router.get("/", async function(req, res) {
    try {
       const classes = await Classes.find();
       res.json(classes);
    }
    catch (ex) {
       res.status(400).send(ex.message);
    }
 });


//Add a new class
router.post("/", async function(req, res) {
    try {
       const classes = new Classes(req.body);
       await classes.save();
       res.status(201).json(classes);
    }
    catch (ex) {
       res.status(400).send(ex.message);
    }
 });
 
module.exports = router;