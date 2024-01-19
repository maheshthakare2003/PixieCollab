const mongoose = require('mongoose');

const trialSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const trial = mongoose.model('trial',trialSchema)

module.exports = trial;