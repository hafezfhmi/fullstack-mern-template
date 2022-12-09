import React from "react";

const CatList = ({ cats }) => {
  return (
    <div>
      <h1>CatList</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat.catId}>{cat.catName}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
