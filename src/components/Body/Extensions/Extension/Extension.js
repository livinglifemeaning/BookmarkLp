import Button from "../../../Button/Button";
import Dots from "./bg-dots.svg";
import Chrome from "./logo-chrome.svg";
import Firefox from "./logo-firefox.svg";
import Opera from "./logo-opera.svg";
import classes from "./Extension.module.css";

const IMAGES = [Chrome, Firefox, Opera];
const Extension = ({ index, browser, version }) => {
  return (
    <div className={classes.extension}>
      <img
        src={IMAGES[index]}
        alt={`${browser} logo`}
        className={classes.browserImg}
      />
      <p className={classes.add}>Add to {browser}</p>
      <p className={classes.version}>Minimum version {version}</p>
      <img src={Dots} alt="" className={classes.divider} />
      <div className={classes.btnBox}>
      <Button color="blue">Add & Install Extension</Button>
      </div>
    </div>
  );
};

export default Extension;
