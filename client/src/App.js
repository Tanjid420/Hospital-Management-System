import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Slider  from './UI Components/Slider/Slider';
import {useState} from 'react'
import ModalAppointmentForm from './Components/Layout/ModalAppointmentForm';
import PatientInfoQuery from './HOC/PatientQueryInfoSchedule';
import ModalQueryForm from './Components/Layout/ModalQueryForm';
import ShortProfile from './Components/ShortProfiles/ShortProfiles'
import DescriptionBoxes from './Components/DescriptionBoxes/descriptionBoxes';
import CaseQuestionExp from './Components/Case_Question_Exp';
import ModalQuestion from './Components/Layout/ModalQuestion';
import ModalExp from './Components/Layout/ModalExp';
import ModalConsultantForm from './Components/Layout/ModalConsultantForm';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './Components/Pages/Layout';
import About from './Components/Pages/About';
import LoginForm from './Components/LoginForm/Login';
import axios from 'axios'
import Random from "./random"
import Admin from './Components/Admin/Admin';
function App() {

  const [openModalAppointment,setOpenModalAppointment]=useState(false);
  const [openModalQuery,setOpenModalQuery] = useState(false);
  const [openModalConsultant,setOpenModalConsultant] = useState(false);

  const [openModalQuestion,setOpenModalQuestion] = useState(false);
  const [openModalExp,setOpenModalExp] = useState(false);
  
  // const willOpenModal = (props)=>{
  //   setOpenModalQuery(true);
  // }
  // const willCloseModal = (props)=>{
  //   setOpenModal(false);
  // }
  return (
    <BrowserRouter>
    
    <div className="App">
       <Navbar/> 
      <main>
      <Slider/>
      <PatientInfoQuery setOpenModalAppointment={setOpenModalAppointment} setOpenModalQuery={setOpenModalQuery} setOpenModalConsultant={setOpenModalConsultant}/>
      
      {openModalAppointment && <ModalAppointmentForm setOpenModalAppointment={setOpenModalAppointment}/>}
      
      {openModalQuery && <ModalQueryForm setOpenModalQuery = {setOpenModalQuery}/>}
      {openModalConsultant && <ModalConsultantForm setOpenModalConsultant = {setOpenModalConsultant}/>}
      <ShortProfile/>
      <CaseQuestionExp setOpenModalQuestion={setOpenModalQuestion} setOpenModalExp={setOpenModalExp}/>
      {openModalQuestion && <ModalQuestion setOpenModalQuestion={setOpenModalQuestion}/>}
      {openModalExp && <ModalExp setOpenModalExp = {setOpenModalExp}/>}
      <DescriptionBoxes/>
      </main> 
      <Footer/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
