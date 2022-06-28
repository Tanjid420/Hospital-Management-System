import React, { useState } from "react";
import styles from "./ProfileImage.module.css"
import photoEdit from "../../assets/edit.png"
const ProfileImage=(props)=>{
    let [state,setState]=useState("0");
    const clickHandler=()=>{

        console.log("hello brother what's up")
    }
 return(

    <div className={styles.profileContainer}> 
    <img className={styles.image} src="https://images.unsplash.com/photo-1544536871-6e891baa163f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
    <div className={styles.topImgContainer}>
        <img className={styles.topImg} src={props.person[0].image}/>
        {/* <div className={styles.photoEditContainer}>
            <img onClick={()=>clickHandler()} src={photoEdit}className={styles.photoEdit}/>
        </div> */}
        <div className={styles.nameContainer}>
            {props.person[0].name}
        </div>
        <div className={styles.deptContainer}>
             {props.person[0].department}
        </div>
        <div className={styles.degContainer}>
             {props.person[0].degree}
        </div>
    </div>
</div>
 )
}
export default ProfileImage