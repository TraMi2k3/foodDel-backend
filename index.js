import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import commentRouter from "./routes/commentRoute.js";

//app config
const app = express()

//midleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.use("/api/comment", commentRouter)

app.get("/",(req, res) => {
    res.send('Api working')
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`)
})

//mongodb+srv://trami:123~456@cluster0.h7xbkvs.mongodb.net/?