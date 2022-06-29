import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./NavbarLogin.module.css"
const NavbarLogin=()=>{
    const user=useContext(UserContext)
    const location=useLocation();
    let path=location.pathname
    console.log(user.img)
    return(
        <nav className={styles.container}>
            <div className={styles.innerContainer}>
            <div className={styles.logout}>
                <Link className={styles.link}to={"/"+"logout"}>logout</Link>
            </div>
            <div className={styles.profile}>
            <Link className={styles.link} to={path+"/"+"profile"} >Profile</Link>   
            </div>
            <div className={styles.profileContainer}>
                <img className={styles.img} src={user.img}/>
            </div>
          
            </div>
           
        </nav>
    )
}
export default NavbarLogin