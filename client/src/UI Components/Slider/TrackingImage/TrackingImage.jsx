import React from "react";
import Aux from "../../../HOC/Auxilary";
import "./TrackingImage.css"
const trackingImage=(props)=>{
    
    const track=[]
    for(let x=0;x<5;x++)
    {
        track.push(x)

    }
    return(
        <Aux>
        <div className="navigationTrack">
        {track.map((el)=>{
            return(
                <div className={props.position===el?"items active":"items"} key={el}></div>
            )
        })}
       </div>
      
  </Aux>
    )
   
}
export default trackingImage;