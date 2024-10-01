import mongoose, { Schema } from "mongoose";

const configSchema = new Schema({
    name: { type: String, required: true },
    distanceBasePrice: {
        mon: {
            price: { type: String, required: true }, // in INR
            upto: { type: String, required: true }  // in KM
        },
        tue: {
            price: { type: String, required: true },
            upto: { type: String, required: true }
        },
        wed: {
            price: { type: String, required: true },
            upto: { type: String, required: true }
        },
        thu: {
            price: { type: String, required: true },
            upto: { type: String, required: true }
        },
        fri: {
            price: { type: String, required: true },
            upto: { type: String, required: true }
        },
        sat: {
            price: { type: String, required: true },
            upto: { type: String, required: true }
        },
        sun: {
            price: { type: String, required: true },
            upto: { type: String, required: true }
        },
    },
    distanceAdditionalPrice: {
        price: { type: String, required: true },   // in INR
        after: { type: String, required: true },   // in KM
    },
    timeMultipleFactor: {
        under1hour: { type: String, required: true },  // in number
        under2hour: { type: String, required: true },
        under3hour: { type: String, required: true },
        after3hour: { type: String, required: true },
    },
    waitingCharge: {
        price: { type: String, required: true },   // in INR
        after: { type: String, required: true },   // in minutes
    },
    createdBy: { type: String, ref: 'User' },
}, { timestamps: true });

export default mongoose.model("Config", configSchema);