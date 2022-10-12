import Features from "./Features/Features";
import Extensions from "./Extensions/Extensions"; 
import FAQ from "./FAQ/FAQ"; 
import Banner from "./Banner/Banner"; 
import classes from "./Body.module.css"; 

const Body = () => {
  return (
    <div className={classes.body}>
      <Features/>
      <Extensions/>
      <FAQ/>
      <Banner/>
    </div>
  )
}

export default Body
