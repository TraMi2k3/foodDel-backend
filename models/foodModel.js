import mongoose from "mongoose";
import {commentSchema} from './commentModel.js'


const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    image: {type:String, required:true},
    category: {type:String, required:true},
    comments: {type:[commentSchema], default:[]}
}, {minimize:false})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;