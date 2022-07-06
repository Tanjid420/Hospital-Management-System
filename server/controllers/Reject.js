const db=require("../config/CreateConnection")
const mysql=require("mysql")
module.exports=reject=async(req,res)=>{
    const id=req.body.id
    console.log(id)
    const sql=`DELETE FROM user WHERE ID=`+mysql.escape(id)
    db.query(sql,(err,result)=>{
        if(err)
        throw err
        
    })
    res.send("okk")
}