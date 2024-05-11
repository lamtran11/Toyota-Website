import React from "react";

const CarDetails = () => {
  return (
    <div>
      <h1>Car Details</h1>
      <div className="car-image">
        <img src="car-image.jpg" alt="Car" />
      </div>
      <div className="car-info">
        <h2>Car Model</h2>
        <p>Year: 2022</p>
        <p>Color: Red</p>
        <p>Price: $30,000</p>
      </div>
      <div className="car-description">
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nunc id aliquam ultrices, elit nunc fringilla lectus, id
          tincidunt nunc nunc id lectus.
        </p>
      </div>
    </div>
  );
};

export default CarDetails;
