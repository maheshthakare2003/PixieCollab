const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    links:{
        type:Object,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }
},{ minimize: false })//for empty object

const Video = mongoose.model('Video',videoSchema)

module.exports = Video;