import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add food item
const addFood = async(req, res) => {

    let img_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: img_filename
    })
    try{
        await food.save();
        res.json({success:true, message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (err) {
        console.log(err);
        res.json({success:false, message:"Error"})
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, () =>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Food removed"})
    } catch(err) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

const getFoodItem = async (req, res) => {
    const foodId = req.params.foodId;
    try {
        const foodItem = await foodModel.findById(foodId);
        res.json({success:true,data:foodItem})
    } catch (err) {
        console.log(err);
        res.json({success:false, message:"Error"})
    }
}
export {addFood, listFood, removeFood, getFoodItem}
