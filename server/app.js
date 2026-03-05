import express from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import env from "./src/config/env.js";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

app.use(limiter);
app.use(express.json());
app.use(helmet());

const allowedOrigins = env.allowed_origins.split(",");

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.options("*", cors());

app.get("/health", (req, res) => {
  res.send("OK");
});

app.use("/api/ai", (await import("./src/routes/aiRoutes.js")).default);

export default app;
