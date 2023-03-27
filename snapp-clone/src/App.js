import { useState, useEffect } from "react";
import "./App.css";
import DownloadApp from "./components/DownloadApp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavMenu from "./components/NavMenu";
import Services from "./components/Services";
import SuperApp from "./components/SuperApp";
import { useStateContext } from "./context/ContextProvider";

function App() {
  const { activeMenu, setActiveMenu } = useStateContext();
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleWindowResize
      );
    };
  });

  if (windowSize > 720) {
    setActiveMenu(false);
  }

  return (
    <>
      <div className="navbar-position-sticky">
          <Navbar/>
      </div>

      <Hero />

      <DownloadApp />

     <Services />

     <div className="food-order-image">
      <img src="https://cdn.donya-e-eqtesad.com/thumbnail/aPUe4kUSCGHH/QHn8O9nsSzT8qCU7RegsN6Pbb5v74eEtbKeSOh05RaY4kX0q0_Y_8Ut7TZyzEhnm/%D8%A7%D8%B3%D9%86%D9%BE.jpg" />
     </div>
     <SuperApp />
    </>
  );
}

export default App;
