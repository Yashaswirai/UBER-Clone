import React, { createContext, useState } from "react";
export const CaptainDataContext = createContext();
export const CaptainContext = ({ children }) => {
  const [captainData, setCaptainData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    vehicleColor: "",
    vehiclePlate: "",
    vehicleCapacity: "",
    vehicleType: "",
    isOnline: false,
    currentLocation: null,
  });
  return (
    <CaptainDataContext.Provider value={{ captainData, setCaptainData }}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
