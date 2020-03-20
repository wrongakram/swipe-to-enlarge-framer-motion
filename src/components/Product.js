import React from "react";
import ProductImage from "../assets/product.png";

//svgs
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";

const Product = () => {
  return (
    <div className='product'>
      <div className='product-inner'>
        <div className='product-content'>
          <div className='product-content-inner'>
            <h4>Freedom Everywhere</h4>
            <h1>HiFive1 Rev B</h1>
            <p>
              HiFive1 is a low-cost, Arduino-compatible development board
              featuring the Freedom E310. It’s the best way to start prototyping
              and developing your RISC‑V applications.
            </p>
            <div className='btn-row'>
              <button>Buy Now ($59)</button>
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
      <div className='product-slide-enlarge'>
        <div className='background'></div>
        <div className='product-drag-header'>
          <div className='company-name'>HiFive1</div>
          <div className='close'>
            <Close />
          </div>
        </div>
        <div className='product-container'>
          <div className='product-image'>
            <img src={ProductImage} alt='product' />
          </div>
        </div>
        <div className='product-drag'>
          <div className='product-drag-inner'>
            <div className='product-drag-label'>
              <h6>
                <Chevron />
                Drag To Enlarge
              </h6>
            </div>
            <div className='product-drag-progress-background'>
              <div className='product-drag-progress'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
