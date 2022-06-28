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
import PatientPage from "./Components/Pages/PatientPage";
function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <main></main>

        <Routes>
          {/* <Route path="/" element={<> <Admin><FeaturesBox /></Admin>,<Wraper><Dashboard/></Wraper></>} />
          <Route path="/dashboard" exact element={<> <Admin><FeaturesBox/></Admin>,<Wraper><Dashboard/></Wraper></>} />
          <Route path="/doctor" exect element={<> <Admin><FeaturesBox/></Admin>,<Wraper><Doctor/></Wraper></>} />
          <Route path="/employee" exect element={<> <Admin><FeaturesBox/></Admin>,<Wraper><Employee/></Wraper></>} /> */}
          <Route path="/" exact element={<LandingPage/>} />
          <Route path="/patient" exact element={<PateintPage />} />
          <Route path="/doctor" exact element={<LoginPage/>} />
          <Route path="/employee" exact element={<LoginPage/>} />
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
