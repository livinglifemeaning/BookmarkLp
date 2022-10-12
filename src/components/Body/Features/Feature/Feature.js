import FeatureOne from "./feature1.svg"; 
import FeatureTwo from "./feature2.svg"; 
import FeatureThree from "./feature3.svg"; 
import Button from "../../../Button/Button"; 
import classes from "./Feature.module.css"; 
const IMAGES = [FeatureOne, FeatureTwo, FeatureThree]

const Feature = ({data, index, isDesktop}) => {
  return (
    <div className={classes.feature}>
      <div className={classes.imageBox}>
        <img src={IMAGES[index]} alt="" />
        <div className={classes.bg}/>
      </div>
      <div className={classes.textBox}>
        <h3 className={classes.title}>{data.title}</h3>
        <p className={classes.paragraph}>{data.paragraph}</p>
        {isDesktop && <Button color="blue">More Info</Button>}
      </div>
    </div>
  )
}

export default Feature
