import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/user.js";





import dotenv from "dotenv";
dotenv.config();

const PORT=process.env.PORT;
const URL=process.env.URL;
const app=express();

app.use(cors());
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(function(req, res, next) {
   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
   next();
});

app.use("/auth",authRoutes);


// const server=http.createServer(app);


app.get("/",(req,res)=>{
   res.send("server is running...");
})


app.listen(PORT,async()=>{
   try {
       await mongoose.connect(URL);
       console.log(`server is running at port ${PORT}`);
   } catch (error) {
      console.log("error in database conncetion : ",error);
   }
})