import React from "react";
import LineChart from "../Chart/LineChart/Linechart/LineChart";
import styles from "./ChartContainer.module.css"
const chartContainer=(props)=>{
    return(
        <div className={styles.chartBox}>
            <div className={styles.infoContainer}>
                <div className={styles.text}>{props.info}</div>
                <div className={styles.statContainer}>
                <div className={styles.percentage}>
                    {props.percentage}
                    +55%  
                </div>
                <div className={styles.percentageInfo}>
                    {props.percentageInfo}
                    Than last Week
                </div>
            </div>
            <div className={styles.statisticsBox}>
                <div className={styles.overallStat}>
                    <div className={styles.header}>Overall</div>
                    
                    <div className={styles.headerValue}>{props.overallStat}70%</div>
                </div>
                <div className={styles.overallStat}>
                    <div className={styles.header}>Monthly</div>
                   
                    <div className={styles.headerValue}> {props.monthlyStat}70%</div>
                </div>
                 <div className={styles.overallStat}>
                    <div className={styles.header}>Daily</div>
                    
                    <div className={styles.headerValue}>{props.dailyStat}70%</div>
                </div>
            </div>
            </div>
            <LineChart id={1}/>
        </div>
    )
}
export default chartContainer