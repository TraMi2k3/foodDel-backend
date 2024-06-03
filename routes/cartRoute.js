import express from "express";
import authMiddleware from "../middleware/auth.js";
import {addToCart, removeFromCart, deleteCart, getCart, addToCartWithNumber} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/addnb", authMiddleware, addToCartWithNumber);
cartRouter.post("/remove",authMiddleware, removeFromCart)
cartRouter.post("/get", authMiddleware, getCart)
cartRouter.post("/del", authMiddleware, deleteCart)

export default cartRouter;