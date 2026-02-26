const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const user = {
  email: "admin@gmail.com",
  password: "123456"
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    res.json({ success: true, message: "Login berhasil" });
  } else {
    res.status(401).json({ success: false, message: "Email atau password salah" });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});