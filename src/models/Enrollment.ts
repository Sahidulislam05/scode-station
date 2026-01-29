import mongoose, { Schema, Model } from "mongoose";
import { IEnrollment } from "@/types";

const EnrollmentSchema = new Schema<IEnrollment>(
    {
        userId: {
            type: String,
            required: [true, "User ID is required"],
            ref: "User",
        },
        workshopId: {
            type: String,
            required: [true, "Workshop ID is required"],
            ref: "Workshop",
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "completed", "failed"],
            default: "pending",
        },
        enrolledAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

// Compound index to prevent duplicate enrollments
EnrollmentSchema.index({ userId: 1, workshopId: 1 }, { unique: true });

const Enrollment: Model<IEnrollment> =
    mongoose.models.Enrollment ||
    mongoose.model<IEnrollment>("Enrollment", EnrollmentSchema);

export default Enrollment;
