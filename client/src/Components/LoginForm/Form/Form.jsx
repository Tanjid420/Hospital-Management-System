import React, { useState } from "react";
import styles from "./Form.module.css"
import SignupContainer from "./SignupContainer/SignupContainer";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
const Form=(props)=>{
    let [status,setStatus]=useState(0)
    const onClickHandler=(onClickStatus)=>{
        if(onClickStatus==="signin")
        {
            setStatus(0)
        }
        else{
            setStatus(1)
        }
      
    }

    return(
        <div className={styles.sideForm}>
            <SignupContainer clicked={onClickHandler}/>
           {status?<Signup/>:<Signin data={props.data} />}
        </div>
    )
}
export default Form;