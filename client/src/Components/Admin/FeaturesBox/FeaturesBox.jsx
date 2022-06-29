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
import patientImg from "../../../assets/patient1.png"
import { useLocation } from "react-router-dom";
const FeaturesBox=(props)=>{
    const information=[{
        img:dashboardImg,
        name:"Dashboard",
        id:"dashboard",
        alt:"Dashboard"
    },{
        img:doctorImg,
        name:"Doctors",
        id:"doctor",
        alt:"Doctor"
    },{
        img:employeeImg,
        name:"Employee",
        id:"employee",
        alt:"Employee"
    },
    {
        img:patientImg,
        name:"Patients",
        id:"patient",
        alt:"patient"
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
    },
    {
        img:notificationImg ,
        name:"Notification",
        id:"notification",
        alt:"notification"
    },
    {
        img: logoutImg,
        name:"Logout",
        id:"logout",
        alt:"Logout"
    }]
    const location=useLocation();
    let path=""
    if(location.pathname==="/")
    {
        path="dashboard"
    }
    else{
            path=location.pathname.split('/')[1];
    }
   
    // console.log( `its the path ${path}`)
    let [appState,setAppState]=useState({
        activeObject:path
    })
    const clickEventHandler=(id)=>{
      let newAppstate=id;
      setAppState({
          activeObject:newAppstate
      })
    //   console.log(id);
    }
    // console.log(appState.activeObject)
    return(
        <div className={styles.featuresContainer}>
            <div className={styles.topBox}>
               Hospital Admin
            </div>
            <hr/>
            
           {information.map(el=>{
               return(
                   <LabelContainer clickStatus={el.id===appState.activeObject?1:0} img={el.img} alt={el.alt} name={el.name} key={el.id} id={el.id} clicked={clickEventHandler} />
               )
           })}
           

        </div>
    )
}
export default FeaturesBox;