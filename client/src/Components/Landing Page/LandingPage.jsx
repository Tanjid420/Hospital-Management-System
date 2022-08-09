import react from "react";
import { Link } from "react-router-dom";
import doctor from "../../LandingPageImage/doctor-holding-clipboard-with-patient-info-vector.jpg";
import employee from "../../LandingPageImage/nurse-with-uniform-female-nurse-hospital-worker-vector.jpg";
import sickMan from "../../LandingPageImage/sick-man-holding-saline-bag-in-hospital.jpg";
import Navbar2 from "../Navbar/Navbar2";
import styles from "./LandingPage.module.css";
import DoctorListByDept from "../Pages/DoctorListByDept";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <react.Fragment>
      <Navbar2 />
      <h1>You Are A... </h1>
      <div className={styles.container1}>
        <div>
          <Link to="/doctor">
            <img className={styles.image} src={doctor} alt="s" />
          </Link>
          <h2 className={styles.h2}>Doctor</h2>
        </div>
        <div>
          <Link to="/patient">
            <img className={styles.image} alt="hi" src={sickMan} />
          </Link>
          <h2 className={styles.h2}>Patient</h2>
        </div>
      </div>
      <Link to="/employee">
        <div className={styles.container2}>
          <img className={styles.image} alt="s" src={employee} />
        </div>
      </Link>
      <h2 className={styles.h2}>Empolyee</h2>
      <Footer/>
      
    </react.Fragment>
  );
};
export default LandingPage;
