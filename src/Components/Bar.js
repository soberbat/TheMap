import React from "react";
import "./Map.css";
import Country from "./Country";
import { motion, AnimatePresence } from "framer-motion";

function Bar({ viewedCountry, data, setNav, nav }) {
  const handleClick = () => {
    setNav((prev) => !prev);
    document.querySelector(".main-bg").classList.remove("bg-blackk");
  };

  console.log(viewedCountry);
  // FRAMER MOTİON
  const parent = {
    hidden: {
      width: 0,
      transition: { when: "beforeChildren" },
    },
    exited: {
      width: 0,
      transition: {
        duration: 0.2,
        ease: "linear",
        when: "afterChildren",
      },
    },
    visible: {
      width: "30%",
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
        duration: 0.5,
        ease: "linear",
        delay: 1,
        when: "beforeChildren",
      },
    },
  };
  const child = {
    hidden: {
      opacity: 0,
    },
    exited: {
      opacity: 0,
      y: -400,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
  // FRAMER MOTİON

  return (
    <motion.div
      key={"bar"}
      variants={parent}
      exit="exited"
      initial="hidden"
      animate="visible"
      className="sidebar"
    >
      <motion.span
        variants={child}
        whileHover={{
          scale: 2,
        }}
        key={4}
        onClick={handleClick}
        className="close-bar"
      >
        X
      </motion.span>

      <AnimatePresence exitBeforeEnter>
        <Country
          key={viewedCountry.ccn3}
          data={data}
          viewedCountry={viewedCountry}
        />
      </AnimatePresence>
    </motion.div>
  );
}

export default Bar;
