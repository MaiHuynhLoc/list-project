import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    description: { type: String, required: true },
    process: { type: Number, required: true }
}, { timestamps: String, required: true });
const Project = mongoose.model('Project', projectSchema);
export default Project;