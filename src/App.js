import "./App.css";
import SignUp from "./components/Signup";
import LogIn from "./components/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
