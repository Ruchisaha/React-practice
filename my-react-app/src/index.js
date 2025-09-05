import express from "express";
import cors from "cors";

const app = express();

// ✅ Yaha apne frontend origin allow karo
app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
