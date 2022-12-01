import { useState, useEffect } from "react";
import catsServices from "./services/cats";
import authServices from "./services/auth";
import CatList from "./components/CatList";
import CatForm from "./components/CatForm";
import SignupForm from "./components/SignupForm";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    catsServices.getAll().then((data) => setCats(data));
  }, []);

  // TODO: TEST SESSION
  let handleLogin = async (event) => {
    event.preventDefault();

    let user = await authServices.login();

    console.log(user);
  };

  let handleLogout = async (event) => {
    event.preventDefault();

    await authServices.logout();
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <button>Login</button>
      </form>

      <button onClick={handleLogout}>Logout</button>

      <CatForm setCats={setCats} />
      <CatList cats={cats} />
      <SignupForm />
    </div>
  );
}

export default App;
