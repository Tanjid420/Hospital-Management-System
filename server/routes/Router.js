const express=require("express");
const router=express.Router();
const createDatabase=require("../controllers/CreateDatabase")
router.get("/createDB",createDatabase);
module.exports=router;