import React from "react";
import classes from "./ButtonSlider.css"
import Aux from "../../../HOC/Auxilary";
import leftArrow from "../Icons/left-arrow.svg"
import rightArrow from "../Icons/right-arrow.svg"
const buttonSlider=(props)=>{
    console.log(props.direction)
   let style={
       marginLeft:"2%",
       marginTop:"14%",
       marginBottom:"0px",
       marginRight:"0px"

   }
   console.log(props.position)
   if(props.position=="left")
   {
       style=style;
   }
   else{
       style.marginLeft="93%"
       
   }
return(
    <Aux>
        <button className="btn-slider" style={style} onClick={props.direction} >
            <div className="img">
                 {props.position=="left"? (<img src={leftArrow}/>):(<img src={rightArrow}/>)}
            </div>
           
        </button>
    </Aux>
)
}
export default buttonSlider;