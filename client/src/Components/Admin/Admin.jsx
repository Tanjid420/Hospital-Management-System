import React, { useContext, useState} from "react";
import { useLocation,useNavigate } from "react-router-dom";
import styles from "./Admin.module.css"
import FeaturesBox from "./FeaturesBox/FeaturesBox";
const Admin=(props)=>{
    const toke=localStorage.getItem("token")
    return(
      
         <div className={styles.adminContainer} >
          <FeaturesBox />
        </div>
       
    )
}
export default Admin;
