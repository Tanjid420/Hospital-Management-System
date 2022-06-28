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
<<<<<<< HEAD
import LoginPage from "./Components/Pages/LoginPage";
import DoctorPage from "./Components/Pages/DoctorPage";
=======
import Admin from "./Components/Admin/Admin";
import FeaturesBox from "./Components/Admin/FeaturesBox/FeaturesBox";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Wraper from "./Components/Admin/Wraper/Wraper";
import Doctor from "./Components/Admin/Doctor/Doctor";
import DoctorProfile from "./Components/Profile/DoctorProfile/DoctorProfile";
import EmployeeProfile from "./Components/Profile/EmployeeProfile/EmployeeProfile";
import Employee from "./Components/Admin/Employee/Employee";
>>>>>>> fdaa380925a2678c84864b0ffa7dcf7d7e71cf4c
function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <main></main>

        <Routes>
          <Route path="/" element={<> <Admin><FeaturesBox /></Admin>,<Wraper><Dashboard/></Wraper></>} />
          <Route path="/dashboard" exact element={<> <Admin><FeaturesBox/></Admin>,<Wraper><Dashboard/></Wraper></>} />
          <Route path="/doctor" exect element={<> <Admin><FeaturesBox/></Admin>,<Wraper><Doctor/></Wraper></>} />
          <Route path="/employee" exect element={<> <Admin><FeaturesBox/></Admin>,<Wraper><Employee/></Wraper></>} />

<<<<<<< HEAD
          <Route path="/patient" exact element={<PateintPage />} />
          <Route path="/doctor" exact element={<LoginPage/>} />
          <Route path="/employee" exact element={<LoginPage/>} />
=======
          <Route path="/doctor/:id" exact element={<><Admin><FeaturesBox/></Admin>,<Wraper><DoctorProfile/></Wraper></>} />
          <Route path="/employee/:id" exact element={<><Admin><FeaturesBox/></Admin>,<Wraper><EmployeeProfile/></Wraper></>} />
          <Route path="/patient" exect element={<PateintPage />} />
          <Route path="/doctor" exact element={<DoctorPage/>} />
          <Route path="/employee" exact element={<EmployeePage/>} />
>>>>>>> fdaa380925a2678c84864b0ffa7dcf7d7e71cf4c
          <Route path="/services" exact element={<Services/>} />
          <Route path="/aboutus" exact element={<AboutUs/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/doctorpage" exact element={<DoctorPage/>} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
