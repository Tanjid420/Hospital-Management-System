import React from "react";
import styles from "./ShortProfile.module.css"
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const ShortProfile=(props)=>{
    let param=useParams();
    const location=useLocation();
    let path=location.pathname;
    return(
            <div className={styles.container}>
          <Link className={styles.infoContainer} to={path+"/"+props.id} onClick={()=>props.click(props.id)}>
             
           <div>
             <img className={styles.image} src={props.image}/>
           </div>
           <div className={styles.name}>
               {props.name}
           </div>
           <div className={styles.degree}>
            {props.degree}
           </div>
           <div className={styles.department}>
            {props.department}
           </div>
           
           </Link>
        </div>

       
    )
}
export default ShortProfile;