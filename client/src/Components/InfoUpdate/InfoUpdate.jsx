import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styles from "./InfoUpdate.module.css"
import ProfileImage from "../ProfileImage/ProfileImage";
import { UserContext } from "../../UserContext";
const InfoUpdate=(props)=>{
    let user=useContext(UserContext)
    let [userInfo,setUserInfo]=useState({
        name:"",
        img:"",
        dept:"",
        degree:"",
        password:""
    })
    const param=useParams();
    console.log("hello bro ")
    // console.log(param.id)
    useEffect(()=>{
        //get name img degree dept from database and store it in useState
        console.log("bro i dont know")
        console.log(param.id)
        let temp={
            name:"shanto",
            img:"https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            dept:"Darmatology",
            degree:"MBBS",
            password:"shanto"
        }
        setUserInfo({
            name:temp.name,
            img:temp.img,
            dept:temp.dept,
            degree:temp.degree,
            password:temp.password
        })
    },[])
    let person=[{
        image:userInfo.img,
        name:userInfo.name,
        department:userInfo.dept,
        degree:userInfo.degree
    }]
    return(
        <div className={styles.container}>
             <div className={styles.profileImgContainer}>
               <ProfileImage person={person}/>
               <div className={styles.infoContainer}>
                   <form  className={styles.formContainer}>
                       <div className={styles.text}>
                           Upload new Picture
                       </div>
                       <div className={styles.file}>
                           <input type="file" name="file"/>
                       </div>
                       <div  className={styles.text}>
                           Change Name
                       </div>
                       
                       <div className={styles.file}>
                           <input className={styles.input} type="text" name="name"/>
                       </div>
                      {user.auth==="doctor"? <div className={styles.additionalInfo}>
                       <div  className={styles.text}>
                           Change Department
                       </div>
                       <div className={styles.file}>
                           <input className={styles.input}  type="text" name="department"/>
                       </div>
                       <div  className={styles.text}>
                             Change Degree
                       </div>
                       <div className={styles.file}>
                           <input className={styles.input}  type="text" name="degree"/>
                       </div>
                       </div>:null}
                       <div  className={styles.text}>
                             Change Password
                       </div>
                       <div className={styles.file}>
                           <input className={styles.input}  type="password" name="password"/>
                       </div>
                       <input className={styles.input1}  type="submit"/>   
                   </form>
               </div>
            </div>
        </div>
           
    )
}
export default InfoUpdate