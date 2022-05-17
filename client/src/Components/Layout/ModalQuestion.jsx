import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import react from "react";
import reactDOM from "react-dom";
import styles from "./ModalQuestion.module.css";

const Backdrop = ({ setOpenModalQuestion }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={() => setOpenModalQuestion(false)}
    ></div>
  );
};
const Overlay = ({ setOpenModalQuestion }) => {
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
            </div>
            <div className={styles.times}>
              <label>Phone:</label>
              <input type="number"></input>
              <label>Message:</label>
              <input type="text"></input>
            </div>
          </form>
        </CardContent>
        <CardActions>
          <Button
            className={styles.button1}
            onClick={() => setOpenModalQuestion(false)}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const portalElement = document.querySelector("#overlay");

const ModalQuestion = ({ setOpenModalQuestion }) => {
  return (
    <react.Fragment>
      <Overlay setOpenModalQuestion={setOpenModalQuestion} />

      {reactDOM.createPortal(
        <Backdrop setOpenModalQuestion={setOpenModalQuestion} />,
        portalElement
      )}
    </react.Fragment>
  );
};
export default ModalQuestion;
