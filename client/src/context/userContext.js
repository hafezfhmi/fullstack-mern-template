import React, { useContext, useEffect, useState } from "react";

import authServices from "../services/auth";

const UserContext = React.createContext();

export function UseUserContext() {
  return useContext(UserContext);
}

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUserLoginStatus = async () => {
      const userLoginStatus = await authServices.relog();

      if (userLoginStatus.isLoggedIn) {
        setUser(userLoginStatus.user);
        setIsLoggedIn(userLoginStatus.isLoggedIn);
      }
    };

    fetchUserLoginStatus();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};
