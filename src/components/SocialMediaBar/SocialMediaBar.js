import FacebookIcon from "./Icons/FacebookIcon"; 
import TwitterIcon from "./Icons/TwitterIcon"; 
import classes from "./SocialMediaBar.module.css"; 

const SocialMediaBar = () => {
  let color = "#FFF"; 
  let hoverColor ="#fa5757"; 
  return (
    <div className={classes.bar}>
      <FacebookIcon color={color} hoverColor={hoverColor}/>
      <TwitterIcon color={color} hoverColor={hoverColor}/>
    </div>
  )
}

export default SocialMediaBar
