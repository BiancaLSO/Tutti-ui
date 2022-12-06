import { useState } from "react";
import styles from "./Signup.module.css";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [instrument, setInstrument] = useState("");
  const [description, setDescription] = useState("");
  const [ensmebles] = useState([]);

  const onUsernameChange = (e) => setUsername(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onNameChange = (e) => setFullName(e.target.value);
  const onPhoneNoChange = (e) => setPhoneNo(e.target.value);
  const onInstrumentChange = (e) => setInstrument(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const clearForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setFullName("");
    setPhoneNo("");
    setInstrument("");
    setDescription("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
      fullName,
      phoneNo,
      instrument,
      description,
      ensmebles,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    };

    fetch("http://localhost:3000/profile/signup", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res));

    navigate("/auth/login");
    clearForm();
  }

  return (
    <>
      <Navigation></Navigation>
      <div className={styles.center}>
        <form className={styles} onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onUsernameChange}
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
            Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onPasswordChange}
            />
          </label>

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
            Instrument
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

          <input type="submit" value="Sign Up" />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
