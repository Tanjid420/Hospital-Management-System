import React, { useContext, useEffect, useState } from "react";
import styles from "./Dashboard.module.css"
import InformationBox from "./InformationBox/InformatioBox";
import paitent from "../../../assets/patient.png"
import surgery from "../../../assets/surgery-room.png"
import opd from "../../../assets/OPD.png"
import salary from "../../../assets/salary.png"
import LineChart from "../../Chart/LineChart/Linechart/LineChart";
import ChartContainer from "../../ChartContainer/ChartContainer";
import List from "../../List/List";
import PieChart from "../../Chart/LineChart/PieChart/PieChart";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import { GET } from "../../../api/api";
const Dashboard=()=>{
  const user=useContext(UserContext)
  const navigate=useNavigate()
  let [dashboard,setDashboard]=useState([])
//   if(user.Role!="admin")
//   {
//      navigate("/doctor")
//   }
const getData=async()=>{
   const result=await GET("/dashboardData")
   setDashboard(result.data)
}
useEffect(()=>{
   getData();
},[])
   const xx={name:"shanto"}
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
     const list=[{
      id:1,
      Name:"peuly",
      Building:"A",
      Room:"11",
      Contact:"01761058806",
      dissease:"Fiver"
  },{ id:2,
      Name:"shanto",
      Building:"A",
      Room:"12",
      Contact:"01761058806",
     dissease:"Caugh"
  },{
     id:3,
      Name:"Arnob",
      Building:"A",
      Room:"13",
      Contact:"01761058806",
      dissease:"AIDS"
  },{
     id:4,
      Name:"Fahad",
      Building:"A",
      Room:"14",
      Contact:"01761058806",
      Dissease:"Cancer"
  }]
  const list1=[
     {
        id:1,
        name:"Diabates",
        sale:20,
        value:"$100"
     },
     {
      id:2,
      name:"Diabates",
      sale:20,
      value:"$100"
   },
   {
      id:3,
      name:"Diabates",
      sale:20,
      value:"$100"
   }
   ,  {
      id:4,
      name:"Diabates",
      sale:20,
      value:"$100"
   }
   ,  {
      id:5,
      name:"Diabates",
      sale:20,
      value:"$100"
   }
  
  ]
  const list2=[
     {
        id:1,
     name:"Shanto",
     invoice:"#2242sa",
     staff:"Arnob",
     date:"2/3/22",
     amount:"$122",
     discount:"7%",
     total:"$100"
     }
     
     
  ]
  const   header=[
     {name:"Number"},
     {name:"Name"},
     {name:"Building"},
     {name:"Room"},
     {name:"Contact"},
     {name:"Dissease"}
]
const   header1=[
   {name:"No."},
   {name:"Name of Treatment"},
   {name:"Number of Sale"},
   {name:"Value"},
]
const header2=[
   {name:"No."},
   {
      name:"Patient"
   },
   {
      name:"Invoice"
   }
   ,{
      name:"Staff"
   },
   {
      name:"Date"
   },
   {
      name:"Amount"
   },{
      name:"Discount"
   },
   {
      name:"Total"
   }
]
const clickHandler=(id)=>{
   console.log(id)
}
    return(
        <div className={styles.dashboardContainer}>
            {DashboardInfo.map((el,id)=>{
                return(
                     <InformationBox  key={id} percentage={"%55"} percentageInfo={"%55"} info={el.info} img={el.img}/>
                )
                
            })}
            <div className={styles.lineChartContainer}>
               <div className={styles.text}>
                  HOSPITAL SURVEY
               </div>
               <LineChart label={"Amount Received"}/>
            </div>
            <div className={styles.chartContainer}>
            {hospitalInformation.map((el,id)=>{
               return(
                      <ChartContainer info={el.info} key={id}/>
               )
           
            })} 
            </div> 
             <div className={styles.listContainer}>
               <List textToShow={"Top Treatment"} clicked={clickHandler} list={list1} header={header1}/>
            </div>
           <div className={styles.PieChartContainer}>
               <div className={styles.PieChartContainer1}>
                  <div className={styles.text} >Total Appointment</div>
                   <PieChart height={400} widht={400}/>
               </div>
               <div className={styles.PieChartContainer1}>
                  <div className={styles.text}>
                     All Staff
                  </div>
                  <PieChart height={400} widht={400}/> 
               </div>
                
           </div>
           
            {/* <div className={styles.listContainer}>
               <List clicked={clickHandler} list={list} header={header}/>
            </div> */}
           
            {/* <div className={styles.hello}>broo</div> */}
            {/* <Bar 
            data={{
               labels:["red","blue","yellow","green","orange"],
            }}
            height={500}
            width={600}
            /> */}
             <div className={styles.listContainer}>
               <List textToShow={"Payment"} clicked={clickHandler} list={list2} header={header2}/>
            </div>
        </div>
    )
}
export default Dashboard;