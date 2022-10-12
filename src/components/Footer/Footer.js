import FooterNav from "./FooterNav/FooterNav"; 
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar"; 
import Logo from "./logo-footer.svg"; 
import classes from "./Footer.module.css"; 

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={Logo} alt="Bookmark website logo" className={classes.logo}/> 
      <FooterNav/>
      <SocialMediaBar/>
    </footer>
  )
}

export default Footer
