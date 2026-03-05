import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = ["PORT", "MONGODB_URI", "OPENROUTER_API_KEY"];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

if (isNaN(process.env.PORT)) {
  console.error("❌ PORT must be a number");
  process.exit(1);
}

const env = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
};

export default env;
