import mongoose from "mongoose"

const connectdb= async (databaseUrl)=>{
    try{
const DB_Option={
    dbName: "todo",
     }
await mongoose.connect(databaseUrl,DB_Option)
console.log("Mongodb Connected Successfully..");
    } catch(err){
        console.log(err)
    }
}
export default connectdb