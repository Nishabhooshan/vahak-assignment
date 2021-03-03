import "./App.css";
import BillCard from "./components/BillCard/BillCard";
import Card from "./components/Card/Card";
import Main from "./components/Main/Main";
import Navbar from "./components/NavBar/Navbar";
import {
  // isTablet,
  isMobile
} from "react-device-detect";
function App() {
  return (
    <div className="App">
      <div className={isMobile?"mobileCls":"main"}>
        <Navbar />
        <Main />
        <Card />
        <BillCard />
      </div>
    </div>
  );
}

export default App;
