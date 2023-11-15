import mongoose from "mongoose";

const userSchema=mongoose.Schema({
      name:String,
      email:String,
      createdAt:String,
      password:String,
      _id:String,
});

export const User = mongoose.model('User',userSchema);

// new Date().toISOString()