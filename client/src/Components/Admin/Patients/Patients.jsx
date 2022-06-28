import React from "react";
import LineChart from "../../Chart/LineChart/Linechart/LineChart";
import styles from "./Patients.module.css"
import List from "../../List/List";
const Patients=(props)=>{
    const header=[
        {name:"No."},
        {name:"Name"},
        {name:"Phone"},
        {name:"Address"},
        {name:"Admit Date"},
        {name:"Leave Date"},
        {name:"Status"},
        {name:"Payment"}
        
    ]
    const list=[{
        id:1,
        name:"Dipto",
        phone:"********",
        address:"Sajbarkhila",
        admit_date:"2/4/22",
        leave_date:"6/4/22",
        status:"Paid",
        payment:"$199"
    },
    {
        id:2,
        name:"Dipto",
        phone:"********",
        address:"Sajbarkhila",
        admit_date:"2/4/22",
        leave_date:"6/4/22",
        status:"Paid",
        payment:"$199"
    },{
        id:3,
        name:"Dipto",
        phone:"********",
        address:"Sajbarkhila",
        admit_date:"2/4/22",
        leave_date:"6/4/22",
        status:"Paid",
        payment:"$199"
    },{
        id:4,
        name:"Dipto",
        phone:"********",
        address:"Sajbarkhila",
        admit_date:"2/4/22",
        leave_date:"6/4/22",
        status:"Paid",
        payment:"$199"
    },{
        id:5,
        name:"Dipto",
        phone:"********",
        address:"Sajbarkhila",
        admit_date:"2/4/22",
        leave_date:"6/4/22",
        status:"Paid",
        payment:"$199"
    },{
        id:6,
        name:"Dipto",
        phone:"********",
        address:"Sajbarkhila",
        admit_date:"2/4/22",
        leave_date:"6/4/22",
        status:"Paid",
        payment:"$199"
    },{
        id:7,
        name:"Dipto",
        phone:"********",
        address:"Sajbarkhila",
        admit_date:"2/4/22",
        leave_date:"6/4/22",
        status:"Paid",
        payment:"$199"
    },{
        id:8,
        name:"Dipto",
        phone:"********",
        address:"Sajbarkhila",
        admit_date:"2/4/22",
        leave_date:"6/4/22",
        status:"Paid",
        payment:"$199"
    }]
return(
    <div className={styles.container}>
        <div className={styles.patientsContainer}>
            <div className={styles.newPatientsContainer}>
                 <div className={styles.text}>
                New Patients
            </div>
            <LineChart label={"New Patients"}/>
            </div>
            <div className={styles.leavePatientsContainer}>
                 <div className={styles.text}>
                 Patients Leave
            </div>
            <LineChart label={"Patients leave"}/>
            </div>
           
        </div>
        <div  className={styles.list}>
                <List list={list} header={header}/>
            </div>
    </div>
)
}
export default Patients;