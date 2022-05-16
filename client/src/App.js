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
function App() {
  const [openModalAppointment,setOpenModalAppointment]=useState(false);
  const [openModalQuery,setOpenModalQuery] = useState(false);
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
      <PatientInfoQuery setOpenModalAppointment={setOpenModalAppointment}/>
      
      {openModalAppointment && <ModalAppointmentForm setOpenModalAppointment={setOpenModalAppointment}/>}
      
      {openModalQuery && <ModalQueryForm setOpenModalQuery = {setOpenModalQuery}/>}
      <ShortProfile/>
      <DescriptionBoxes/>
      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
