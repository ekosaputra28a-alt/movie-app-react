import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ backgroundColor: "#030712", minHeight: "100vh" }}>
      {isLoggedIn ? (
        <>
          <Navbar />
          <Home />
        </>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;