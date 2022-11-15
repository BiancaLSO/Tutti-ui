import { useState } from "react";
import styles from "./Signup.module.css";

export default function SignUp() {
  const [user, setUser] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    let currentUser = {
      username: event.currentTarget.elements.username.value,
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
      // isMusician: event.currentTarget.elements.isMusician.value,
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
      <nav>This is a navigation</nav>
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
        {/* <label> Are you a musician? </label> */}

        {/* <div className={styles.radio}>
          <input
            type="radio"
            name="isMusician"
            defaultValue={user.isMusician}
          />
          Yes
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            name="isMusician"
            defaultValue={user.isMusician}
          />
          No
        </div> */}

        <input type="submit" value="Sign Up" />
      </form>
      <footer>This is a footer</footer>
    </>
  );
}
