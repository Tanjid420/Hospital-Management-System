import React, { useContext} from "react";
import styles from "./Admin.module.css"
import FeaturesBox from "./FeaturesBox/FeaturesBox";
const Admin=(props)=>{
    return(
      
         <div className={styles.adminContainer} >
          <FeaturesBox />
        </div>
       
    )
}
export default Admin;
