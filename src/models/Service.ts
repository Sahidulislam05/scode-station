import mongoose, { Schema, Model } from "mongoose";
import { IService } from "@/types";

const ServiceSchema = new Schema<IService>(
    {
        title: {
            type: String,
            required: [true, "Service title is required"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Service description is required"],
        },
        icon: {
            type: String,
            required: [true, "Service icon is required"],
        },
        price: {
            type: Number,
            required: [true, "Service price is required"],
            min: [0, "Price cannot be negative"],
        },
        features: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const Service: Model<IService> =
    mongoose.models.Service || mongoose.model<IService>("Service", ServiceSchema);

export default Service;
