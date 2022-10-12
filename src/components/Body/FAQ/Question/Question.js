import { useState } from "react";
import ArrowBlue from "./icon-arrow.svg";
import ArrowRed from "./icon-arrow-red.svg";
import classes from "./Question.module.css";

const Question = ({ question, answer }) => {
  const [questionOpen, setQuestionOpen] = useState(false);
  const toggleQuestion = () => {
    setQuestionOpen((prevState) => !prevState);
  };
  return (
    <div className={classes.box}>
      <div className={classes.questionBox}>
        <p className={classes.question}>{question}</p>
        <img
          src={questionOpen ? ArrowRed : ArrowBlue}
          alt="Arrow to reveal or hide question"
          className={`${questionOpen && classes.arrowUp}`}
          onClick={toggleQuestion}
        />
      </div>
      {questionOpen && (
        <div className={classes.answerBox}>
          <p className={classes.answer}>{answer}</p>
        </div>
      )}
      <div className={classes.divider} />
    </div>
  );
};

export default Question;
