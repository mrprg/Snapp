import { useState, useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import NavMenu from "./components/NavMenu";
import { useStateContext } from "./context/ContextProvider";

function App() {
  const {activeMenu ,setActiveMenu} = useStateContext()
  const [windowSize, setWindowSize] = useState([
    window.innerWidth
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  if (windowSize > 720) {
      setActiveMenu(false)
  }


  return (
    <div>
      <Navbar />
      <div className='navmenu'>
      {activeMenu && <NavMenu  />}
      </div>
    </div>
  );
}

export default App;
