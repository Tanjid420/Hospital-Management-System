import React, { useState } from "react";
import styles from "./FeaturesBox.module.css"
import LabelContainer from "../../LabelContaier/LabelContainer";
import dashboardImg from "../../../assets/dashboard.png"
import doctorImg from "../../../assets/doctor.png"
import employeeImg from "../../../assets/employee.png"
import notificationImg from "../../../assets/notification.png"
import logoutImg from "../../../assets/logout.png"
import profileImg from "../../../assets/profile.png"
import testImg from "../../../assets/test.png"
import { brown } from "@mui/material/colors";
const FeaturesBox=(props)=>{
    const information=[{
        img:dashboardImg,
        name:"Dashboard",
        id:"dashboard",
        alt:"Dashboard"
    },{
        img:doctorImg,
        name:"Doctor",
        id:"doctor",
        alt:"Doctor"
    },{
        img:employeeImg,
        name:"Employee",
        id:"employee",
        alt:"Employee"
    },{
        img:profileImg ,
        name:"Profile",
        id:"profile",
        alt:"Profile"
    },{
        img:testImg ,
        name:"Test",
        id:"test",
        alt:"Test"
    },{
        img: logoutImg,
        name:"Logout",
        id:"logout",
        alt:"Logout"
    }]
    let [appState,setAppState]=useState({
        activeObject:"dashboard"
    })
    const clickEventHandler=(id)=>{
        props.contentToLoad(id)
      let newAppstate=id;
      setAppState({
          activeObject:newAppstate
      })
      console.log(id);
    }
    return(
        <div className={styles.featuresContainer}>
            <div className={styles.topBox}>
               Hospital Admin
            </div>
            <hr/>
            
           {information.map(el=>{
               return(
                   <LabelContainer clickStatus={el.id==appState.activeObject?1:0} img={el.img} alt={el.alt} name={el.name} key={el.id} id={el.id} clicked={clickEventHandler} />
               )
           })}
            {/* <LabelContainer img={dashboardImg} alt={"Dashboard"} name={"Dashboard"}/>
            <LabelContainer img={doctorImg} alt={"Doctor"} name={"Doctor"}/>    
            <LabelContainer img={employeeImg} alt={"Employee"} name={"Employee"}/>
            <LabelContainer img={profileImg} alt={"User"} name={"User"}/>
            <LabelContainer img={testImg} alt={"Test"} name={"Test"}/>
            <LabelContainer img={logoutImg} alt={"Logout"} name={"Logout"}/> */}

        </div>
    )
}
export default FeaturesBox;