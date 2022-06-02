import React, { useState } from "react";
import styles from  "./Signup.module.css"
import {POST} from "../../../../api/api";
const Signup=()=>{
    const [data,setData]=useState({
        name:" "
    })
    const handle=(e)=>{
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)

    }
    const submitHandler=(event)=>{
        event.preventDefault()
        console.log(data.name)
        const post=async()=>{
            try{

                const res=await POST("/hello",{name:data.name})
                
                console.log(res)
            }
            catch(err)
            {
                console.log(err)
            }
        }
        // post()
    }
    return(
        <div className={styles.signupContainer}>
          <form className={styles.formContainer}>
              <label>
                  Name:
                  <input className={styles.name} type="text" name="name" placeholder="name"/>
              </label>
              <br/>
              <label>
                  Email:
                  <input className={styles.email} type="text" name="email" placeholder="email"/>
              </label>
              <br/>
              <label>
                  Password:
              <input className={styles.password }type="password" name="password" placeholder="password"/>
              </label>
              <br/>
              <label>
                  Confirm Password:
                  <input className={styles.confirmPassword}type="password" name="confirmPassword" placeholder="confirm password"/>
              </label>
              <br/>
              <label>
                  Sex:
                  <input className={styles.sex}type="text" name="sex" placeholder="sex"/>
              </label>
              <br/>
              <label>
                  File:
                  <input className={styles.file}type="file" name="file" placeholder="file"/>
              </label>
              <br/>
              <label>
                  <input className={styles.submit} type="submit"  placeholder="submit"/>
              </label>
          </form>
        </div>
    )
}
export default Signup