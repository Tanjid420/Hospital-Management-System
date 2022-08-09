import react,{useState,useEffect} from 'react';
import Axios from 'axios';
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar/Navbar2';
import {Link} from 'react-router-dom'
import styles from './Receptionist1.module.css'
import beds from '../../ReceptionistImage/Beds.jpg'
import invoice from "../../ReceptionistImage/Receptionist Invoice.jpg"
import axios from 'axios';




const Receptionist = ()=>{
  

    return(
        <react.Fragment>
            <Navbar2/>
            <main><h1>Receptionist</h1>
            <div className={styles.container1}>
        <div>
          <Link to="/receptionist/invoice">
            <img className={styles.image} src={invoice} alt="s" />
          </Link>
          <h2 className={styles.h2}>Invoice</h2>
        </div>
        <div>
          <Link to="/availablebeds">
            <img className={styles.image} alt="hi" src={beds} />
          </Link>
          <h2 className={styles.h2}>Available Beds</h2>
        </div>
      </div>
            </main>
            <Footer/>
            
        </react.Fragment>
    )
}
export default Receptionist;