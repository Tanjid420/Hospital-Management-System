import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import react from "react";
import reactDOM from "react-dom";
import styles from "./ModalForm.module.css";

const Backdrop = ({setOpenModal}) => {
  return <div className={styles.backdrop} onClick={()=>setOpenModal(false)}></div>;
};
const Overlay = ({setOpenModal}) => {
  
  return (
    <div className={styles.container}>
    <Card className={styles.card}>
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
        <Button className={styles.button1} onClick={()=>setOpenModal(false)}>
          Submit
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};

const portalElement = document.querySelector("#overlay");


const ModalForm = ({setOpenModal}) => {
  return (
    <react.Fragment>
       <Overlay setOpenModal={setOpenModal}/>
       
      {reactDOM.createPortal(<Backdrop setOpenModal={setOpenModal}/>,portalElement)}
      
     
    </react.Fragment>
  );
};
export default ModalForm;
