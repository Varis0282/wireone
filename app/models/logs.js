import mongoose, { Schema } from "mongoose";

const logsSchema = new Schema({
    message: { type: String, required: true },
    userId: { type: String, ref: 'User' },
    action: { type: String },
    configId: { type: String, ref: 'Config' },
}, { timestamps: true });

export default mongoose.model("Logs", logsSchema);