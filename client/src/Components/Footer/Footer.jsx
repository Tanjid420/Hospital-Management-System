import React from "react";
import styles from "./Footer.module.css";
import Aux from "../../HOC/Auxilary";
const Footer = () => {
  return (
    <Aux>
      {/* Footer */}

     
        <div className={styles.page_container}>
          
          <footer className={styles.footer}>
            
            <p className={styles.footer_content}>
              Copyright @ 2022 A&S Hospital.{" "}
            </p>
          </footer>
        </div>
      
    </Aux>
  );
};
export default Footer;
