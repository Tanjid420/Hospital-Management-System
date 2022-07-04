const db=require("../config/CreateConnection")
const mysql=require("mysql")
module.exports=authorizationNotification=async(req,res)=>{
    const id=req.params.id
    let sql=`SELECT *FROM user WHERE ID= `+mysql.escape(id)
    console.log(sql)
    db.query(sql,(err,result)=>{
       console.log(result)
        res.send(result)
    })
    
// res.send("hello")
}
