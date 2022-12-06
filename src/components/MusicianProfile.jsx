import styles from "./Profile.module.css";
import style from "./Signup.module.css";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import { useState, useEffect } from "react";
import ShowModal from "./Modal";


export default function MusicianProfile() {

  
  const [user, setUser] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setIsShown(current => !current);

  };

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
    <h1 className={styles.heading}>Hi, { user.username}! &#128075;</h1>
    {!isShown && (
    <div className={styles.grid}>

    <div className={styles.anotherColumn}>
    <img src = "https://i.pravatar.cc/300"  className={styles.profile}></img>
    <button className={styles.contact} onClick={handleModal}>Contact</button>
    </div>

    <div className={styles.column}>
      <div className={styles.info}>{ user.fullName}</div>
      <div className={styles.instrum}><span className={styles.span}> &#127925;  {user.instrument}</span></div>
      <div className={styles.infodesc}>About me: </div> 
      <span className={styles.span}>{ user.description}</span>

      <div className={styles.buttons}>
      <button className={styles.update} onClick={handleClick}>Update profile</button>
        <button className={styles.delete}>Delete profile</button>
        </div>
       
    </div>

    </div>
    )}
     {!isShown && (
    <div className={styles.gridEnsembles}>
    <h1 className={styles.heading}>My Ensembles</h1>
    </div>
  )}

  {isShown && (
    
      <div className={style.center}>
     
        <form className={style}>

        <label>
            Full Name
            <input
              type="text"
              placeholder=" Full name"
              name="name"
              value={user.fullName}

            />
          </label>

          <label>
           Username
            <input
              type="text`"
              placeholder="Username"
              name="username"
              value={user.username}
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={user.email}

            />
          </label>

          {/* <label>
            Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}

            />
          </label> */}


          <label>
            Phone Number
            <input
              type="number"
              placeholder="Phone Number"
              name="number"
              value={user.phoneNo}
            />
          </label>

          <label>
            Instruments
            <input
              type="text"
              placeholder="Instrument"
              name="instrument"
              value={user.instrument}

            />
          </label>

          <label>
            Description
            <textarea
              placeholder="Description"
              name="description"
              value={user.description}

            />
          </label>

          <input type="submit" value="Update Profile" />
        </form>
      </div>
         )}
      <ShowModal showModal={showModal} closeModal={closeModal} />
      <Footer></Footer>
    </>
  );
}
