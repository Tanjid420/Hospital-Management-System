import "./App.css";
import LandingPage from "./Components/Landing Page/LandingPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import { useState } from "react";
import Admin from "./Components/Admin/Admin";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Doctor from "./Components/Admin/Doctor/Doctor";
import Employee from "./Components/Admin/Employee/Employee";
import FeaturesBox from "./Components/Admin/FeaturesBox/FeaturesBox";
import DocumentView from "./Components/Admin/Notification/DocumentView/DocumentView";
import Notification from "./Components/Admin/Notification/Notification";
import Patients from "./Components/Admin/Patients/Patients";
import Wraper from "./Components/Admin/Wraper/Wraper";
import InfoUpdate from "./Components/InfoUpdate/InfoUpdate";
import AboutUs from "./Components/Pages/AboutPage";
import BloodBank from "./Components/Pages/BloodBank";
import ChemoTherapy from "./Components/Pages/ChemoTherapy";
import Contact from "./Components/Pages/ContactPage";
import Counseling from "./Components/Pages/Counseling";
import DiabetesCenter from "./Components/Pages/DiabetesCenter";
import DoctorDetails from "./Components/Pages/DoctorDetails";
import DoctorPage from "./Components/Pages/DoctorPage";
import Emergency from "./Components/Pages/Emergency";
import EmployeePage from "./Components/Pages/EmployeePage";
import LoginPage from "./Components/Pages/LoginPage";
import PatientPage from "./Components/Pages/PatientPage";
import Pharmacy from "./Components/Pages/Pharmacy";
import Physiotherapy from "./Components/Pages/Physiotherapy";
import PrayerRoom from "./Components/Pages/PrayerRoom";
import RoomCategory from "./Components/Pages/Room Category";
import Services from "./Components/Pages/ServicesPage";
import StrokeCenter from "./Components/Pages/StrokeCenter";
import UserDoctorPage from "./Components/Pages/UserDoctorPage";
import UserEmployeeProfile from "./Components/Pages/UserEmployeeProfile";
import Vaccination from "./Components/Pages/Vaccination";
import DoctorProfile from "./Components/Profile/DoctorProfile/DoctorProfile";
import EmployeeProfile from "./Components/Profile/EmployeeProfile/EmployeeProfile";
import { UserContext } from "./UserContext";
import ReceptionistInvoice from "./Components/Pages/ReceptionistInvoice";
import Receptionist from "./Components/Pages/Receptionist";
import AvailableBeds from "./Components/Pages/AvailableBeds";
function App() {
  // const token=localStorage.getItem("token")
  // console.log(token)
  let [userState,setUserState]=useState({})
  const dataHandler=(data)=>{
    console.log(data)
    setUserState(data)
  }
  const user=userState;
  return (
    <BrowserRouter>

      <div className="App">
        {/* <Navbar /> */}
        
        <main></main>
      
        <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" exact element={<LandingPage/>}/>
          <Route path="/receptionist/invoice" exect element={<ReceptionistInvoice/>}/>
          <Route path='/availablebeds' exact element={<AvailableBeds/>}/>
          <Route path="/patient" exact element={<PatientPage />} />
          <Route path="/doctor" exact element={<LoginPage data={dataHandler}/>} />
          <Route path="/receptionist" exact element={<Receptionist/>}/>
          <Route path="/employee" exact element={<LoginPage data={dataHandler}/>} />
          <Route path="/admin" element={<> <Admin/>,<Wraper ><Dashboard/></Wraper></>} />
          <Route path="admin/dashboard" exact element={<> <Admin/>,<Wraper ><Dashboard/></Wraper></>} />
          <Route path="admin/doctor" exect element={<> <Admin/>,<Wraper ><Doctor/></Wraper></>} />
          <Route path="admin/employee" exect element={<> <Admin/>,<Wraper><Employee/></Wraper></>} />
          <Route path="admin/patients" exect element={<> <Admin/>,<Wraper ><Patients/></Wraper></>} />
          <Route path="admin/profile" exect element={<><Admin/>,<Wraper ><InfoUpdate/></Wraper></>} />
          <Route path="admin/notification/:id" exect element={<><Admin/>,<Wraper ><DocumentView/></Wraper></>} />
         <Route path="admin/notification" exect element={<><Admin/>,<Wraper ><Notification/></Wraper></>} />
          <Route path=":id/profile" exect element={<><Wraper ><InfoUpdate/></Wraper></>} />

          <Route path="admin/doctor/:id" exact element={<><Admin><FeaturesBox/></Admin>,<Wraper ><DoctorProfile/></Wraper></>} />
          <Route path="admin/employee/:id" exact element={<><Admin><FeaturesBox/></Admin>,<Wraper><EmployeeProfile/></Wraper></>} />
          <Route path="/patient" exect element={<PatientPage />} />
          <Route path="/doctor" exact element={<DoctorPage/>} />
          <Route path="/employee" exact element={<EmployeePage/>} />
          <Route path="/services" exact element={<Services/>} />
          <Route path="/aboutus" exact element={<AboutUs/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/doctorpage" exact element={<Wraper user={userState}><DoctorPage/></Wraper>} />
          <Route path="/doctorprofile" exact element={<UserDoctorPage/>}/>
          <Route path="/doctorpage" exact element={<Wraper ><DoctorPage/></Wraper>} />
          <Route path="/employeepage" exact element={<Wraper><EmployeePage/></Wraper>} />
          <Route path="/logout" exact element={<LoginPage/>}/>
          <Route path='/employeeprofile' exact element={<UserEmployeeProfile/>}/>
          <Route path='patient/:doctordetails/:Id' exact element={<DoctorDetails/>}/>
          <Route path="services/bloodbank" exact element={<BloodBank/>}/>
          <Route path="/chemotherapy" exact element={<ChemoTherapy/>}/>
          <Route path="/diabetescenter" exact element={<DiabetesCenter/>}/>
          <Route path="/emergency" exact element={<Emergency/>}/>
          <Route path="/pharmacy" exact element={<Pharmacy/>}/>
          <Route path="/physiotherapy" exact element={<Physiotherapy/>}/>
          <Route path="/prayerroom" exact element={<PrayerRoom/>}/>
          <Route path="/counseling" exact element={<Counseling/>}/>
          <Route path="/roomcategory" exact element={<RoomCategory/>}/>
          <Route path="/strokecenter" exact element={<StrokeCenter/>}/>
          <Route path="/vaccination" exact element={<Vaccination/>}/>
          
          <Route path="/doctorpage" exact element={<Wraper ><DoctorPage/></Wraper>} />
          <Route path="/employeepage" exact element={<Wraper><EmployeePage/></Wraper>} />
          <Route path="/logout" exact element={<LoginPage/>}/>
        </Routes>
        </UserContext.Provider>
        {/* <Footer /> */}
      </div>
            
  
    </BrowserRouter>
  );
}

export default App;
