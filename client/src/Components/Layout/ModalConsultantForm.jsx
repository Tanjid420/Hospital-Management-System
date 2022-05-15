
import react from 'react';
import styles from "./ModalConsultantForm.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const Backdrop = (props)=>{
    return(
        <div>
            <Card>
                <h2>Search Your Consultant Here</h2>
                <CardContent>
                    
                </CardContent>
            </Card>
        </div>
    );
};
const Overlay = (props)=>{
    return(
        <div>
            
        </div>
    );
}





const ModalConsultantForm = (props)=>{
    return(
        <react.Fragment>
        <Overlay/>
        <Backdrop/>
        </react.Fragment>

    );
}