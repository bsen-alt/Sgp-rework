import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      <div className="large-image">
        <img src={images[currentImage]} alt="Plan" className="w-full h-auto" />
      </div>
      <div className="thumbnails flex gap-2 mt-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            className={`w-16 h-16 cursor-pointer border ${
              index === currentImage ? "border-blue-500" : ""
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
