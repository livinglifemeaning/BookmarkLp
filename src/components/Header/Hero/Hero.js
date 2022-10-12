import HeroImage from "./illustration-hero.svg";
import Button from "../../Button/Button";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.textBox}>
        <h1 className={classes.title}>A Simple Bookmark Manager</h1>
        <p className={classes.paragraph}>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={classes.buttons}>
          <Button color="blue">Get it on Chrome</Button>
          <Button color="white">Get it on Firefox</Button>
        </div>
      </div>
      <div className={classes.imageBox}>
        <div className={classes.bg} />
        <img src={HeroImage} alt="Mockup illustration" />
      </div>
    </div>
  );
};

export default Hero;
