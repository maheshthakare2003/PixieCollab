const Project = require("../Models/Project")

const secretFunction = async(editor, channel) => {
    let projectId = editor+channel;
    const projectArray = await Project.find({$and:[{editorUsername:editor,channelUsername:channel}]});
    console.log(projectArray,"projectArray");
    projectId += projectArray.length;
    return projectId;
}


const addProject = async(req,res) => {
    console.log("Hello World")
    try{
        const {editor,channel} = req.body;
        let projectId = await secretFunction(editor,channel);
        const project = new Project({editorUsername:editor,channelUsername:channel,projectId});
        await project.save()
        res.status(200).json({data:project,ok:true})
    }
    catch(err){
        console.log(err);
        res.status(400).json({data:"Failed to Load",ok:false})
    }
};

const getProjects = async(req, res) => {
    const {editor, channel} = req.body;
    console.log(editor, channel);
    try{
        if(editor){
            const projects = await Project.find({editorUsername:editor});
            res.status(200).json({data:projects, ok:true})
        }
        else{
            const projects = await Project.find({channelUsername:channel});
            res.status(200).json({data:projects, ok:true})
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({data:"Failed to Load", ok:false})
    }
}

const deleteProject = async(req, res) => {
    const {projectId} = req.body;
    try{
        await Project.deleteOne({projectId:projectId});
        res.status(200).json({data:"Deleted", ok:true})
    }
    catch(err){
        console.log(err);
        res.status(400).json({data:"Failed to Load", ok:false})
    }
}
module.exports = {addProject,getProjects,deleteProject};