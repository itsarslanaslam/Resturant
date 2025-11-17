import './App.css'
import Login from './Login/Login'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import ForgotPassword from "./Login/ForgotPassword/Forgotpassword";
import Dashboard from './pages/Dashboard/Dashboard';
import ProtectedrRoutes from './utils/ProtectedrRoutes';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route element={<ProtectedrRoutes />} >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
