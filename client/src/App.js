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
      auth:"doctor",
      id:"12"
    }
    
    setUserState({
      auth:temp.auth,
      id:temp.id
    });
  },[])
  return (
    <BrowserRouter>

      <div className="App">
        <Navbar />
        
        <main></main>
      
        <UserContext.Provider value={user}>
        <Routes>

          {/* <Route path="/patient" exact element={<PateintPage />} />
          <Route path="/doctor" exact element={<LoginPage/>} />
          <Route path="/employee" exact element={<LoginPage/>} /> */}
          <Route path="/" element={<> <Admin/>,<Wraper><Dashboard/></Wraper></>} />
          <Route path="/dashboard" exact element={<> <Admin/>,<Wraper><Dashboard/></Wraper></>} />
          <Route path="/doctor" exect element={<> <Admin/>,<Wraper><Doctor/></Wraper></>} />
          <Route path="/employee" exect element={<> <Admin/>,<Wraper><Employee/></Wraper></>} />
          <Route path="/patients" exect element={<> <Admin/>,<Wraper><Patients/></Wraper></>} />
          <Route path="/profile/:id" exect element={<> <Admin/>,<Wraper><InfoUpdate/></Wraper></>} />

          <Route path="/doctor/:id" exact element={<><Admin><FeaturesBox/></Admin>,<Wraper><DoctorProfile/></Wraper></>} />
          <Route path="/employee/:id" exact element={<><Admin><FeaturesBox/></Admin>,<Wraper><EmployeeProfile/></Wraper></>} />
          <Route path="/patient" exect element={<PateintPage />} />
          <Route path="/doctor" exact element={<DoctorPage/>} />
          <Route path="/employee" exact element={<EmployeePage/>} />
          <Route path="/services" exact element={<Services/>} />
          <Route path="/aboutus" exact element={<AboutUs/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/doctorpage" exact element={<DoctorPage/>} />
        </Routes>
        </UserContext.Provider>
        {/* <Footer /> */}
      </div>
            
  
    </BrowserRouter>
  );
}

export default App;
