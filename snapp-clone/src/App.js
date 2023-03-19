import "./App.css";
import Navbar from "./components/Navbar";
import NavMenu from "./components/NavMenu";
import { useStateContext } from "./context/ContextProvider";

function App() {
  const {activeMenu} = useStateContext()
  return (
    <div>
      <Navbar />
      {activeMenu && <NavMenu />}
    </div>
  );
}

export default App;
