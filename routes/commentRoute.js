import express from "express";
import authMiddleware from "../middleware/auth.js";
import {addComment, deleteComment, getComments} from "../controllers/commentController.js";

const commentRouter = express.Router();

commentRouter.get("/", getComments);
commentRouter.post("/add", authMiddleware, addComment);
commentRouter.post("/del/:commentId", authMiddleware, deleteComment);

export default commentRouter;