import "./App.css";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/Landing Page/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";

import PateintPage from "./Components/Pages/PatientPage";
import EmployeePage from "./Components/Pages/EmployeePage";
import Contact from "./Components/Pages/ContactPage";
import Services from "./Components/Pages/ServicesPage";
import AboutUs from "./Components/Pages/AboutPage";
import LoginPage from "./Components/Pages/LoginPage";
import DoctorPage from "./Components/Pages/DoctorPage";
import Admin from "./Components/Admin/Admin";
import FeaturesBox from "./Components/Admin/FeaturesBox/FeaturesBox";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Wraper from "./Components/Admin/Wraper/Wraper";
import Doctor from "./Components/Admin/Doctor/Doctor";
import DoctorProfile from "./Components/Profile/DoctorProfile/DoctorProfile";
import EmployeeProfile from "./Components/Profile/EmployeeProfile/EmployeeProfile";
import Employee from "./Components/Admin/Employee/Employee";
import Patients from "./Components/Admin/Patients/Patients";
import InfoUpdate from "./Components/InfoUpdate/InfoUpdate";
import { createContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import PatientPage from "./Components/Pages/PatientPage";
function App() {
  let [userState,setUserState]=useState({
    auth:"",
    id:"",
  })
  const user=userState;
  console.log(user)
  useEffect(()=>{
      //fetch data from DB and store in user autharization and id
    let temp=userState;
    temp={
      auth:"admin",
      id:"12",
      img:"https://images.unsplash.com/photo-1501705388883-4ed8a543392c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
    
    setUserState({
      auth:temp.auth,
      id:temp.id,
      img:temp.img
    });
  },[])
  return (
    <BrowserRouter>

      <div className="App">
        {/* <Navbar /> */}
        
        <main></main>
      
        <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" exect element={<LandingPage/>}/>
          <Route path="/patient" exact element={<PateintPage />} />
          <Route path="/doctor" exact element={<LoginPage/>} />
          <Route path="/employee" exact element={<LoginPage/>} />
          <Route path="/admin" element={<> <Admin/>,<Wraper user={userState}><Dashboard/></Wraper></>} />
          <Route path="admin/dashboard" exact element={<> <Admin/>,<Wraper user={userState}><Dashboard/></Wraper></>} />
          <Route path="admin/doctor" exect element={<> <Admin/>,<Wraper user={userState}><Doctor/></Wraper></>} />
          <Route path="admin/employee" exect element={<> <Admin/>,<Wraper user={userState}><Employee/></Wraper></>} />
          <Route path="admin/patients" exect element={<> <Admin/>,<Wraper user={userState}><Patients/></Wraper></>} />
          <Route path=":id/profile" exect element={<><Wraper user={userState}><InfoUpdate/></Wraper></>} />

          <Route path="admin/doctor/:id" exact element={<><Admin><FeaturesBox/></Admin>,<Wraper user={userState}><DoctorProfile/></Wraper></>} />
          <Route path="admin/employee/:id" exact element={<><Admin><FeaturesBox/></Admin>,<Wraper user={userState}><EmployeeProfile/></Wraper></>} />
          <Route path="/patient" exect element={<PateintPage />} />
          <Route path="/doctor" exact element={<DoctorPage/>} />
          <Route path="/employee" exact element={<EmployeePage/>} />
          <Route path="/services" exact element={<Services/>} />
          <Route path="/aboutus" exact element={<AboutUs/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/doctorpage" exact element={<Wraper user={userState}><DoctorPage/></Wraper>} />
          <Route path="/logout" exact element={<LoginPage/>}/>
        </Routes>
        </UserContext.Provider>
        {/* <Footer /> */}
      </div>
            
  
    </BrowserRouter>
  );
}

export default App;
