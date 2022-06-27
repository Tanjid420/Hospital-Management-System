import React from "react";
import { useParams } from "react-router-dom";
import styles from "./EmployeeProfile.module.css"
const EmployeeProfile=(props)=>{
    const params=useParams();
    console.log(params.id)
    return(
        <div className={styles.container}>
                hi what's up
                
        </div>
    )
}
export default EmployeeProfile;
