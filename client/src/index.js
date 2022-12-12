import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";
import PasswordReset from "./routes/PasswordReset";
import App from "./App";

import { UserContextProvider } from "./context/userContext";
import Root from "./routes/Root";
import Login from "./routes/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<App />} />
        <Route path="passwordReset/:tokenId" element={<PasswordReset />} />
        <Route path="login" element={<Login />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
