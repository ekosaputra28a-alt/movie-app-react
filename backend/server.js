const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const JWT_SECRET = "secretkey123";

// tempat simpan user sementara
let users = [];


// ================= REGISTER =================
app.post("/register", async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email dan password wajib diisi"
      });
    }

    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email sudah terdaftar"
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = {
      email,
      password: hash
    };

    users.push(newUser);

    res.json({
      success: true,
      message: "Register berhasil"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }
});


// ================= LOGIN =================
app.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email tidak ditemukan"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Password salah"
      });
    }

    const token = jwt.sign(
      { email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      success: true,
      message: "Login berhasil",
      token
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }
});


// ================= MIDDLEWARE AUTH =================
function verifyToken(req, res, next) {

  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({
      success: false,
      message: "Token tidak ada"
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {

    if (err) {
      return res.status(401).json({
        success: false,
        message: "Token tidak valid"
      });
    }

    req.user = decoded;
    next();

  });
}


// ================= PROTECTED ROUTE =================
app.get("/profile", verifyToken, (req, res) => {

  res.json({
    success: true,
    message: "Profile berhasil diakses",
    user: req.user
  });

});


app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});