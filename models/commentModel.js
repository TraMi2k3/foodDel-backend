import mongoose from "mongoose";
import moment from 'moment'; 

const commentSchema = new mongoose.Schema({
    username: {type: String, required: true},
    desc: {type: String, required: true},
    date: {type: String, default: () => moment().format("YYYY-MM-DD HH:mm:ss")}
});

const commentModel = mongoose.models.comment || mongoose.model("comment", commentSchema);
export { commentModel, commentSchema };