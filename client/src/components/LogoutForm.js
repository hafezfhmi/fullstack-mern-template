import React from "react";

import { UseUserContext } from "../context/userContext";

const LogoutForm = () => {
  const logout = UseUserContext().logout;

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default LogoutForm;
