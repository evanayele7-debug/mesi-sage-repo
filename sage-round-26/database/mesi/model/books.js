const mongoose = require('mongoose')

const bookschema = new mongoose.Schema ({
    title: {type: String, required:true},
    author:{type: String, required:true},
    year : {type: Number, min:0,max:3030}
})