import foodModel from "../models/foodModel.js";
import userModel from "../models/userModel.js";
import moment from "moment";
import mongoose from "mongoose";

const addComment =  async (req, res) => {
    const {foodId, desc, userId} = req.body;
    
    try {
        let foodData = await foodModel.findById(foodId);
        let userData = await userModel.findById(userId);
        const newComment = {
            username: userData.name,
            desc: desc,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        };

        foodData.comments.push(newComment);

        await foodData.save();
        res.json({success:true, message:"Added comment"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

const deleteComment =  async (req, res) => {
    const {foodId, userId} = req.body;
    console.log(req.body)
    try {
        let commentId = req.params.commentId;
        console.log(commentId)
        let userData = await userModel.findById(userId);

        await foodModel.findByIdAndUpdate(
            foodId,
            {
                $pull: {
                    comments: { _id: commentId, username: userData.name }
                }
            },
            { new: true }
        );
        res.json({success:true, message:"Deleted comment"});
    } catch (error){
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

const getComments =  async (req, res) => {
    try {
        let foodData = await foodModel.findById(req.query.foodId);
        let commentData = await foodData.comments;  
        res.json({success:true, data: commentData});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

export {addComment, deleteComment, getComments}