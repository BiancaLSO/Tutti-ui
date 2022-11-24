import styles from "./Signup.module.css";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import { useState } from "react";

export default function MusicianProfile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [instrument, setInstrument] = useState("");
  const [description, setDescription] = useState("");
  const [ensmebles] = useState([]);
  const [posts] = useState([]);

  const onNameChange = (e) => setFullName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneNoChange = (e) => setPhoneNo(e.target.value);
  const onInstrumentChange = (e) => setInstrument(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const clearForm = () => {
    setFullName("");
    setEmail("");
    setPhoneNo("");
    setInstrument("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tokenFromStorage = getToken().replace(/^"(.*)"$/, '$1');
    console.log(tokenFromStorage);

    const data = {
      fullName,
      email,
      phoneNo,
      instrument,
      description,
      ensmebles,
      posts,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenFromStorage}`,
      },
      mode: "cors",
      body: JSON.stringify(data),
    };

    // Check if token beares gets passed in headers
    console.log(requestOptions);

    fetch("http://localhost:3000/musicians", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res));

    clearForm();
  };

  return (
    <>
      <Navigation></Navigation>
      {/* <h2 st>Create a profile</h2> */}
      <div className={styles.center}>
      <form className={styles} onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            placeholder=" Full name"
            name="name"
            value={fullName}
            onChange={onNameChange}
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={onEmailChange}
          />
        </label>

        <label>
          Phone Number
          <input
            type="number"
            placeholder="Phone Number"
            name="number"
            value={phoneNo}
            onChange={onPhoneNoChange}
          />
        </label>

        <label>
          Instruments
          <input
            type="text"
            placeholder="Instrument"
            name="instrument"
            value={instrument}
            onChange={onInstrumentChange}
          />
        </label>

        <label>
          Description
          <textarea
            placeholder="Description"
            name="description"
            value={description}
            onChange={onDescriptionChange}
          />
        </label>

        <input type="submit" value="Create Profile" />
      </form>
      </div>
      <Footer></Footer>
    </>
  );
}
