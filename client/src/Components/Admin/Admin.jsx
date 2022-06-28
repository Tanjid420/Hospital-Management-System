import React, { useState } from "react";
import styles from "./Admin.module.css"
import FeaturesBox from "./FeaturesBox/FeaturesBox";
import Dashboard from "./Dashboard/Dashboard";
import Wraper from "./Wraper/Wraper";
import Doctor from "./Doctor/Doctor";
import { getThemeProps } from "@mui/system";
const Admin=(props)=>{
    return(
        <div className={styles.adminContainer} >
          {props.children}
        </div>
    )
}
export default Admin;
