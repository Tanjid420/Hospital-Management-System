const express=require("express")
const app=express();
const Database=require("../config/CreateConnection")
module.exports=createDatabase=async(req,res)=>{
    const db=new Database();
    db.establishConnection();
    db.createUser();
    db.createShift();
    db.createDept();
    db.createDegrees();
    db.createMedicalHistory();
    db.createBuildingInfo();
    db.createBuildings();
    db.createAdmin();
    db.createFacilities();
    db.createCost();
    db.createFees();
    db.createDuplicateUserInfo();
    db.createDuplicateUser();
     db.createRecord();
    db.createConversation();
    db.createConversationReply();
    res.send("it all set")
}