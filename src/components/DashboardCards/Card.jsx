import React from "react";

const Card = ({ title, value, icon }) => (

  <div className="bg-white rounded-2xl shadow p-4! flex flex-col justify-center items-start w-full md:w-[23%]">
    <div className="flex justify-between w-full">
      <h3 className="text-gray-700 font-medium">{title}</h3>
      <span className="text-2xl">{icon}</span>
    </div>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

export default Card;
