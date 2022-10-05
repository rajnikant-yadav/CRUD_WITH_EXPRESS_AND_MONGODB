import userModel from "../model/user.js"

class userControler{
    static createDoc= async(req, res)=>{
        try{
        //console.log(req.body)
        const {name,age,fees}=req.body
        const doc = new userModel({
            name:name,
            age:age,
            fees:fees
          })
          // Saving Document
          const result = await doc.save()
        res.redirect("/user")
       }
     catch(err){
   console.log(err)
    }
}

    static getAllDoc= async(req, res)=>{
        try{
            const result=await userModel.find()
            //console.log(result)
            res.render("index",{data:result})
        }catch(err){
            console.log(err)
        }
    }

    static editDoc= async(req, res)=>{
        try {
            const result = await userModel.findById(req.params.id)
            // console.log(result)
            res.render("edit.ejs", {data:result})
          } catch (error) {
            console.log(error)
          }
        
       }

       static updateDoc= async(req, res)=>{
        try {
            const result = await userModel.findByIdAndUpdate(req.params.id, req.body)
            // console.log(result)
          } catch (error) {
            console.log(error)
          }
        res.redirect("/user")
       }

       static deleteDocById= async(req, res)=>{
        try {
            const result = await userModel.findByIdAndDelete(req.params.id)
            res.redirect("/user")
          } catch (error) {
            console.log(error)
          } 
       }
}


export default userControler 