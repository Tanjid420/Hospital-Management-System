import React from "react";
import Aux from "../../../HOC/Auxilary";
import "./TrackingImage.css"
const trackingImage=(props)=>{
    console.log(`track position ${props.position}`)
    const track=[]
    for(let x=0;x<5;x++)
    {
        track.push(<div className="items"></div>)

    }
    let addClass=track.indexOf(props.position);
    track[props.position]=(<div className="items active"></div>)
    return(
        <Aux>
        <div className="navigationTrack">
        {track.map((el)=>{

            return el
        })}
       </div>
      
  </Aux>
    )
   
}
export default trackingImage;