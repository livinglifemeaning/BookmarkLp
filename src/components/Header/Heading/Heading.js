import { useState, useEffect } from "react";
import { useScrollDirection } from "./useScrollDirection";
import useMediaQuery from "../../../useMediaQuery";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"; 
import HeaderNav from "./HeaderNav/HeaderNav";
import LogoDark from "./logo-header.svg"; 
import LogoLight from "./logo-header-mobile.svg"; 
import classes from "./Heading.module.css"; 

const Heading = () => {
  const isDesktop = useMediaQuery("(min-width: 750px)")
  const scroll = useScrollDirection();
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen((prevState) => !prevState);
  };
  useEffect(() => {
    if (isDesktop) {
      setNavOpen(false);
    }
    if (scroll === "down") {
      setNavOpen(false);
    }
  }, [isDesktop, scroll]);

  return (
    <div className={classes.heading}>
      <img src={navOpen ? LogoLight : LogoDark } alt="Bookmark website logo" className={classes.logo}/>
      {!isDesktop && <HamburgerMenu navOpen={navOpen} onClick={toggleNav} />}
      {(isDesktop || navOpen) && <HeaderNav isDesktop={isDesktop}/>}
      {navOpen && <div className={classes.bg}/>}
    </div>
  )
}

export default Heading
