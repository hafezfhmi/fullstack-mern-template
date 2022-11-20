import { useState, useEffect } from "react";
import catsServices from "./services/cats";
import CatList from "./components/CatList";
import CatForm from "./components/CatForm";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    catsServices.getAll().then((data) => setCats(data));
  }, []);

  return (
    <div>
      <CatForm setCats={setCats} />
      <CatList cats={cats} />
    </div>
  );
}

export default App;
