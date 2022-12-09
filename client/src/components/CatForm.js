import React from "react";
import catsService from "../services/cats";
import { useField } from "../hooks/index";

const CatForm = ({ setCats }) => {
  const catName = useField("text", "catName");
  const catImgUrl = useField("text", "catImgUrl");

  const handleReset = () => {
    catName.reset();
    catImgUrl.reset();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      let data = await catsService.create({
        catName: catName.attributes.value,
        catImgUrl: catImgUrl.attributes.value,
      });

      setCats((prevCats) => prevCats.concat(data));

      handleReset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="catName">Cat Name: </label>
        <input {...catName.attributes} />
      </div>
      <div>
        <label htmlFor="catImgUrl">Cat Image Url: </label>
        <input {...catImgUrl.attributes} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default CatForm;
