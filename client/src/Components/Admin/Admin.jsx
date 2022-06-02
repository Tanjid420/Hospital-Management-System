import React, { useState } from "react";
import styles from "./Admin.module.css"
import FeaturesBox from "./FeaturesBox/FeaturesBox";
import Dashboard from "./Dashboard/Dashboard";
import Wraper from "./Wraper/Wraper";
const Admin=()=>{
    // let [renderedObject,setRenderedObject]=useState({
    //     objectToRender:<Signup/>
    // })
    const contentLoaderHandler=(id)=>{
        // switch(id){
        //     case "logout":
        //         setRenderedObject({objectToRender:<Signin/>})
        //         break;

        // }
        console.log(id)
    }
    return(
        <div className={styles.adminContainer} >
            <FeaturesBox contentToLoad={contentLoaderHandler}/>
            <Wraper>
               <Dashboard/>      
            </Wraper>
            {/* {renderedObject.objectToRender} */}
        </div>
    )
}
export default Admin;
