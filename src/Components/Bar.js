import React, { useEffect } from "react";
import "./Map.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Bar({ viewedCountry, data, setNav }) {
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
        duration: 0.5,
        ease: "linear",
        when: "afterChildren",
      },
    },
    visible: {
      width: 400,
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
      y: -400,
    },
    exited: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

      <motion.h1 className="flag" variants={child}>
        {viewedCountry.flag}
      </motion.h1>
      <motion.h1 className="flag" variants={child}>
        {viewedCountry.altSpellings[1]}
      </motion.h1>
    </motion.div>
  );
}

export default Bar;
