import styles from "./Signup.module.css";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    let credentials = {
      username: event.currentTarget.elements.username.value,
      password: event.currentTarget.elements.password.value,
    };

    const token = await loginUser(credentials);
    const tokenValue = token.access_token;

    localStorage.setItem("token", JSON.stringify(tokenValue));

    setCredentials(" ");

    if (token) {
      setTimeout(navigate("/home"), 3000);
    }
  };

  async function loginUser(credentials) {
    const result = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(credentials),
    });

    const res = await result.json();
    return res;
  }

  return (
    <>
      <Navigation></Navigation>
      <h2>Log In</h2>
      <form className={styles} onSubmit={handleLogin}>
        <label>
          Username
          <input
            type="text"
            placeholder="Username"
            name="username"
            defaultValue={credentials.username}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            name="password"
            defaultValue={credentials.password}
          />
        </label>

        <input type="submit" value="Log In" />
      </form>
      <Footer></Footer>
    </>
  );
}
