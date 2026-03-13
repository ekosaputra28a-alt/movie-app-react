import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./LoginPage";
import Register from "./pages/Register";
import { useState } from "react";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("login");

  return (
    <div style={{ backgroundColor: "#030712", minHeight: "100vh" }}>

      {isLoggedIn ? (
        <>
          <Navbar />
          <Home />
        </>
      ) : (
        <>
          {page === "login" && (
            <Login
              onLogin={() => setIsLoggedIn(true)}
              goRegister={() => setPage("register")}
            />
          )}

          {page === "register" && (
            <Register
              goLogin={() => setPage("login")}
            />
          )}
        </>
      )}

    </div>
  );
}

export default App;