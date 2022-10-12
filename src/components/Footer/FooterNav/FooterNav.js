import classes from "./FooterNav.module.css"; 

const FooterNav = () => {
  return (
    <nav className={classes.navBox}>
      <ul className={classes.nav}>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default FooterNav
