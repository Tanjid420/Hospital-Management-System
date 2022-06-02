import React from "react";
import styles from "./LabelContainer.module.css"
import{Link} from "react-router-dom"

const LabelContainer=(props)=>{
    
    return(
        <div  className={styles.dashboardContainer}>
            <Link to={props.id} onClick={()=>props.clicked(props.id)} className={props.clickStatus===1?styles.innerDashboardContainerActive:styles.innerDashboardContainer}>
                <div className={styles.imageContainer}>
                    <img src={props.img} alt={props.alt}/>
                </div>
                <div className={styles.labelContainer}>
                    {props.name}
                </div>
            </Link>
        </div>
        
    )
}
export default LabelContainer;