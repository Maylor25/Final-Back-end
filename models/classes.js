const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const classesSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
}, {timestamps: true})

const Classes = mongoose.model('Classes', classesSchema) //Will look for a collection named Clases
module.exports = Classes