import { useState, useEffect } from "react";
import catsServices from "./services/cats";
import authServices from "./services/auth";
import CatList from "./components/CatList";
import CatForm from "./components/CatForm";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    catsServices.getAll().then((data) => setCats(data));
  }, []);

  let handleLogout = async (event) => {
    event.preventDefault();

    await authServices.logout();
  };

  return (
    <div>
      <LoginForm />
      <button onClick={handleLogout}>Logout</button>

      <CatForm setCats={setCats} />
      <CatList cats={cats} />
      <SignupForm />
    </div>
  );
}

export default App;
