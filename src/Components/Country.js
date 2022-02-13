import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Country({ viewedCountry, data }) {
  const [flags, setFlags] = useState([]);
  const [showFlag, setShowFlag] = useState(false);
  // FRAMER MOTİON
  const child = {
    hidden: {
      opacity: 0,
      duration: 0.4,
    },
    exited: {
      x: -400,
      duration: 3,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const itemVar = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
    exit: {
      x: -500,
      opacity: 0,
    },
  };

  const flagVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // FRAMER MOTİON

  //GETTİNG THE NEİGHBOURİNG COUNTRİES FLAGS

  useEffect(() => {
    const getFlags = () => {
      if (viewedCountry.borders) {
        let viewedBorders = viewedCountry.borders;
        console.log(viewedBorders);
        let flags = [];
        viewedBorders.forEach((item) => {
          const neighbour = data.find((el) => el.cca3 === item);
          flags.push(neighbour.flag);
        });
        setFlags(flags);
      }
    };
    setTimeout(getFlags(), 1000);
  }, []);

  const getTheCurrency = () => {
    let currencies = viewedCountry.currencies;
    let [firstValue] = Object.keys(currencies);
    return currencies[firstValue].name;
  };

  //GETTİNG THE NEİGHBOURİNG COUNTRİES FLAGS

  // HANDLERS
  const handleFlagClick = () => {
    setShowFlag((prev) => !prev);
  };
  // HANDLERS

  return (
    <motion.div
      className="flex flex-col items-center gap-6 py-44"
      key={111}
      variants={child}
    >
      <motion.h1 variants={itemVar} className="text-9xl">
        {" "}
        {viewedCountry.flag}{" "}
      </motion.h1>
      <motion.h1 variants={itemVar} className="px-4 text-2xl text-gray-800 ">
        {viewedCountry.altSpellings[1]}
      </motion.h1>
      <motion.span variants={itemVar} className="font-thin text-gray-400">
        Capital:{" "}
        <motion.h1 className="inline ml-5 font-bold text-gray-600 ">
          {viewedCountry.capital}{" "}
        </motion.h1>{" "}
      </motion.span>
      <motion.span variants={itemVar} className="font-thin text-gray-400 ">
        Population:{" "}
        <motion.h1 className="inline ml-5 font-bold text-gray-600 ">
          {viewedCountry.population}{" "}
        </motion.h1>{" "}
      </motion.span>
      <motion.span variants={itemVar} className="font-thin text-gray-400">
        Traffic Flow:{" "}
        <motion.h1 className="inline ml-5 font-bold text-gray-600 ">
          {viewedCountry.car.side.toUpperCase()}{" "}
        </motion.h1>{" "}
      </motion.span>
      <motion.span variants={itemVar} className="font-thin text-gray-400">
        Currency:{" "}
        <motion.h1 className="inline ml-5 font-bold text-gray-600 ">
          {getTheCurrency()}
        </motion.h1>{" "}
      </motion.span>
      <motion.div variants={itemVar} className="px-4 py-2 mt-10 ">
        <h1 className="text-xl text-gray-800 ">
          Neighbouring Countries{" "}
          <motion.span
            whileHover={{ color: "darkblue" }}
            onClick={handleFlagClick}
            className="ml-3 text-gray-400 cursor-pointer"
          >
            ↓
          </motion.span>
        </h1>
        <AnimatePresence>
          {showFlag ? (
            <motion.div
              exit="exit"
              variants={itemVar}
              className="flex flex-wrap justify-center gap-5 px-20 mt-5"
            >
              {flags.map((item, i) => {
                return (
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: showFlag ? 1 : 0,
                      transition: {
                        duration: 0.7,
                        delay: i * 0.4,
                      },
                    }}
                    className="text-xl"
                  >
                    {" "}
                    {item}{" "}
                  </motion.h2>
                );
              })}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default Country;
