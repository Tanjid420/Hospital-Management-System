const express=require("express");
const router=express.Router();
const createDatabase=require("../controllers/CreateDatabase")
const signup=require("../controllers/Signup")
const signin = require("../controllers/Signin")
router.get("/createDB",createDatabase);
router.post("/signup",signup)
router.post("/signin",signin)
router.get("/signin",signin)
module.exports=router;
