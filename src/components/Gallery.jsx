import React from "react";

function Gallery() {
  const [state, setState] = React.useState(0);

  /******     IMPORTING ALL IMAGES FROM ../images/gallery    *****/
  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
      images.push(r(item));
      return 1;
    });
    return images;
  }

  const images = importAll(
    require.context("../images/gallery", false, /\.(png|jpe?g|svg)$/)
  );

  const length = images.length;

  /*********    FUNCTION TO HANDLE LEFT/RIGHT ARROW CLICK   **********/

  function handleLeft() {
    if (state !== 0) {
      setState(state - 1);
    } else {
      setState(length - 1);
    }
  }
  function handleRight() {
    if (state !== length - 1) {
      setState(state + 1);
    } else {
      setState(0);
    }
  }

  /*****   FUNCTION TO ADD APPROPRIATE CLASSNAME FOR IMMEDIATE RIGHT (AND) LEFT IMAGE IN COROUSEL    *****/

  function addClass(index) {
    if (index === state) {
      return "galleryImg activeImg";
    }
    if (((index === length - 1) & (state === 0)) | (index === state - 1)) {
      return "galleryImg leftImg";
    }
    if (((index === 0) & (state === length - 1)) | (index === state + 1)) {
      return "galleryImg rightImg";
    } else {
      return "galleryImg";
    }
  }

  return (
    <div className="sideHeading" id="gallery">
      <p id="galleryHeading">Gallery</p>
      <img
        alt="Left Arrow"
        className="arrow"
        src={require("../images/icons/leftArrow.svg").default}
        id="leftCursor"
        onClick={handleLeft}
      />
      <img
        id="rightCursor"
        className="arrow"
        onClick={handleRight}
        alt="Right Arrow"
        src={require("../images/icons/rightArrow.svg").default}
      />

      {images.map((element, index) => {
        return (
          <div key={index} className={addClass(index)}>
            <img alt="gallery_image" src={images[index]} />
          </div>
        );
      })}
    </div>
  );
}
export default Gallery;
