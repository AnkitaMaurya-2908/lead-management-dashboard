// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// dotenv.config();
// connectDB();

// const app = express();

// app.use(express.json());

// // 🔹 TEST ROUTE
// app.get("/test", (req, res) => {
//   res.send("Server + MongoDB working");
// });

// // 🔹 ADD THIS LINE (VERY IMPORTANT)
// app.use("/api/leads", require("./routes/leads"));

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

/* ✅ ENABLE CORS */
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

// 🔹 TEST ROUTE
app.get("/test", (req, res) => {
  res.send("Server + MongoDB working");
});

// 🔹 LEADS ROUTES
app.use("/api/leads", require("./routes/leads"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
