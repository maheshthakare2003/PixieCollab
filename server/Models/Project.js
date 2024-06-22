const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = mongoose.Schema({
    projectNamr:{
        type: String,
        required: true
    },
    projectId: {
        type: String,
        required: true
    },
    editorUsername:{
        type: String,
        required: true
    },
    channelUsername:{
        type: String,
        required: true
    }
},{ minimize: false })//for empty object

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;