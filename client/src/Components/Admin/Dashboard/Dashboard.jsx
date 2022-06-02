import React from "react";
import styles from "./Dashboard.module.css"
import InformationBox from "./InformationBox/InformatioBox";
import paitent from "../../../assets/patient.png"
import surgery from "../../../assets/surgery-room.png"
import opd from "../../../assets/OPD.png"
import salary from "../../../assets/salary.png"
import LineChart from "../../Chart/LineChart";
import ChartContainer from "../../ChartContainer/ChartContainer";
const Dashboard=()=>{
     const DashboardInfo=[{
        info:"New Patient",
        img:paitent
     },
     {
        info:"OPD Paitent",
        img:opd
     },
     {
        info:"Operation",
        img:surgery
     },
     {
        info:"Earnings",
        img:salary
     }]
     const hospitalInformation=[
        {
          info:"NEW PATIENT"  
        },
        {
           info:"HEART SURGERIES"
        },
        {
           info:"MEDICAL TREATMENT"
        }
     ]
    return(
        <div className={styles.dashboardContainer}>
            {DashboardInfo.map((el,id)=>{
                return(
                     <InformationBox  key={id} info={el.info} img={el.img}/>
                )
                
            })}
            <div className={styles.lineChartContainer}>
               <div className={styles.text}>
                  HOSPITAL SURVEY
               </div>
               <LineChart/>
            </div>
            <div className={styles.chartContainer}>
            {hospitalInformation.map((el,id)=>{
               return(
                      <ChartContainer info={el.info} key={id}/>
               )
           
            })} 
            </div>
            {/* <div className={styles.hello}>broo</div> */}
            {/* <Bar 
            data={{
               labels:["red","blue","yellow","green","orange"],
            }}
            height={500}
            width={600}
            /> */}
        </div>
    )
}
export default Dashboard;