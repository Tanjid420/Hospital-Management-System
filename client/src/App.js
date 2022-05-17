import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Slider  from './UI Components/Slider/Slider';
import {useState} from 'react'
import ModalAppointmentForm from './Components/Layout/ModalAppointmentForm';
import PatientInfoQuery from './HOC/PatientQueryInfoSchedule';
import ModalQueryForm from './Components/Layout/ModalQueryForm';
import CaseQuestionExp from './Components/Case_Question_Exp';
import ModalQuestion from './Components/Layout/ModalQuestion';
import ModalExp from './Components/Layout/ModalExp';
import ModalConsultantForm from './Components/Layout/ModalConsultantForm';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './Components/Pages/Layout';
import About from './Components/Pages/About';
import ShortProfiles from "./Components/ShortProfiles/ShortProfiles"
import DescriptionBoxes from "./Components/DescriptionBoxes/descriptionBoxes"




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
    <div className="App">
      <Navbar/>
      <main>
      <Slider/>
      <PatientInfoQuery setOpenModalAppointment={setOpenModalAppointment} setOpenModalQuery={setOpenModalQuery} setOpenModalConsultant={setOpenModalConsultant}/>
      
      {openModalAppointment && <ModalAppointmentForm setOpenModalAppointment={setOpenModalAppointment}/>}
      
      {openModalQuery && <ModalQueryForm setOpenModalQuery = {setOpenModalQuery}/>}
      {openModalConsultant && <ModalConsultantForm setOpenModalConsultant = {setOpenModalConsultant}/>}
      <ShortProfiles/>
      <CaseQuestionExp setOpenModalQuestion={setOpenModalQuestion} setOpenModalExp={setOpenModalExp}/>
      {openModalQuestion && <ModalQuestion setOpenModalQuestion={setOpenModalQuestion}/>}
      {openModalExp && <ModalExp setOpenModalExp = {setOpenModalExp}/>}
      <DescriptionBoxes/>
      </main>


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/about' element={<About/>}/>

        </Route>
      </Routes>
      </BrowserRouter>

      
      <Footer/>
    </div>
  );
}

export default App;
