import express  from "express";
import connectdb from "./db/connectDb.js";
import {join} from "path";
import web from "./routes/web.js"
const app=express()
const port=process.env.port || "3000"
const databaseUrl=process.env.databaseUrl || "mongodb://localhost:27017"


// Database connection
connectdb(databaseUrl)

app.use(express.urlencoded({extended:false}))
// Static files
app.use('/user',express.static(join(process.cwd(),"public")))
app.use('/user/edit',express.static(join(process.cwd(),"public")))

// Set Template Engine
app.set("view engine", "ejs");

// load routes
app.use("/user",web)


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}/user`)
})