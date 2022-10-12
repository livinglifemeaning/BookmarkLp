import {useState, useRef} from "react";
import Button from "../../Button/Button";
import ErrorIcon from "./icon-error.svg";  
import classes from "./Banner.module.css"; 

const Banner = () => {
  const [inputValid, setInputValid] = useState("undefined")
  const inputRef = useRef(); 
  const handleInput = () => {
    if(inputRef.current.value.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      setInputValid("true")
    } else{
      setInputValid("false"); 
    }
  }

  return (
    <div className={classes.banner}>
      <p className={classes.joined}>35,000+ already joined</p>
      <h2 className={classes.title}>Stay up-to-date with what we’re doing</h2>
      <div className={classes.actionsBox}>
        <div className={`${classes.inputBox} ${inputValid === "false" && classes.invalid}`}>

          <div className={classes.input}>
          <input type="text" placeholder="Enter your email address" ref={inputRef}/>
          {inputValid === "false" && <img src={ErrorIcon} alt="" className={classes.errorIcon}/>}
          </div>

          {inputValid === "false" && <p className={classes.errorMsg}>Whoops, make sure it's an email</p>}
        </div>
        <Button color="red" onClick={handleInput}>Contact Us</Button>
      </div>
    </div>
  )
}

export default Banner
