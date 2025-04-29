import React from "react";
import { createContext } from "react";

export const UserDataContext = createContext();

const userContext = ({ children }) => {
    const [userData, setUserData] = React.useState({
      email:"",
      fullname:{
        firstname:"",
        lastname:"",
      }
    });
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default userContext;
