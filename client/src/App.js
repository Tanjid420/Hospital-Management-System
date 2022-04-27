
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Slider  from './UI Components/Slider/Slider';
import {useState} from 'react'
import ModalForm from './Components/Layout/ModalForm';
import PatientInfoQuery from './HOC/PatientQueryInfoSchedule';






function App() {
  const [openModal,setOpenModal]=useState(false);
  // const willOpenModal = (props)=>{
  //   setOpenModal(true);
  // }
  // const willCloseModal = (props)=>{
  //   setOpenModal(false);
  // }
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <PatientInfoQuery setOpenModal={setOpenModal}/>
      
      {openModal && <ModalForm setOpenModal={setOpenModal}/>}
      
      <Footer/>
    </div>
  );
}

export default App;
