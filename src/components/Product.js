import React from "react";
import ProductImage from "../assets/product.jpg";

import { motion, useMotionValue, useTransform } from "framer-motion";

const Product = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [1, 0, 0]);
  const scale = useTransform(x, [-200, 0, 200], [1.15, 1, 1]);
  return (
    <div className="product">
      <div className="product-inner">
        <div className="product-content">
          <div className="product-content-inner">
            <h4>Freedom Everywhere</h4>
            <h1>HiFive1 Rev B</h1>
            <p>
              HiFive1 is a low-cost, Arduino-compatible development board
              featuring the Freedom E310. It’s the best way to start prototyping
              and developing your RISC‑V applications.
            </p>
            <div className="btn-row">
              <button>Buy Now ($59)</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-slide-enlarge">
        <motion.div className="background" style={{ opacity }}></motion.div>
        <motion.div
          drag="x"
          style={{ x, scale }}
          dragConstraints={{ left: -1000, right: 0 }}
          className="product-image"
        >
          <img src={ProductImage} alt="product" />
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
