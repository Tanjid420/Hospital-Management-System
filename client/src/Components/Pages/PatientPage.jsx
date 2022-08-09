
import react, {useState} from 'react'
import ModalAppointmentForm from '../Layout/ModalAppointmentForm';
import PatientInfoQuery from '../../HOC/PatientQueryInfoSchedule';
import ModalQueryForm from '../Layout/ModalQueryForm';
import CaseQuestionExp from '../Case_Question_Exp';
import ModalQuestion from '../Layout/ModalQuestion';
import ModalExp from '../Layout/ModalExp';
import ModalConsultantForm from '../Layout/ModalConsultantForm';
import ShortProfiles from "../ShortProfiles/ShortProfiles"
import DescriptionBoxes from "../DescriptionBoxes/descriptionBoxes"
import Slider from '../../UI Components/Slider/Slider'
import Footer from "../Footer/Footer";

import Navbar2 from '../Navbar/Navbar2';
import DoctorListByDept from './DoctorListByDept';
import Receptionist from './ReceptionistInvoice';


const PatientPage = ()=> {
    const [openModalAppointment,setOpenModalAppointment]=useState(false);
    const [openModalQuery,setOpenModalQuery] = useState(false);
    const [openModalConsultant,setOpenModalConsultant] = useState(false);
  
    const [openModalQuestion,setOpenModalQuestion] = useState(false);
    const [openModalExp,setOpenModalExp] = useState(false);

    return (
        <react.Fragment>
         {/* <Navbar/> */}
         <Navbar2/>
          <main>
          <Receptionist/>
          {/* <Slider/>
          
          <PatientInfoQuery setOpenModalAppointment={setOpenModalAppointment} setOpenModalQuery={setOpenModalQuery} setOpenModalConsultant={setOpenModalConsultant}/>
          
          {openModalAppointment && <ModalAppointmentForm setOpenModalAppointment={setOpenModalAppointment}/>}
          
          {openModalQuery && <ModalQueryForm setOpenModalQuery = {setOpenModalQuery}/>}
          {openModalConsultant && <ModalConsultantForm setOpenModalConsultant = {setOpenModalConsultant}/>}
          <ShortProfiles/>
          <CaseQuestionExp setOpenModalQuestion={setOpenModalQuestion} setOpenModalExp={setOpenModalExp}/>
          {openModalQuestion && <ModalQuestion setOpenModalQuestion={setOpenModalQuestion}/>}
          {openModalExp && <ModalExp setOpenModalExp = {setOpenModalExp}/>}
          <DescriptionBoxes/> */}
          </main>
          
          {/* <Footer/> */}

          
    </react.Fragment>
  );
}

export default PatientPage;