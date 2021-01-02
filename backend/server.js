import express from 'express';
import data from './data.js'
//import mongoose from 'mongoose';
//import userRouter from './routers/userRouter.js';
//import projectRouter from './routers/projectRouter.js';

const app = express();
/*mongoose.connect('mongodb://localhost/listprojects', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});*/

app.get('/', (req, res) => {
    res.send("Server is ready");
})
app.get('/api/projects', (req, res) => {
    res.send(data.projects);
})

//app.use('/api/users', userRouter)
//app.use('/api/projects', projectRouter);
/*app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});*/
const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Serve ar http://localhost:${port}`);
});