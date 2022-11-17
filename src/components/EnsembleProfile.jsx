import styles from "./Signup.module.css";
import  Navigation  from "./shared/Navigation"

export default function EnsembleProfile() {
  return (
    <>
     <Navigation></Navigation>
      {/* <h2 st>Create a profile</h2> */}
      <form className={styles}>
        <label>
         Ensemble Name
          <input
            type="text"
            placeholder="Ensemble Name"
            name="name"

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
          Link
          <input
            type="text"
            placeholder="Link to website"
            name="link"

          />
        </label>

        <label>
          Address
          <input
            type="text"
            placeholder="Address"
            name="address"
          />
        </label>

        <label>
          Active musicians
          <input
            type="number"
            placeholder="Active musicians"
            name="active"
          />
        </label>

        <label>
          Practice Frequency
          <input
            type="text"
            placeholder="Practice Frequency"
            name="practice"
          />
        </label>
      
        <label>
          Genre
          <input
            type="text"
            placeholder="Genre"
            name="genre"
          />
        </label>
        <input type="submit" value="Create Profile" />
      </form>
      <footer>This is a footer</footer>
    </>
  )

}


