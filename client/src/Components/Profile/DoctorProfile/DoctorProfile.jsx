import React, { useEffect } from "react";
import { useLinkClickHandler, useParams } from "react-router-dom";
import styles from "./DoctorProfile.module.css"
import LineChart from "../../Chart/LineChart/Linechart/LineChart";
import List from "../../List/List";
const DoctorProfile=(props)=>{
    const params=useParams();
    let id=params.id
    useEffect(()=>{
        // get request from database
        console.log(id);
    },[])
    console.log(params.id)
    const clickHandler=(id)=>{
        console.log(`its user id ${id}`)
        // post request to update the shift
    }
    const doctor=[
    {
        id:7,
        name:"Dr. Ashraful",
        degree:"MBBS FCPS FRCS",
        department:"orthopadics",
        image:"  https://images.unsplash.com/photo-1501705388883-4ed8a543392c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }]
    const shift={
        from:"12:20",
        to:"05:00"
    }
    let auth="admin"
    const header=[
        {name:"No."},
        {name:"Name"},
        {name:"Date"},
        {name:"Address"},
        {name:"Payment"}
    ]
    const list=[
        {
            id:1,
            name:"Shanto",
            date:"02/03/22",
            address:"Sherpur",
            payment:"$100"
        },
        {
            id:2,
            name:"Shanto",
            date:"02/03/22",
            address:"Sherpur",
            payment:"$100"
        },
        {
            id:3,
            name:"Shanto",
            date:"02/03/22",
            address:"Sherpur",
            payment:"$100"
        },
        {
            id:4,
            name:"Shanto",
            date:"02/03/22",
            address:"Sherpur",
            payment:"$100"
        },
        {
            id:5,
            name:"Shanto",
            date:"02/03/22",
            address:"Sherpur",
            payment:"$100"
        }

    ]
    return(
        <div className={styles.container}>
          
               <div className={styles.profileContainer}>
                   <img className={styles.image} src="https://images.unsplash.com/photo-1544536871-6e891baa163f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                   <div className={styles.topImgContainer}>
                       <img className={styles.topImg} src={doctor[0].image}/>
                       <div className={styles.nameContainer}>
                           {doctor[0].name}
                       </div>
                       <div className={styles.deptContainer}>
                            {doctor[0].department}
                       </div>
                       <div className={styles.degContainer}>
                            {doctor[0].degree}
                       </div>
                   </div>
               </div>
            <div className={styles.chartContainer}>
                <div className={styles.chart}>
                    <LineChart label={"Patient"}/>
                </div>
                <div className={styles.shiftContainer}>
                  <div className={styles.text}>
                      Shift
                  </div>
                  <div>
                      {auth=="admin"?<span className={styles.text}><span>From</span><input className={styles.shiftAdmin} value={shift.from} name="from" type="time"/><span className={styles.text}>To</span><input className={styles.shiftAdmin} value={shift.to} name="to" type="time"/><input className={styles.text1} onClick={()=>clickHandler(id)} type="submit"/></span>:<span><span className={styles.text}>From</span><span className={styles.shift}> {shift.from}</span><span className={styles.text}>To</span><span className={styles.shift}> {shift.to}</span></span>}
                      
                        
                  </div>
                </div>
                
            </div> 
            <div  className={styles.list}>
                <List list={list} header={header}/>
            </div>
        </div>
    )
}
export default DoctorProfile;
