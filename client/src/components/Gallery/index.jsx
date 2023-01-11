import React, { useState, useEffect } from "react";
import styles from "./gallery.module.css";

let imageList = [
  {
    id: 1,
    title: "Image 1",
    description: "A beautiful landscape",
    image_url:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
    user_id: 123,
  },
  {
    id: 1,
    title: "Image 2",
    description: "A beautiful landscape",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIe2CBQBICvUwtDYghuUTY2LRsrrHZquSrcEk05MCIRzG-YMuXVuO-JB5cEc70QJWXYyI&usqp=CAU",
    user_id: 123,
  },
  {
    id: 1,
    title: "Image 3",
    description: "A beautiful landscape",
    image_url:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
    user_id: 123,
  },
  {
    id: 1,
    title: "Image 4",
    description: "A beautiful landscape",
    image_url:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
    user_id: 123,
  },
  {
    id: 1,
    title: "Image 5",
    description: "A beautiful landscape",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
    user_id: 123,
  },
  {
    id: 1,
    title: "Image 6",
    description: "A beautiful landscape",
    image_url:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
    user_id: 123,
  },
  {
    id: 1,
    title: "Image 7",
    description: "A beautiful landscape",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQ2biucYNrBfYWY_EVTQiWbRtbNA0sWegUCwrsuZJBOmYy1ijw3nRoJcweMWmFEGt-A0&usqp=CAU",
    user_id: 123,
  },
  {
    id: 1,
    title: "Image 8",
    description: "A beautiful landscape",
    image_url:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
    user_id: 123,
  },
  {
    id: 1,
    title: "Image 9",
    description: "A beautiful landscape",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
    user_id: 123,
  },
  {
    id: 1,
    title: "Image 10",
    description: "A beautiful landscape",
    image_url:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
    user_id: 123,
  },
];

const Gallery = () => {
  const [firstColumn, setFirstColumn] = useState([]);
  const [secondColumn, setSecondColumn] = useState([]);
  const [thirdColumn, setThirdColumn] = useState([]);
  const [fourthColumn, setFourthColumn] = useState([]);

  let columnSize = 4;

  useEffect(() => {
    let firstColumnPlaceholder = [];
    let secondColumnPlaceholder = [];
    let thirdColumnPlaceholder = [];
    let fourthColumnPlaceholder = [];

    const distributeImage = () => {
      let firstColumnFilled = false;
      let secondColumnFilled = false;
      let thirdColumnFilled = false;
      let fourthColumnFilled = false;

      for (let i = 0; i < imageList.length; i++) {
        // fill column placeholder
        if (columnSize === 2) {
          if (firstColumnFilled === false) {
            firstColumnPlaceholder = [...firstColumnPlaceholder, imageList[i]];
            firstColumnFilled = true;
          } else if (secondColumnFilled === false) {
            firstColumnPlaceholder = [...secondColumnPlaceholder, imageList[i]];
            secondColumnFilled = true;
          }
        } else if (columnSize === 3) {
          if (firstColumnFilled === false) {
            firstColumnPlaceholder = [...firstColumnPlaceholder, imageList[i]];
            firstColumnFilled = true;
          } else if (secondColumnFilled === false) {
            secondColumnPlaceholder = [
              ...secondColumnPlaceholder,
              imageList[i],
            ];
            secondColumnFilled = true;
          } else if (thirdColumnFilled === false) {
            thirdColumnPlaceholder = [...thirdColumnPlaceholder, imageList[i]];
            thirdColumnFilled = true;
          }
        } else if (columnSize === 4) {
          if (firstColumnFilled === false) {
            firstColumnPlaceholder = [...firstColumnPlaceholder, imageList[i]];
            firstColumnFilled = true;
          } else if (secondColumnFilled === false) {
            secondColumnPlaceholder = [
              ...secondColumnPlaceholder,
              imageList[i],
            ];
            secondColumnFilled = true;
          } else if (thirdColumnFilled === false) {
            thirdColumnPlaceholder = [...thirdColumnPlaceholder, imageList[i]];
            thirdColumnFilled = true;
          } else if (fourthColumnFilled === false) {
            fourthColumnPlaceholder = [
              ...fourthColumnPlaceholder,
              imageList[i],
            ];
            fourthColumnFilled = true;
          }
        }

        // reset columnFilled flag
        if (columnSize === 2 && secondColumnFilled === true) {
          firstColumnFilled = false;
          secondColumnFilled = false;
        } else if (columnSize === 3 && thirdColumnFilled === true) {
          firstColumnFilled = false;
          secondColumnFilled = false;
          thirdColumnFilled = false;
        } else if (columnSize === 4 && fourthColumnFilled === true) {
          firstColumnFilled = false;
          secondColumnFilled = false;
          thirdColumnFilled = false;
          fourthColumnFilled = false;
        }
      }

      setFirstColumn(firstColumnPlaceholder);
      setSecondColumn(secondColumnPlaceholder);
      setThirdColumn(thirdColumnPlaceholder);
      setFourthColumn(fourthColumnPlaceholder);
    };

    distributeImage();
  }, []);

  // useEffect(() => {
  //   const redistributeImage = () => {
  //     if (columnSize === 3) {
  //       if (fourthColumn.length !== 0) {
  //       }
  //     }
  //   };
  // }, [columnSize]);

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryColumn + " " + styles.firstColumn}>
        {firstColumn.map((curr) => (
          <div>
            <img src={curr.image_url} alt="" />
          </div>
        ))}
      </div>
      <div className={styles.galleryColumn + " " + styles.secondColumn}>
        {secondColumn.map((curr) => (
          <div>
            <img src={curr.image_url} alt="" />
          </div>
        ))}
      </div>
      <div className={styles.galleryColumn + " " + styles.thirdColumn}>
        {thirdColumn.map((curr) => (
          <div>
            <img src={curr.image_url} alt="" />
          </div>
        ))}
      </div>
      <div className={styles.galleryColumn + " " + styles.fourthColumn}>
        {fourthColumn.map((curr) => (
          <div>
            <img src={curr.image_url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
