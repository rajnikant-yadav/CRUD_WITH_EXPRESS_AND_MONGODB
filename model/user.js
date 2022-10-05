import mongoose from "mongoose";
// defining Schema
const userSchema= mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true},
    fees:{type:Number}
})

// model

const userModel= mongoose.model("rajnikant", userSchema)

export default userModel