import Button from "../../../Button/Button";
import SocialMediaBar from "../../../SocialMediaBar/SocialMediaBar";
import classes from "./HeaderNav.module.css";

const HeaderNav = ({ isDesktop }) => {
  return (
    <nav
      className={`${classes.navBox} ${
        isDesktop ? classes.desktop : classes.mobile
      }`}
    >
      {!isDesktop && <div className={classes.divider} />}
      <ul className={classes.nav}>
        <li>Features</li>
        {!isDesktop && <div className={classes.divider} />}
        <li>Pricing</li>
        {!isDesktop && <div className={classes.divider} />}
        <li>Contact</li>
        {!isDesktop && <div className={classes.divider} />}
      </ul>
      <Button color={isDesktop ? "red" : "transparent"}>Login</Button>
      {!isDesktop && <SocialMediaBar/>}
    </nav>
  );
};

export default HeaderNav;
