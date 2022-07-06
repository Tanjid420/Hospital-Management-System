const db=require("../config/CreateConnection")
module.exports=autharization=async(req,res)=>{
    console.log("hello")
   await db.query("SELECT *FROM user where Status=false",(err,result)=>{
        res.send(result)
    })

}
