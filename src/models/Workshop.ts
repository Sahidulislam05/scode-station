import mongoose, { Schema, Model } from "mongoose";
import { IWorkshop } from "@/types";

const WorkshopSchema = new Schema<IWorkshop>(
    {
        title: {
            type: String,
            required: [true, "Workshop title is required"],
            trim: true,
        },
        instructor: {
            type: String,
            required: [true, "Instructor name is required"],
            trim: true,
        },
        date: {
            type: Date,
            required: [true, "Workshop date is required"],
        },
        fee: {
            type: Number,
            required: [true, "Fee is required"],
            min: [0, "Fee cannot be negative"],
        },
        type: {
            type: String,
            enum: ["free", "paid"],
            required: [true, "Workshop type is required"],
        },
        curriculum: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const Workshop: Model<IWorkshop> =
    mongoose.models.Workshop || mongoose.model<IWorkshop>("Workshop", WorkshopSchema);

export default Workshop;
