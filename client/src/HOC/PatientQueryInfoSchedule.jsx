import Card from "@mui/material/Card";
import react from "react";
import CardContent from "@mui/material/CardContent";
import styles from "./PatientQueryInfoSchedule.module.css";
const PatientInfoQuery = (props) => {
  
  return (
    <react.Fragment>
      <div className={styles.threecards}>
        <Card
          onClick={() => props.setOpenModalAppointment(true)}
          sx={{
            height: "200px",
            width: "200px",
            backgroundColor: "#3a86ff",
            color: "white",
            position: "100%",
            cursor: "pointer",
            boxShadow:"inset 0 0 0 0 #42FBF2",
            transition:"ease-out .3s",
            outline:"none",
            
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
        onClick={()=> props.setOpenModalConsultant(true)}
          sx={{
            height: "200px",
            width: "200px",
            backgroundColor: "#3a86ff",
            color: "white",
            cursor: "pointer"
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
            Look for Consultant
          </CardContent>
        </Card>
        <Card onClick={()=> props.setOpenModalQuery(true)}
          sx={{
            height: "200px",
            width: "200px",
            backgroundColor: "#3a86ff",
            color: "white",
            position: "100%",
            cursor: "pointer"
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
