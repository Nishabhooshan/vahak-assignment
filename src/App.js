import "./App.css";
import BillCard from "./components/BillCard/BillCard";
import Card from "./components/Card/Card";
import Main from "./components/Main/Main";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <Main />
        <Card />
        <BillCard />
      </div>
    </div>
  );
}

export default App;
