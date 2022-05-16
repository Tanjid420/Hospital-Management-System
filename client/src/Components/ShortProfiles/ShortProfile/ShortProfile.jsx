import React from "react";
import "./ShortProfile.css"
const shortProfile=(props)=>{
    return(
      
        <div onClick={()=>props.click(props.id)} className="box">
           <div>
             <img className="image" src={props.image}/>
           </div>
           <div className="name">
               {props.name}
           </div>
           <div className="degree">
            {props.degree}
           </div>
           <div className="department">
            {props.department}
           </div>
        </div>
    )
}
export default shortProfile;