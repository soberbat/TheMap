import React from "react";
import { motion } from "framer-motion";

import "./Map.css";

const Welcome = ({ setVisibility }) => {
  return (
    <motion.div
      onClick={() => setVisibility(false)}
      key={"motiondiv"}
      exit={{
        y: "-100%",
        zIndex: 400,
        transition: { ease: "easeInOut", duration: 0.5 },
      }}
      className="fixed z-40 flex items-center justify-center w-screen h-screen welcome-bg"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ x: alert ? 0 : 300, opacity: 1 }}
        className="flex items-center justify-between gap-6 px-6 py-2 bg-white border-4 border-black rounded-sm shadow-sm px "
      >
        Click Somewhere{" "}
        <span
          onClick={() => setVisibility(false)}
          className="font-extrabold cursor-pointer"
        >
          X
        </span>
      </motion.h1>
    </motion.div>
  );
};

export default Welcome;
