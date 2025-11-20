import { Outlet, Navigate } from "react-router-dom"

const ProtectedrRoutes = () => {
    // const user = null
    const user = localStorage.getItem("token");
  return user ? <Outlet/> : <Navigate to ='/login'/>
}

export default ProtectedrRoutes
