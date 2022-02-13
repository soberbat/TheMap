import Map from "./Components/Map";

import Bar from "./Components/Bar";
import Particle from "./Components/Particle";
import { useState, useEffect } from "react";
import Welcome from "./Components/Welcome";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [country, setCountry] = useState(null);
  const [alert, setAlert] = useState(true);
  const [nav, setNav] = useState(false);
  const [background, setbackground] = useState(false);
  const [visibility, setVisibility] = useState(true);
  const [data, setData] = useState([]);
  const [viewedCountry, setViewedCountry] = useState([]);

  useEffect(() => {
    let viewed = data.find((item) => item.cca2 === country);
    setViewedCountry(viewed);
  }, [country]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setAlert((prev) => !prev);
  };

  return (
    <motion.div
      animate={{
        backgroundColor: nav ? "#00171f" : "#c3cbd5",
        transition: {
          duration: 1,
        },
      }}
      className={`relative main-bg overflow-hidden flex items-center justify-center w-screen h-screen  `}
    >
      <Map
        setNav={setNav}
        setbackground={setbackground}
        setCountry={setCountry}
        nav={nav}
        visibility={visibility}
      />

      <AnimatePresence>
        {nav && (
          <Bar
            viewedCountry={viewedCountry}
            country={country}
            setNav={setNav}
            nav={nav}
            data={data}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visibility && <Welcome setVisibility={setVisibility} />}
      </AnimatePresence>

      {<Particle />}
      <motion.h1
        animate={{
          x: alert ? 0 : 300,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        className="fixed flex items-center justify-between gap-6 px-6 py-2 bg-white rounded-sm shadow-sm right-2 bottom-2 "
      >
        Choose a country{" "}
        <span onClick={handleClick} className="font-extrabold cursor-pointer">
          X
        </span>
      </motion.h1>
    </motion.div>
  );
}

export default App;
