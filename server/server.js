import app from "./app.js";
import connectDB from "./src/config/db.js";
import env from "./src/config/env.js";

const PORT = env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
