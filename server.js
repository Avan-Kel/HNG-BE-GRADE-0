import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Use Railway’s port or fallback for local dev
const PORT = process.env.PORT || 3007;

// Middlewares
app.use(cors());
app.use(express.json());

// Root route (optional check)
app.get("/", (req, res) => {
  res.send("Backend is live ✅ - Go to /me to see details");
});

// /me endpoint
app.get("/me", async (req, res) => {
  try {
    const catFactResponse = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const catFact = catFactResponse.data.fact;

    const responseData = {
      status: "success",
      user: {
        email: process.env.USER_EMAIL,
        name: process.env.USER_NAME,
        stack: process.env.USER_STACK,
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    res.json({
      status: "success",
      user: {
        email: process.env.USER_EMAIL,
        name: process.env.USER_NAME,
        stack: process.env.USER_STACK,
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch cat fact at the moment. Please try again later.",
    });
  }
});

// Handle 404s
app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Endpoint not found" });
});

// Listen on all interfaces (important for Railway)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
