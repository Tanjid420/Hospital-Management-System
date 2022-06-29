import React from "react";
import styles from "./Wraper.module.css"
const wraper=(props)=>{
  

    return( 
        <div className={props.user.auth==="admin"?styles.wraper:styles.wrap2}>
            { props.children}
        </div>
    )
   
}
export default wraper;