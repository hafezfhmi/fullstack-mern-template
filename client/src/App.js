import { useState, useEffect } from "react";
import catsServices from "./services/cats";
import CatList from "./components/CatList";
import CatForm from "./components/CatForm";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import { UseUserContext } from "./context/userContext";

function App() {
  const userCtx = UseUserContext();

  const [cats, setCats] = useState([]);

  useEffect(() => {
    catsServices.getAll().then((data) => setCats(data));
  }, []);

  return (
    <div>
      {userCtx.isLoggedIn ? (
        <div>
          <p>{userCtx.user.username} logged in</p>
          <LogoutForm />
        </div>
      ) : (
        <div>
          <LoginForm />
          <SignupForm />
        </div>
      )}

      <CatForm setCats={setCats} />
      <CatList cats={cats} />
    </div>
  );
}

export default App;
