import Map from "./Map";
import Us from "./Country/Us";
import Bar from "./Bar";

import { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState("");
  const [nav, setNav] = useState(false);
  const [background, setbackground] = useState(false);

  return (
    <div
      className={`relative containerb overflow-hidden flex items-center justify-center w-screen h-screen ${
        background ? "bg-blackk" : null
      } `}
    >
      <Map
        setCountry={setCountry}
        setbackground={setbackground}
        setnav={setNav}
        nav={nav}
      />
      {nav ? <Bar country={country} setnav={setNav} /> : null}
    </div>
  );
}

export default App;
