import React from "react";
import "./descriptionBox.css"
const descriptionBox=(props)=>{
    return(
        <div className="description-box">
            <div className="title">
                it's a good thing
                
            </div>
            <div className="description-image">
 
                <img src={"https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"}/>
            </div>
            <div className="description">
                <div  className="description-box-button">
                    Read Me
                </div>
            </div>
        </div>
    )

}
export default descriptionBox;