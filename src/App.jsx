import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{ backgroundColor: "#030712", minHeight: "100vh" }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;