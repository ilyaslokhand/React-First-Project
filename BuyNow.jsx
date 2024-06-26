import React, { useState } from "react";
import "./BuyNow.css";
import headphone7 from "../../assets/headphone7.png";
import headphone8 from "../../assets/headphone8.png";
import headphone9 from "../../assets/headphone9.png";

const BuyNow = () => {
  const [ActiveImage, SetActiveImage] = useState(0);
  const images = [headphone7, headphone8, headphone9];

  const HandleActive = (index) => {
    SetActiveImage(index);
  };
  return (
    <div className="BuyNowcontainor">
      <div className="products">
        <div className="imagegallery">
          <img src={images[ActiveImage]} id="productimg" />

          <div className="controls">
            {images.map((_, index) => (
              <span
                key={index}
                className={`btn ${ActiveImage === index ? "active1" : ""}`}
                onClick={() => HandleActive(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="details">
          <h1>Earbud Bluetooth Gaming Headset</h1>
          <h2>Rs 3000</h2>
          <h3>80% OFF</h3>
          <p>
            The product quality of this earbud is amazing. The battery backup is
            good and sound quality is also perfect. It is value for money
            product.
          </p>
          <form>
            <div class="color-select">
              <p>color</p>
              <label for="red">
                <input type="radio" name="color" id="red" />
                <span class="color-1"></span>
              </label>

              <label for="Black">
                <input type="radio" name="color" id="Black" />
                <span class="color-2"></span>
              </label>

              <label for="Green">
                <input type="radio" name="color" id="Green" />
                <span class="color-3"></span>
              </label>
            </div>

            <div className="quantity">
              <p>Quanitity</p>
              <input type="number" value="1"></input>
            </div>
            <button>Buy Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
