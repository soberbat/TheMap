import Map from "./Components/Map";
import Us from "./Country/Us";
import Bar from "./Components/Bar";
import Particle from "./Components/Particle";
import { useState, useEffect } from "react";
import Welcome from "./Components/Welcome";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [country, setCountry] = useState(null);
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

  return (
    <div
      className={`relative main-bg overflow-hidden flex items-center justify-center w-screen h-screen ${
        background ? "bg-blackk" : null
      } `}
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
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visibility && <Welcome setVisibility={setVisibility} />}
      </AnimatePresence>

      {/* {<Particle />} */}
    </div>
  );
}

export default App;
