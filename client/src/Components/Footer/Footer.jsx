import React from "react";
import styles from "./Footer.module.css";
import Aux from "../../HOC/Auxilary";
const Footer = () => {
  return (
    <Aux>
      {/* Footer */}

     
        <div className={styles.page_container}>
          <div className={styles.content_wrap}>
            {/* <!-- all other page content --> */}
          </div>
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
