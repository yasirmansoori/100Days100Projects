import { useEffect, useState } from "react";

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 105000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <div
      className={`color col ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value m-0">{weight}%</p>
      <p className="color-value m-0">{`rgb(${bcg})`}</p>
      <p className="color-value m-0">{hexValue}</p>
      {/* <Clipboard /> */}
      {alert && <p className="text-center">Copied to clipboard</p>}
    </div>
  );
}

export default SingleColor;
