import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import react from "react";
import reactDOM from "react-dom";
import styles from "./ModalExp.module.css";

const Backdrop = ({ setOpenModalExp }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={() => setOpenModalExp(false)}
    ></div>
  );
};
const Overlay = ({ setOpenModalExp }) => {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <h2 className={styles.h2}>Give Your Information Here</h2>
        <CardContent>
          <form className={styles.form}>
            <div className={styles.infos}>
              <label>Patient Name:</label>
              <input type="text"></input>
              <label>E-mail:</label>
              <input type="e-mail"></input>
            </div>
            <div className={styles.times}>
              <label>Phone:</label>
              <input type="number"></input>
              <label className={styles.exp}>Experience:</label>
              <input type="text"></input>
            </div>
          </form>
        </CardContent>
        <CardActions>
          <Button
            className={styles.button1}
            onClick={() => setOpenModalExp(false)}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const portalElement = document.querySelector("#overlay");

const ModalExp = ({ setOpenModalExp }) => {
  return (
    <react.Fragment>
      <Overlay setOpenModalExp={setOpenModalExp} />

      {reactDOM.createPortal(
        <Backdrop setOpenModalExp={setOpenModalExp} />,
        portalElement
      )}
    </react.Fragment>
  );
};
export default ModalExp;
