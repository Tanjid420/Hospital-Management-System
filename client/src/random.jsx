import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { ra } from "./api/api";
const Random=()=>{
    let [data,setData]=useState("")
    let location=useLocation()
    let params=useParams()
    // console.log(params)
    // console.log(location)
    let history=useNavigate();
    console.log(history)
    useEffect(()=>{
        const hello=async()=>{
        const post=await ra("/hello")
        console.log(post.data)
        let newData={...data}
        newData=post.data
        setData(newData)
        }
        hello()
        // history('/hello')
        console.log(data)
    },[])
    return(
        <div>
            <h1>{data}</h1>
        </div>
    )
}
export default Random