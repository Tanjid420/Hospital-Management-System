import styles from "./Modals.modules.css";
import react from 'react';
import  reactDOM  from "react-dom";

const Backdrop = ()=>{
    return(
        <div className={styles.backdrop} />

        
    );
};
const Overlay = (props)=>{
    return(
        <div className={styles.modal}>
           <form>
            <label>
                Name:
                <input type="text" name="name"></input>
            </label>
            <label>
                Phone:
                <input type="number" name="phone"></input>
            </label>
            <label>
                E-mail:
                <input type="email" name="email"></input>
            </label>
            <label>
                Message:
                <input type="text" name="message"></input>
            </label>
            <label>
                Date:
                <input type="number" name="date"></input>
            </label>
            <label>
                Time:
                <input type="number" name="time"></input>
            </label>
            <label>
                Doctor's Name:
                <input type="number" name="d-name"></input>
            </label>
           </form>
           <button className={styles.btn_submit}>Submit</button>

        </div>
    );
};
const portalElement1 = document.querySelector('#overlay');
const portalElement2 = document.querySelector('#backdrop');

const Modals = (props)=>{
return(
<react.Fragment>
    {reactDOM.createPortal(<Backdrop/>,portalElement2)}
    {reactDOM.createPortal(<Overlay></Overlay>,portalElement1)}

</react.Fragment>
);
}
export default Modals;