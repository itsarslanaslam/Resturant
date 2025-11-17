import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const settingsRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setOpenSettings(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("token");
  setOpenProfile(false); // close dropdown
  navigate("/login");
};


  return (
    <>
      <div className="h-16 bg-white flex justify-between items-center w-full px-8 shadow">
        
        {/* Logo + Title */}
        <div className="flex items-center">
          <img className="h-8  ml-8!" src={logo} alt="" />
          <h1 className="ml-3! font-bold text-xl">Santoor Admin</h1>
        </div>

        <div className="flex items-center gap-6">

          <button 

          className="relative px-4! py-1! shadow-sm rounded-3xl hover:bg-gray-200 transition ">
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 17h5l-1.405-1.405C18.21 14.79 18 14.4 18 14V9c0-3.077-1.64-5.64-4.5-6.32V2a1.5 1.5 0 10-3 0v.68C7.64 3.36 6 5.923 6 9v5c0 .4-.21.79-.595 1.595L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>

            {/* Notification Dot */}
            <span  className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings Dropdown */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => {
                setOpenSettings(!openSettings);
                setOpenProfile(false);
              }}
              className="mr-8! flex items-center gap-2 shadow-sm radius px-8! py-1.5! rounded-3xl hover:bg-gray-200 transition"
            >
              <span className="font-semibold text-sm">⛯ Settings</span>
            </button>

            {openSettings && (
              <div className="absolute right-0 mt-2! w-48 bg-white shadow-lg rounded-lg py-2!  z-50">
                <button className="w-full text-left px-4! py-2 hover:bg-gray-100">
                  Zone Management
                </button>
                <button className="w-full text-left px-4! py-2 hover:bg-gray-100">
                  General Settings
                </button>
              </div>
            )}
          </div>

          {/* Admin Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => {
                setOpenProfile(!openProfile);
                setOpenSettings(false);
              }}
              className="mr-8! flex items-center gap-2  radius px-8! py-1.5! rounded-3xl hover:bg-gray-200 transition"
            >
              <span className="font-semibold text-sm">👤 Admin</span>
            </button>

            {openProfile && (
              <div className="absolute right-0 mt-2! w-48 bg-white shadow-lg rounded-lg py-2! z-50">
                <button className="w-full text-left px-4! py-2 hover:bg-gray-100">
                  Profile
                </button>
                <button className="w-full text-left px-4! py-2 hover:bg-gray-100">
                  Change Password
                </button>
                <button onClick={handleLogout} className="w-full text-left px-4! py-2 hover:bg-red-100 text-red-600">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
