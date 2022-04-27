import Card from "@mui/material/Card";
import react from "react";
import CardContent from "@mui/material/CardContent";
import styles from "./PatientQueryInfoSchedule.module.css";
const PatientInfoQuery = ({ setOpenModal }) => {
  return (
    <react.Fragment>
      <div className={styles.threecards}>
        <Card
          onClick={() => setOpenModal(true)}
          sx={{
            height: "200px",
            width: "200px",
            backgroundColor: "#3a86ff",
            color: "white",
            position: "100%",
            cursor: "pointer",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              paddingTop: "3.5rem",
            }}
          >
            Look For A Consultent
          </CardContent>
        </Card>
        <Card
          sx={{
            height: "200px",
            width: "200px",
            backgroundColor: "#3a86ff",
            color: "white",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              paddingTop: "3.5rem",
            }}
          >
            Take Appointment
          </CardContent>
        </Card>
        <Card
          sx={{
            height: "200px",
            width: "200px",
            backgroundColor: "#3a86ff",
            color: "white",
            position: "100%",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              paddingTop: "3.5rem",
            }}
          >
            Submit Query
          </CardContent>
        </Card>
      </div>
    </react.Fragment>
  );
};
export default PatientInfoQuery;
