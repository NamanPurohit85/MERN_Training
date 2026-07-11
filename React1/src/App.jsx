import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Features from "./Components/Features";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
