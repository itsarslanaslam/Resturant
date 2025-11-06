import './App.css'
import Login from './Login/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Login/ForgotPassword/Forgotpassword";

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
