/* eslint-disable no-use-before-define */

import react,{useState,useEffect} from 'react';
import Axios from 'axios';

const DoctorListByDept = ()=>{
    const[showDoctors,setShowDoctors]=useState([]);
    const gettingData = async (e) => {
        e.preventDefault();
        const res = await Axios.get("http://localhost:4000/searchconsultant", 
            // console.log(res.data.data),
          setShowDoctors(res.data)
        );
    }
    useEffect(()=>{gettingData()},[]);
    return(
        <react.Fragment>
            <ul>{showDoctors.map(doctors=><li>{doctors.Name} {doctors.Degree_Name}</li>)}</ul>
        </react.Fragment>
    );
}

export default DoctorListByDept;