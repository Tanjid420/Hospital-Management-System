import React from "react";
import styles from "./Wraper.module.css"
const wraper=(props)=>{
    return( 
    <div className={styles.wraper}>
        {props.children}
    </div>
    )
   
}
export default wraper;