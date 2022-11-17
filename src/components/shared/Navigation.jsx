import { Link } from "react-router-dom"
import styles from "./Navigation.module.css"

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: '#353A5D',
  };
  const linkStyleWhite = {
    color: 'white',
    margin: "1rem",
    textDecoration: "none",
  }

export default function Navigation(){

return (
   <nav className={styles}>

  
    <div className={styles.gridLeft}>
    <h1>Musik Samspil</h1>
    <p>Skabt af DAOS - Dansk Amatørorkester Samvirke </p>
    </div>
    <div className={styles.gridRight}>
    <Link to="/home" style={linkStyle} className={styles.buttonHover}>Posts</Link>
    <Link to="/musician" style={linkStyle} className={styles.buttonHover}>Profile</Link>
    <button className={styles.buttonBlue}>
    <Link to="/signup" style={linkStyleWhite}>Create Account</Link>
    </button>
    <button className={styles.buttonWhite}>
    <Link to="/auth/login" style={linkStyle}>Log In</Link>
    </button>
    </div>

   </nav>

    )
}