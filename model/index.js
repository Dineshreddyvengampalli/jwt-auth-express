const mongoose = require('mongoose')

const schema = mongoose.Schema({
    userName :{
        type : String,
        required : true
    },
    topic :{
        type : String,
        required : true
    },
    likes : {
        type : Number
    }
})

module.exports = mongoose.model('Post',schema)