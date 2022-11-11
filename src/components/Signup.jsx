import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      <form method="POST" action="http://localhost:3000/signup">
        <label>
          <input
            type="text"
            placeholder="name"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          <input
            type="password"
            placeholder=" Confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="Are you a musician?"
            name="isMusician"
            value={isMusician}
            onChange={(e) => setIsMusician(e.target.value)}
          />
        </label>

        <input type="submit" onClick={handleSubmit} value="Sign Up" />
      </form>
    </>
  );
}
