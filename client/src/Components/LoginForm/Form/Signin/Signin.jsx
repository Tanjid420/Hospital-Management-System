import React from "react";
import styles from  "./Signin.module.css"
import doctor from "../../../../assets/doctor.jpg"
import { Link } from "react-router-dom";
const signin=(props)=>{
    const submitHandler=()=>{
        console.log("hello")
    }
    return(

        <div className={styles.signinContainer}>
            <div className={styles.imgContainer}>
                <div className={styles.img}>
                    <img src={doctor} alt="login"/>
                </div>
            </div>
            <div className={styles.loginText}>
               <h1>Signin</h1>
            </div>
            <form className={styles.form} onSubmit={submitHandler}>
                <label >
                    <input type="text" className={styles.email} name="email" placeholder="username"/>
            </label>   
            <br/> 
            <label>
                    <input  className={styles.password} type="password" name="password" placeholder="password"/>
            </label>       
            <br/> 
            <label >
                    <input className={styles.submit} type="submit" name="submit" placeholder="submit"/>
            </label>   
            </form>
            <div>
             <Link to="/forget">Forget Password?</Link>
            </div>
        </div>
    )
}
export default signin;