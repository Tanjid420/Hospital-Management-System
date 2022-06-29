const mysql=require("mysql")
const User=require("../models/User")
const Dept=require("../models/Dept")
const Shift=require("../models/Shift")
const Record =require("../models/Record")
const MedicalHistory=require("../models/MedicalHistory")
const Fees=require("../models/Fees")
const Facilities=require("../models/Facilities")
const DuplicateUser=require("../models/DuplicateUser")
const DuplicateUserInfo=require("../models/DuplicateUserInfo")
const Degrees=require("../models/Degrees")
const Cost=require("../models/Cost")
const Conversation=require("../models/Conversation")
const ConversationReply=require("../models/ConversationReply")
const BuildingInfo=require("../models/BuildingInfo")
const Buildings=require("../models/Buildings")
const Admin=require("../models/Admin")
class Database{
      establishConnection(){
        const connectToDatabase= mysql.createConnection({
            host:'127.0.0.1',
            user:'root',
            password:'{Notredame5058}',
            database:'Hospital_Management_System'
        })
        
        connectToDatabase.connect(err=>{
            if(err)
             throw err
             
             console.log("it's established")
        }) 

         return connectToDatabase;
      
         
    }
    
    
        createUser(){
    
            const connectToDatabase=this.establishConnection();
          

              connectToDatabase.query(User,(err,result)=>{
                if(err)
                    throw err;
                console.log(result)
            })

            console.log("User createion Complete")
       
    }  
    createDept(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(Dept,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createShift(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(Shift,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createDegrees(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(Degrees,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createMedicalHistory(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(MedicalHistory,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createBuildings(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(Buildings,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createBuildingInfo(){
        console.log(BuildingInfo)
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(BuildingInfo,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createAdmin(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(Admin,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createRecord(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(Record,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createFacilities(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(Facilities,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createFees(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(Fees,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createDuplicateUser(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(DuplicateUser,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createDuplicateUserInfo(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(DuplicateUserInfo,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createCost(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(Cost,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createConversation(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(Conversation,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 
    createConversationReply(){
        const connectToDatabase=this.establishConnection();
        connectToDatabase.query(ConversationReply,(err,result)=>{
          if(err)
              throw err;
          console.log(result)
      })
    } 


    
}
 
module.exports=Database;


