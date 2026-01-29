import mongoose, { Schema, Model } from "mongoose";
import { IProject } from "@/types";

const ProjectSchema = new Schema<IProject>(
    {
        title: {
            type: String,
            required: [true, "Project title is required"],
            trim: true,
        },
        image: {
            type: String,
            required: [true, "Project image is required"],
        },
        client: {
            type: String,
            required: [true, "Client name is required"],
            trim: true,
        },
        techStack: {
            type: [String],
            required: [true, "Tech stack is required"],
            validate: {
                validator: (arr: string[]) => arr.length > 0,
                message: "At least one technology is required",
            },
        },
        liveLink: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Project: Model<IProject> =
    mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
