import styles from "./Profile.module.css";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import { useState, useEffect } from "react";


export default function MusicianProfile() {

  
  const [user, setUser] = useState([]);

  
  const getToken = () => {
    return localStorage.getItem("token");
  };

  const getId = () => {
    return localStorage.getItem("id");
  };

  const tokenFromStorage = getToken().replace(/^"(.*)"$/, "$1");

  const idFromStorage = getId().replace(/^"(.*)"$/, "$1");

  useEffect(() => {
    const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenFromStorage}`,
          },
          mode: "cors"
        };
    fetch("http://localhost:3000/profile/loggedin/" + idFromStorage, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => 
      setUser(data)
      );

  }, []);




 

  return (
    <>
      <Navigation></Navigation>
      {/* <h2 st>Create a profile</h2> */}
    <h1 className={styles.heading}>Hi, { user.username}!</h1>
    <div className={styles.grid}>
    <div className={styles.anotherColumn}>
    <img src = "https://i.pravatar.cc/300"  className={styles.profile}></img>
    <button className={styles.update}>Update profile</button>
    </div>
    <div className={styles.column}>
      <h3 className={styles.secondHeading}>Basic Information</h3>
      <div className={styles.info}>Full name: <span className={styles.span}>{ user.username}</span></div>
      <div className={styles.info}>E-mail: <span className={styles.span}>{ user.email}</span></div>
      <div className={styles.info}>Phone number: <span className={styles.span}>{ user.phoneNo}</span></div>
      <div className={styles.info}>Played Instrument: <span className={styles.span}>{ user.instrument}</span></div>
      <div className={styles.info}>About me: <span className={styles.span}>{ user.description}</span></div>
      <button className={styles.delete}>Delete profile</button>
    </div>
    </div>
    
    <div className={styles.gridEnsembles}>
    <h1 className={styles.heading}>My Ensembles</h1>
    </div>

      {/* <div className={styles.center}>
        <form className={styles}>
          <label>
            Phone number
            <input
              type="text`"
              placeholder="Username"
              name="username"
              value={user.phoneNo}
            />
          </label> */}

          {/* <label>
            E-mail
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={email}

            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}

            />
          </label>

          <label>
            Full Name
            <input
              type="text"
              placeholder=" Full name"
              name="name"
              value={fullName}

            />
          </label>

          <label>
            Phone Number
            <input
              type="number"
              placeholder="Phone Number"
              name="number"
              value={phoneNo}
            />
          </label>

          <label>
            Instruments
            <input
              type="text"
              placeholder="Instrument"
              name="instrument"
              value={instrument}

            />
          </label>

          <label>
            Description
            <textarea
              placeholder="Description"
              name="description"
              value={description}

            />
          </label> */}

          {/* <input type="submit" value="Update Profile" />
        </form> */}
      {/* </div> */}
      <Footer></Footer>
    </>
  );
}
