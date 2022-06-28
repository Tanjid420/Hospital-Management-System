import React, { useState } from "react";
import styles from  "./Signup.module.css"
import {POST} from "../../../../api/api";
import Axios from 'axios';
const Signup=()=>{

    //sign up form states
    //----------------------

    const [nameReg,setName]=useState("");
    const [emailReg,setEmail]=useState("");
    const [passwordReg,setPassword]=useState("");
    const [confirmPasswordReg,setConfirmPassword]=useState("");
    const [sexReg,setSex]=useState("");
    const [fileReg,setFile]=useState("");
    // const signup = ()=>{
    //     Axios.post("http://localhost4000/signup",{
    //         username: nameReg, 
    //         password:passwordReg,
    //         email: emailReg,
    //         confirmPassword: confirmPasswordReg,
    //         sex: sexReg,
    //         image: fileReg,
    //     }).then((response)=>{
    //         console.log(response);

    //     })
        
    // }
    
    const signup = async(e)=>{
        e.preventDefault();
        const res = await Axios.post("http://localhost:4000/signup", {
            username: nameReg, 
            password:passwordReg,
            email: emailReg,
            confirmPassword: confirmPasswordReg,
            sex: sexReg,
            image: fileReg,
        })
        console.log(res);
    }
    // const [data,setData]=useState({
    //     name:" "
    // })
    // const handle=(e)=>{
    //     const newData={...data}
    //     newData[e.target.id]=e.target.value
    //     setData(newData)

    // }
    // const submitHandler=(event)=>{
    //     event.preventDefault()
    //     console.log(data.name)
    //     const post=async()=>{
    //         try{

    //             const res=await POST("/hello",{name:data.name})
                
    //             console.log(res)
    //         }
    //         catch(err)
    //         {
    //             console.log(err)
    //         }
    //     }
        // post()
        console.log(signup);
        return(
            <div className={styles.signupContainer}>
              <form className={styles.formContainer}>
                  <label>
                      Name:
                      <input className={styles.name} type="text" name="name" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      Email:
                      <input className={styles.email} type="text" name="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      Password:
                  <input className={styles.password }type="password" name="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      Confirm Password:
                      <input className={styles.confirmPassword}type="password" name="confirmPassword" placeholder="confirm password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      Sex:
                      <input className={styles.sex}type="text" name="sex" placeholder="sex" onChange={(e)=>{setSex(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      File:
                      <input className={styles.file}type="file" name="file" placeholder="file" onChange={(e)=>{setFile(e.target.value)}}/>
                  </label>
                  <br/>
                  <label>
                      <input className={styles.submit} type="submit"  placeholder="submit" onClick={signup}/>
                  </label>
              </form>
            </div>
        )
    }
    

export default Signup;