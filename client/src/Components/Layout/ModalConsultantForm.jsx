
import react from 'react';
import reactDOM from 'react-dom'
import styles from "./ModalConsultantForm.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button  from '@mui/material/Button';

const Backdrop = ({ setOpenModalConsultant }) => {
    return (
      <div className={styles.backdrop} onClick={() => setOpenModalConsultant(false)}></div>
    );
  };
  const Overlay = ({ setOpenModalConsultant }) => {
    return (
      <div className={styles.container}>
        <Card className={styles.card}>
          <h2 className={styles.h2}>Give Your Information Here</h2>
          <CardContent>
            <form className={styles.form}>
              <div className={styles.infos}>
                <label>Name:</label>
                <input type="text"></input>
                
              </div>
              <div className={styles.times}>
                <label>Depertment:</label>
                <input type="text"></input>
                
              </div>
            </form>
          </CardContent>
          <CardActions>
            <Button
              className={styles.button1}
              onClick={() => setOpenModalConsultant(false)}
            >
              Search
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  };
  const portalElement = document.querySelector("#overlay");

const ModalConsultantForm = ({ setOpenModalConsultant }) => {
  return (
    <react.Fragment>
      <Overlay setOpenModalConsultant={setOpenModalConsultant} />

      {reactDOM.createPortal(
        <Backdrop setOpenModalConsultant={setOpenModalConsultant} />,
        portalElement
      )}
    </react.Fragment>
  );
};
export default ModalConsultantForm;




