import React from "react";
import "./SignupContainer.css"
const signupContainer=(props)=>{
    return(
        <div className="signup-signin-container">
            <button onClick={()=>props.clicked("signin")} className="sign--container">
                Signin
            </button>
            <button onClick={()=>props.clicked("signup")} className="sign--container">
                Signup
            </button>
        </div>
    )
}
export default signupContainer;