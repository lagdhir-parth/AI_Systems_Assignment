import mongoose from "mongoose";

/**
 * aiLogSchema - Mongoose schema for logging AI interactions.
 * This schema defines the structure of documents in the AILog collection, which stores logs of AI interactions including the module, prompt, and response.
 * Each log entry includes timestamps for when it was created and last updated.
 */
const aiLogSchema = new mongoose.Schema(
  {
    module: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AILog", aiLogSchema);
