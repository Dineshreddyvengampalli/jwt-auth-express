const mongoose = require('mongoose')

const schema = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    userName :{
        type : String,
        required : true
    }

})

module.exports = mongoose.model('User',schema)