import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialMedia.module.css"
import {
    
    faFacebook,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
const SocialMedia = ()=>{
    return(
        <React.Fragment>
            <div className={styles.social_container}>
      
            <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
</div>
        </React.Fragment>
    );
}
export default SocialMedia;