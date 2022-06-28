import React from "react";
import styles from "./Box.module.css"
import sideBoxPic from "../../../assets/sidebox.jpg"
const box=()=>{
    return(
        <div className={styles.sideBox}>
            <div className={styles.imgContainer}>
                 <img src={sideBoxPic}/>
            </div>
           
        </div>
    )
}
export default box;