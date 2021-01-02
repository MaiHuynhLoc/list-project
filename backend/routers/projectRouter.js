import express from 'express';
import data from '../data.js';
import Project from '../models/projectModel.js';
import expressAsyncHandler from 'express-async-handler';
const projectRouter = express.Router();
projectRouter.get('/',
    expressAsyncHandler(async(req, res) => {
        const projects = await Project.find({});
        res.send(projects);
    })
);
projectRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    await Project.remove({});
    const createdProjects = await Project.insertMany(data.projects);
    res.send({ createdProjects });
}))

projectRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const project = await Project.findById(req.params.id);
    if (project) {
        res.send({ project });
    } else {
        res.status(404).send({ message: 'Project not found' });
    }
}));
export default projectRouter;