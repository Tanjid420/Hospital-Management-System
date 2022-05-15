import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import react from "react";
import styles from "./ModalQueryForm.module.css";
const Backdrop = (setOpenModalQuery) => {
  return <div className={styles.backdrop} onClick={()=>setOpenModalQuery(false)}></div>;
};

const Overlay = (setOpenModalQuery) => {
    return(
        <div className={styles.container}>
    <Card className={styles.card}>
      <h2 className={styles.h2}>Submit Your Query Here</h2>
      <CardContent>
        <form className={styles.form}>
          <div className={styles.infos}> 
            <label>Name:</label>
            <input type="text" />
            <label>Phone:</label>
            <input type="number" />
          </div>
          <div className={styles.message}>
            <label>E-mail:</label>
            <input type="email" />
            <label>Your Message:</label>
            <input type="text" />
          </div>
        </form>
      </CardContent>
      <CardActions>
        <Button className={styles.button} onClick={()=>setOpenModalQuery(false)}>Submit</Button>
      </CardActions>
    </Card>
  </div>
    );
  
};
const ModalQueryForm = (setOpenModalQuery) => {
  return (
    <react.Fragment>
      <Overlay setOpenModalQuery={setOpenModalQuery}/>
      <Backdrop setOpenModalQuery={setOpenModalQuery}/>
    </react.Fragment>
  );
};
export default ModalQueryForm;
