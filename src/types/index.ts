// TypeScript Interfaces for all models
export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    createdAt?: Date;
}

export interface IService {
    _id?: string;
    title: string;
    description: string;
    icon: string;
    price: number;
    features: string[];
}

export interface IProject {
    _id?: string;
    title: string;
    image: string;
    client: string;
    techStack: string[];
    liveLink?: string;
}

export interface IWorkshop {
    _id?: string;
    title: string;
    instructor: string;
    date: Date;
    fee: number;
    type: "free" | "paid";
    curriculum: string[];
}

export interface IEnrollment {
    _id?: string;
    userId: string;
    workshopId: string;
    paymentStatus: "pending" | "completed" | "failed";
    enrolledAt?: Date;
}
