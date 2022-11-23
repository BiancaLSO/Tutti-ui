import { Component } from "react"
import styles from "./Navigation.module.css"

export default class Navbar extends Component {
state = { clicked: false };
handleClick = () => {
this.setState({clicked: !this.state.clicked })
}
render() {
  return (
   <nav className={styles.navbar}>
    <div className={styles.gridLeft}>
    <h1>Musik Samspil</h1>
    <p>Skabt af DAOS - Dansk Amatørorkester Samvirke </p>
    </div>
    <ul className={styles.navLinks}>
  
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" className={styles.hamburger}>&#9776;</label>

       <div className={styles.menu}>
         <li><a href="/home">Posts</a></li>
         <li><a href="/musician">Musician Profile</a></li>
         <li className={styles.services}>
           <a href="/ensemble">Ensemble Profile</a>
         </li>
 <li><a href="/signup">Create Account</a></li>
<li><a href="/auth/login">Log In</a></li>
       </div>
     </ul>

    </nav>

  );
}
}