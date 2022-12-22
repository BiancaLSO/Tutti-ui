import { useState} from "react";
import styles from "./Signup.module.css";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import { useNavigate } from "react-router-dom";
import { validateUsername } from "./../utils.js";
import { validateEmail } from "./../utils.js";
import { validatePassword } from "./../utils.js";

export default function SignUp() {
  localStorage.clear();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [instrument, setInstrument] = useState("");
  const [description, setDescription] = useState("");
  const [ensmebles] = useState([]);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isUsernameValid, setUsernameIsValid] = useState(true);
  const [isEmailValid, setEmailIsValid] = useState(true);
  const [isPasswordValid, setPasswordIsValid] = useState(true);
  const [focused, setFocused] = useState(false);

  const onUsernameChange = (e) => {setUsername(e.target.value); setUsernameIsValid(true);};
  const onEmailChange = (e) => {setEmail(e.target.value); setEmailIsValid(true); };
  const onPasswordChange = (e) => {setPassword(e.target.value); setPasswordIsValid(true);}
  const onNameChange = (e) => setFullName(e.target.value);
  const onPhoneNoChange = (e) => setPhoneNo(e.target.value);
  const onInstrumentChange = (e) => setInstrument(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const handleFocus = (e) =>  {setFocused(true)};

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

    const valid = validateUsername(username);
    const validE = validateEmail(email);
    const validp = validatePassword(password);

    if (valid && validE && validp) {
      setUsernameError("");
      setEmailError("");
      setPasswordError("");
      console.log("send mail to server");

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
  } else {
    setUsernameIsValid(false);
    setEmailIsValid(false);
    setPasswordIsValid(false);
    setUsernameError ("Username must be at least 3-10 characters and no special characters!");
    setEmailError ("Please enter valid email address!");
    setPasswordError("Password must be at least 5 characters long with at least one letter and one number!");}
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
              required
              pattern= "^[A-Za-z0-9]{3,10}$"
              onBlur={handleFocus}
              focused={focused.toString("")}
            />
            { isUsernameValid ? <p style={{ color: "red" }}>{usernameError}</p> : 
           <p style={{ display: "none" }}> </p> }

           {/* { focused ? (isUsernameValid ? usernameError : setUsernameIsValid) : 
           <p style={{ display: "none" }}> </p> } */}
          </label>

          <label>
            E-mail
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={onEmailChange}
              required
              onBlur={handleFocus}
              focused={focused.toString()}
            />
            { isEmailValid ? <p style={{ color: "red" }}>{emailError}</p> : 
           <p style={{ display: "none" }}> </p> }
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onPasswordChange}
              required
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$"
              onBlur={handleFocus}
              focused={focused.toString()}
            />
            { isPasswordValid ? <p style={{ color: "red" }}>{passwordError}</p> : 
           <p style={{ display: "none" }}> </p> }
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
