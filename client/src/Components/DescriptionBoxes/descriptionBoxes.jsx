import React from "react";
import "./descriptionBoxes.css"
import DescriptionBox from "./DescriptionBox/descriptionBox";
const descriptionBoxes=()=>{
    return(
        <div className="description-boxes">
            <DescriptionBox/>
            <DescriptionBox/>
            <DescriptionBox/>
            
        </div>
    )
}
export default descriptionBoxes;