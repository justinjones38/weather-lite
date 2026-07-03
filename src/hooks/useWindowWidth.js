import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const changeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWindow);
    return () => window.removeEventListener("resize", changeWindow);
  }, []);
  return { windowWidth };
}
