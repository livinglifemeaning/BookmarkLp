import { useState } from "react";
import useMediaQuery from "../../../useMediaQuery"; 
import Feature from "./Feature/Feature"; 
import featuresData from "./featuresData.json"; 
import classes from "./Features.module.css";

const Features = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 750px)")
  return (
    <div className={classes.features}>
      <div className={classes.textBox}>
      <h2 className={classes.title}>Features</h2>
      <p className={classes.paragraph}>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      </div>
      <div className={classes.featuresBox}>
        <div className={classes.selectors}>
          {!isDesktop && <div className={classes.divider}/>}
          <p className={`${classes.selector} ${selectedIndex === 0 && classes.active}`} onClick={() => setSelectedIndex(0)}>
            Simple Bookmarking
          </p>
          {!isDesktop && <div className={classes.divider}/>}
          <p className={`${classes.selector} ${selectedIndex === 1 && classes.active}`}  onClick={() => setSelectedIndex(1)}>
            Speedy Searching
          </p>
          {!isDesktop && <div className={classes.divider}/>}
          <p className={`${classes.selector} ${selectedIndex === 2 && classes.active}`}  onClick={() => setSelectedIndex(2)}>
            Easy Sharing
          </p>
          {!isDesktop && <div className={classes.divider}/>}
  
        </div>
        {isDesktop && <div className={classes.divider}/>}
        <Feature data={featuresData[selectedIndex]} index={selectedIndex} isDesktop={isDesktop}/>
      </div>
    </div>
  );
};

export default Features;
