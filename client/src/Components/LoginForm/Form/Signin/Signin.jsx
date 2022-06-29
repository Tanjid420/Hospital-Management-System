import Axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import doctor from "../../../../assets/doctor.jpg";
import styles from "./Signin.module.css";
import DoctorPage from "../../../Pages/DoctorPage";

import {
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom';
const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const submitHandler=()=>
  //     console.log("hello")
  // }
  Axios.defaults.withCredentials=true;
  const signin = async (e) => {
    e.preventDefault();
    const res = await Axios.post("http://localhost:4000/signin", {
      email: email,
      password: password,
    });
    console.log(res);

   if(res.status===200){
  
    localStorage.setItem('token', res.data.token);
    console.log("login successfull");
    navigate('/doctorpage');
   }else{
    console.log("Error Occured");
   }
  };
  
  

  // useEffect(()=>{
  //     // Axios.get("http://localhost:4000/signin").then((response)=>{
  //     //     console.log(response);

  //     // })

  // },[])
  return (
    <div className={styles.signinContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.img}>
          <img src={doctor} alt="login" />
        </div>
      </div>
      <div className={styles.loginText}>
        <h1>Signin</h1>
      </div>
      <form className={styles.form}>
        <label>
          <input
            type="text"
            className={styles.email}
            name="email"
            placeholder="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          <input
            className={styles.password}
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          <input
            className={styles.submit}
            type="submit"
            name="submit"
            placeholder="submit"
            onClick={signin}
          />
        </label>
      </form>
      <div>
        <Link to="/forget">Forget Password?</Link>
      </div>
    </div>
  );
};
export default Signin;
