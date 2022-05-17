import styles from "./Case_Question_Exp.module.css";
import react from "react";


const CaseQuestionExp = (props) => {
  return (
    <react.Fragment>
      <div className={styles.cqe}>
        <div className={styles.cqe_btn}>
          <a href="#">Case Study</a>
          <a href="#" onClick={()=> props.setOpenModalQuestion(true)}>Ask Question</a>
          <a href="#" onClick={()=> props.setOpenModalExp(true)}>Share Experience</a>
        </div>
      </div>
    </react.Fragment>
  );
};
export default CaseQuestionExp;
