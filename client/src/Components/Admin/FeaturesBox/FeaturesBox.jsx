import React, { useContext, useState } from "react";
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
import { UserContext } from "../../../UserContext";
const FeaturesBox=(props)=>{
    const user=useContext(UserContext)
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
        id:"patients",
        alt:"patient"
    },{
        img:profileImg ,
        name:"Profile",
        id:`profile/${user.id}`,
        alt:"Profile"
    },{
        img:testImg ,
        name:"Test",
        id:"test",
        alt:"Test"
    },
    // {
    //     img:notificationImg ,
    //     name:"Notification",
    //     id:"notification",
    //     alt:"notification"
    // },
    {
        img: logoutImg,
        name:"Logout",
        id:"logout",
        alt:"Logout"
    }]
 

    const location=useLocation();
    let path=""
    if(location.pathname=="/")
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
               <div className={styles.imgContainer}>
                   <img src="https://images.unsplash.com/photo-1655837804588-472faea586ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"/>
               </div>
               <div className={styles.nameContainer}>
                   {props.name}
                   Ashraful Islam
               </div>
            </div>
            <hr/>
            
           {information.map(el=>{
               return(
                   <LabelContainer clickStatus={el.id==appState.activeObject?1:0} img={el.img} alt={el.alt} name={el.name} key={el.id} id={el.id} clicked={clickEventHandler} />
               )
           })}
           

        </div>
    )
}
export default FeaturesBox;