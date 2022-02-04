import React from "react";

function Bar(props) {
  const [width, setwidth] = React.useState("0");
  console.log(width);
  React.useEffect(() => {
    setTimeout(() => {
      setwidth("1/3");
    }, 1000);
  }, []);
  return (
    <div
      className={` w-${width}   h-full transition-all bg-gray-800 fixed top-0 left-0  duration-1000 `}
    >
      <span
        onClick={() => props.setnav((prev) => !prev)}
        className="p-12 bg-blue-400 cursor-pointer "
      >
        X
      </span>
    </div>
  );
}

export default Bar;
