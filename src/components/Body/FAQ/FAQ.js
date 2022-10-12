import useMediaQuery from "../../../useMediaQuery"; 
import Question from "./Question/Question"; 
import Button from "../../Button/Button"; 
import questionsData from "./questionsData.json"; 
import classes from "./FAQ.module.css";

const FAQ = () => {
  const isDesktop = useMediaQuery("(min-width: 750px)")
  return (
    <div className={classes.faq}>
      <div className={classes.textBox}>
      <h2 className={classes.title}>Frequently Asked Questions</h2>
      <p className={classes.paragraph}>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      </div>
      <div className={classes.questionBox}>
        {isDesktop && <div className={classes.divider}/>}
        {questionsData.map((question, index) => <Question question={question.question} answer={question.answer} key={index}/>)}
      </div>
      <Button color="blue">More Info</Button>
    </div>
  );
};

export default FAQ;
