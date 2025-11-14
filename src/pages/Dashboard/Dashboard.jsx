import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import DashboardCard from "../../components/DashboardCards/Card";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  const [data, setData] = useState({
    totalCustomers: 0,
    totalReservations: 0,
    availableTables: 0,
    activeLoyalty: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://eatrove-api.mydemo.co/api/dashboard/admin", {
          headers: {
            Authorization: `Bearer YOUR_API_KEY_HERE`,
          },
        });
        setData({
          totalCustomers: res.data.totalCustomers,
          totalReservations: res.data.totalReservations,
          availableTables: res.data.availableTables,
          activeLoyalty: res.data.activeLoyalty,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
<div className="min-h-screen w-full bg-gradient-to-r from-[#298a5f] to-white">
  
      <Navbar />
      <div className="p-6!">
        <div className="flex flex-wrap gap-6 justify-between">
          <DashboardCard title="Total Customers" value={data.totalCustomers} icon="👥" />
          <DashboardCard title="Reservations for Today" value={data.totalReservations} icon="🗓" />
          <DashboardCard title="Available Tables" value={data.availableTables} icon="🍽️" />
          <DashboardCard title="Active Loyalty Members" value={data.activeLoyalty} icon="🏅" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6!">
          <div className="bg-white rounded-2xl p-4! shadow">
            <h2 className="font-semibold mb-2!">Today's Reservations</h2>
            <p className="text-gray-500 text-sm">Upcoming reservations for today.</p>
          </div>
          <div className="bg-white rounded-2xl p-4! shadow">
            <h2 className="font-semibold mb-2!">Recent Activity</h2>
            <p className="text-gray-500 text-sm">
              Today's reservations, loyalty redemptions, reviews, and cancellations.
            </p>
          </div>
            <div className="bg-white rounded-2xl p-4! shadow">
            <h2 className="font-semibold mb-2!">Today's Redemptions</h2>
            <p className="text-gray-500 text-sm">
             Redemptions for today
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20! text-gray-500">
      <Footer/>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
