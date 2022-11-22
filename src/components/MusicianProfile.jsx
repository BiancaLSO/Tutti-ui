import styles from "./Signup.module.css";
import  Navigation  from "./shared/Navigation"
import Footer from "./shared/Footer";

export default function MusicianProfile() {
  return (
    <>
     <Navigation></Navigation>
      {/* <h2 st>Create a profile</h2> */}
      <form className={styles}>
        <label>
          Name
          <input
            type="text"
            placeholder="Name"
            name="name"

          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            placeholder="E-mail"
            name="email"

          />
        </label>

        <label>
          Phone Number
          <input
            type="number"
            placeholder="Phone Number"
            name="number"
          />
        </label>

        <label>
          Instruments
          <input
            type="text"
            placeholder="Instruments"
            name="instruments"
          />
        </label>

        <label>
         Description
          <textarea
            placeholder="Description"
            name="description" 
          />
        </label>
        <label>
         Ensembles
    
        </label>

        <input type="submit" value="Create Profile" />
      </form>
     {/* <Footer></Footer> */}
    </>
  )

}
