import react,{useState} from "react";

import styles from "./Receptionist.module.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Footer from '../Footer/Footer'
import TextField from '@mui/material/TextField';
import test from "../../static/test";
import Navbar2 from "../Navbar/Navbar2";
const ReceptionistInvoice = () => {
  const [totalMoney,setTotalMoney] = useState(0);
  
  return (
    <react.Fragment>
      <Navbar2/>
      <h1>Receptionist</h1>
      <div className={styles.container}>
        <div className={styles.tests}>
        {test.map((item, i) => (
          
    <div className={styles.div2} >
            <div className={styles.blood}><h4>{item.name}</h4>
            <div className={styles.amount}>{item.price}Tk</div></div>
            <div className={styles.buttons}>
              <button className={styles.add} onClick={ ()=>{setTotalMoney(totalMoney+item.price)}} >+</button>
              <button className={styles.delete} onClick={ ()=>{setTotalMoney(totalMoney-item.price)}}>-</button>
            </div>
          </div>

 ))}
         
        </div>
        <div className={styles.patientform}>
          <div className={styles.boxshadow}>
          <Card className={styles.card}>
          <div className={styles.card_heading}><h2 className={styles.h2}>Patient Invoice</h2></div>
           
            <CardContent>
              
            
              <form className={styles.form}>
              
                <div className={styles.infos}>
                <TextField id="outlined-basic" label="Name" variant="outlined" type="text" />
                  
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
                </div>
                <div className={styles.date}>
                <TextField id="outlined-basic" label="Phone" variant="outlined" type="number" />
                <TextField id="outlined-basic" label="" variant="outlined" type="date" />
                </div>
              </form>
              <div className={styles.totalamount}>
              <h3>Total Amount</h3>
              <p>{totalMoney}TK</p>
              </div>
             
            </CardContent>
            <CardActions>
              <Button className={styles.button1}>Submit</Button>
            </CardActions>
          </Card>
          </div>
        </div>
      </div>
      <Footer/>
      
    </react.Fragment>
  );
};
export default ReceptionistInvoice;
