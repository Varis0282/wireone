import mongoose, { Schema } from "mongoose";
import MongooseDelete from 'mongoose-delete'

const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

userSchema.plugin(MongooseDelete, { deletedAt: true, overrideMethods: ['count', 'countDocuments', 'find'] })

export default mongoose.model("User", userSchema);