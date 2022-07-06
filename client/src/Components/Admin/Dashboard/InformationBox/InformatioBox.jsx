import React from "react";
import styles from "./InformationBox.module.css"
const InformationBox=(props)=>{
    return(
        <div className={styles.informationBoxContainer}>
            <div className={styles.imgTextContainer}>

            <div className={styles.imgContainer}>
                <img src={props.img}/>
            </div>
            <div className={styles.textContainer}>
               <div>{props.info}</div>
               <h4>{props.count}</h4>
            </div>
            </div>
            <hr/>
            <div className={styles.statContainer}>
                <div className={styles.percentage}>
                    {props.percentage}
                    {/* +55%   */}
                </div>
                <div className={styles.percentageInfo}>
                    {/* {props.percentageInfo} */}
                    {props.percentageInfo!=null?"Than last Week":null}
                </div>
            </div>
        </div>
    )
}
export default InformationBox;