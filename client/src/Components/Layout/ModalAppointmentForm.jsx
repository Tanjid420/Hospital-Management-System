import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import react from "react";
import reactDOM from "react-dom";
import styles from "./ModalAppointmentForm.module.css";

const Backdrop = ({ setOpenModalAppointment }) => {
  return (
    <div className={styles.backdrop} onClick={() => setOpenModalAppointment(false)}></div>
  );
};
const Overlay = ({ setOpenModalAppointment }) => {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <h2 className={styles.h2}>Give Your Information Here</h2>
        <CardContent>
          <form className={styles.form}>
            <div className={styles.infos}>
              <label>Name:</label>
              <input type="text"></input>
              <label>E-mail:</label>
              <input type="e-mail"></input>
              <label>Phone:</label>
              <input type="number"></input>
            </div>
            <div className={styles.times}>
              <label>Time:</label>
              <input type="time"></input>
              <label>Date:</label>
              <input type="date"></input>
              <label>Medical History:</label>
              <input type="text"></input>
            </div>
          </form>
        </CardContent>
        <CardActions>
          <Button
            className={styles.button1}
            onClick={() => setOpenModalAppointment(false)}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const portalElement = document.querySelector("#overlay");

const ModalAppointmentForm = ({ setOpenModalAppointment }) => {
  return (
    <react.Fragment>
      <Overlay setOpenModalAppointment={setOpenModalAppointment} />

      {reactDOM.createPortal(
        <Backdrop setOpenModalAppointment={setOpenModalAppointment} />,
        portalElement
      )}
    </react.Fragment>
  );
};
export default ModalAppointmentForm;
