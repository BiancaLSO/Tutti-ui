import { useState } from "react";
import styles from "./Signup.module.css";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";

export default function SignUp() {
  const [user, setUser] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    let currentUser = {
      username: event.currentTarget.elements.username.value,
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };

    const response = await createUser(currentUser);
    console.log(response);
  }

  async function createUser(user) {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(user),
    });

    const res = await response.json();
    setUser((user) => ({
      ...user,
      ...res,
    }));
    return res;
  }

  return (
    <>
      <Navigation></Navigation>
      <h2>Sign Up</h2>
      <form className={styles} onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            placeholder="Username"
            name="username"
            defaultValue={user.username}
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            defaultValue={user.email}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            name="password"
            defaultValue={user.password}
          />
        </label>

        <input type="submit" value="Sign Up" />
      </form>
      <Footer></Footer>
    </>
  );
}
