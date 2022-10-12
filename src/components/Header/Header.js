import Heading from "./Heading/Heading";
import Hero from "./Hero/Hero";
import classes from "./Header.module.css"; 

const Header = () => {
  return (
    <header className={classes.header}>
      <Heading/>
      <Hero/>
    </header>
  )
}

export default Header
