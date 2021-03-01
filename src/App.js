import "./App.css";
import BillCard from "./components/BillCard";
import Card from "./components/Card";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <div style={{ padding: "10px", marginBottom: "10px" }}>
          <Main />
        </div>
        <div style={{ padding: "12px" }}>
          <Card />
        </div>
        <div style={{ padding: "12px" }}>
          <BillCard />
        </div>
      </div>
    </div>
  );
}

export default App;
