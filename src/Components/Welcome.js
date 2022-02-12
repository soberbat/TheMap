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
      <h1 className="font-mono text-3xl font-thin btn ">Welcome Home!</h1>
    </motion.div>
  );
};

export default Welcome;
