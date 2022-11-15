import { useState } from "react";
import styles from  "./Signup.module.css"

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword] = useState("");
  const [isMusician, setIsMusician] = useState(false);


  async function handleSubmit() {
    let user = { username, email, password, confirmPassword, isMusician };
    let result = await fetch("http://localhost:3000/signup", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringfy(user),
    });
    result = await result.json();
  }

  return (
    <>
    <nav>
This is a navigation
    </nav>
    <h2>Sign Up</h2>
      <form method="POST" action="http://localhost:3000/signup" className={styles}>
        <label>Username
          <input
            type="text"
            placeholder="Username"
            name="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>E-mail
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>Password
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
<label> Are you a musician?   </label>
           
        <div className={styles.radio}>
          <input
            type="radio"
            name="isMusician"
            value={isMusician}
            onChange={(e) => setIsMusician(e.target.value)}
          />Yes
        </div>
        <div className={styles.radio}>
        <input
            type="radio"
            name="isMusician"
            value={isMusician}
            onChange={(e) => setIsMusician(e.target.value)}
          />No
        </div>

        <input type="submit" onClick={handleSubmit} value="Sign Up" />
      </form>
      <footer>
This is a footer
      </footer>
    </>
  );
}
