import express from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import { xssFilter } from "helmet";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(xssFilter());

const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
app.use(cors({ origin: allowedOrigins }));

app.get("/health", (req, res) => {
  res.send("OK");
});

app.use("/api/ai", (await import("./src/routes/aiRoutes.js")).default);

export default app;
