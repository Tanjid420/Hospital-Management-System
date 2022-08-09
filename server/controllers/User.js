const db=require("../config/CreateConnection")
const mysql=require("mysql")
module.exports=reject=async(req,res)=>{
    const id=req.body.id
    console.log("itsid")
    
    const sql=`SELECT *FROM user WHERE ID=`+mysql.escape(id)
    db.query(sql,(err,result)=>{
        if(err)
        throw err
         res.send(result)
    })
   
}

// u2.i4FVZqXLVE3TfjnAT1PgmiAvlZSVlt3.bhym0Qj5

