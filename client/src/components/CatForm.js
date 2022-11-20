import React, { useState } from "react";
import catsService from "../services/cats";

const CatForm = ({ setCats }) => {
  const [name, setName] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    catsService.create({ name }).then((data) => {
      setCats((prevCats) => prevCats.concat(data));
    });
    setName("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="catName">Cat Name: </label>
      <input type="text" id="catName" onChange={getName} value={name} />
      <button>Submit</button>
    </form>
  );
};

export default CatForm;
