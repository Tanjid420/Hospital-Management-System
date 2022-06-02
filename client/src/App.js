import "./App.css";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/Landing Page/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route} from "react-router-dom";

import PateintPage from "./Components/Pages/PatientPage";
import DoctorPage from "./Components/Pages/DoctorPage";
import EmployeePage from "./Components/Pages/EmployeePage";
import Contact from "./Components/Pages/ContactPage";
import Services from "./Components/Pages/ServicesPage";
import AboutUs from "./Components/Pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main></main>

        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/patient" exect element={<PateintPage />} />
          <Route path="/doctor" exact element={<DoctorPage/>} />
          <Route path="/employee" exact element={<EmployeePage/>} />
          <Route path="/services" exact element={<Services/>} />
          <Route path="/aboutus" exact element={<AboutUs/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
