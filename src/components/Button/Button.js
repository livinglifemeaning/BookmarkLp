import classes from "./Button.module.css";

const Button = (props) => {
  let color = props.color;
  return (
    <div
      className={`${classes.btn} ${
        color === "blue"
          ? classes.blue
          : color === "red"
          ? classes.red
          : color === "transparent"
          ? classes.transparent
          : color === "white"
          ? classes.white
          : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Button;
