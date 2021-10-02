const mongoose = require("mongoose")
const Schema = mongoose.Schema

const showSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    genre: {
        type: String,
        required: true 
    }

})
module.exports = mongoose.model("Show", showSchema)