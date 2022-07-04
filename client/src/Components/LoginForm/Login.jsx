import React  from "react";
import Box from "./SideBox/Box"
import Form from "./Form/Form"
import styles from "./Login.module.css"
const Login=(props)=>{
   return(
        <div className={styles.loginWrapper}>
              <div className={styles.loginContainer}>
            <Box />
            <Form data={props.data}/>
            
    </div>
 
        </div>
       
    )
   
}
export default Login;