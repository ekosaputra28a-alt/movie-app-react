import { useState } from "react";
import "./styles/Login.css";

function Login({ onLogin, goRegister }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Isi email dan password");
      return;
    }

    try {

      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {

        localStorage.setItem("token", data.token);
        onLogin();

      } else {

        alert(data.message);

      }

    } catch (error) {

      alert("Tidak bisa terhubung ke server");

    }
  };

  return (
    <div className="login-container">

      <form className="login-box" onSubmit={handleSubmit}>

        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p style={{marginTop:"15px"}}>
          Belum punya akun?{" "}
          <span
            onClick={goRegister}
            style={{color:"#22c55e",cursor:"pointer"}}
          >
            Register
          </span>
        </p>

      </form>

    </div>
  );
}

export default Login;