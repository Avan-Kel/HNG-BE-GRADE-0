import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// redirects port from env value to the below if an error is encountered in the port or is in use
const PORT = process.env.PORT || 3007;

// Project middlewares 
app.use(cors());
app.use(express.json());

// GET endpoint for /me route
app.get("/me", async (req, res) => {
  try {
    // Cat fact api request
    const catFactResponse = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000, // Timeout handling for external api call 
    });

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

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

   // Handle for potential Cat API failure
    res.status(200).json({
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

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Endpoint not found" });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/me`);
});
