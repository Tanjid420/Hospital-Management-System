import React from "react";
import "./InnerImageShow.css"
import Aux from "../../../HOC/Auxilary";
import demoPic from "../DemoPic/DemoPic";
const innerImageShow=(props)=>{
    let imgSrc=demoPic[props.index]
    // console.log("its the index ",props.index)
    // console.log(imgSrc.link)
return (
    <Aux >
        <div className="imageShow">
            {/* <h1>HELLO BRO</h1> */}
           <img src={imgSrc.link} />  
        </div>    
    </Aux>
)
}
export  default innerImageShow;