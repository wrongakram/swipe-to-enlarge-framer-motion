import React, { useEffect } from "react";
import ProductImage from "../assets/product.png";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";
import {
  motion,
  useSpring,
  useTransform,
  AnimatePresence
} from "framer-motion";

//svgs
import { ReactComponent as Close } from "../assets/close.svg";

const dragProductMachine = Machine({
  id: "drag",
  initial: "inactive",
  states: {
    inactive: {
      on: { DRAG: "active" }
    },
    active: {
      on: { DRAGGING: "inactive" }
    }
  }
});

const Product = () => {
  let x = useSpring(0, { stiffness: 100, damping: 100, ease: "easeOut" });
  const fadeIn = useTransform(x, [-200, 0, 200], [1, 0, 0]);
  const fadeOut = useTransform(x, [-60, 0, 0], [0, 1, 1]);
  const scale = useTransform(x, [-200, 0, 200], [1.25, 1, 1]);
  const width = useTransform(x, [-1000, 0, 200], [350, 0, 0]);
  const up = useTransform(x, [-200, 0, 200], [-60, 0, 0]);
  const down = useTransform(x, [-200, 0, 200], [60, 0, 0]);

  //scrolltargets
  let targetElement = document.querySelector("html");

  const [state, send] = useMachine(dragProductMachine);

  const closeProductDrag = () => {
    x.stop();
    x.set(0);
    console.log("clicked");
  };

  useEffect(() => {
    state.value === "active"
      ? targetElement.classList.add("no-scroll")
      : targetElement.classList.remove("no-scroll");
  });

  useEffect(() => {
    x.onChange(() => {
      x.get() > -200 ? send("DRAGGING") : send("DRAG");
    });
  }, [send, x]);

  return (
    <div className='product'>
      <div className='product-inner'>
        <div className='product-content'>
          <motion.div
            style={{ translateY: up }}
            className='product-content-inner'>
            <h4>Freedom Everywhere</h4>
            <h1>HiFive1 Rev B</h1>
            <p>
              HiFive1 is a low-cost, Arduino-compatible development board
              featuring the Freedom E310. It’s the best way to start prototyping
              and developing your RISC‑V applications.
            </p>
            <div className='btn-row'>
              <button>Buy Now ($59)</button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='product-slide-enlarge'>
        <motion.div
          className='background'
          style={{ opacity: fadeIn }}></motion.div>
        {state.value === "inactive" ? (
          <AnimatePresence></AnimatePresence>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ ease: "easeOut" }}
              className='product-drag-header'>
              <div className='company-name'>HiFive1</div>
              <div onClick={closeProductDrag} className='close'>
                <Close />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        <div className='product-container'>
          <motion.div
            drag='x'
            style={{ x, scale }}
            dragElastic={0.05}
            dragConstraints={{ left: -1000, right: 0 }}
            className='product-image'>
            <img src={ProductImage} alt='product' />
          </motion.div>
        </div>
        <motion.div style={{ paddingBottom: down }} className='product-drag'>
          <div className='product-drag-inner'>
            <div className='product-drag-label'>
              <motion.h6 style={{ x, opacity: fadeOut }}>
                Drag To Enlarge
              </motion.h6>
              {/* {state.value === "inactive" ? state.value : state.value} */}
            </div>
            <div className='product-drag-progress-background'>
              <motion.div
                style={{ width }}
                className='product-drag-progress'></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
