import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-for-development-only";
const SALT_ROUNDS = 10;
const TOKEN_EXPIRY = "1d"; // 1 day

/**
 * Hash a plain text password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
}

/**
 * Compare a plain text password with a hashed password
 */
export async function comparePassword(
    plainPassword: string,
    hashedPassword: string
): Promise<boolean> {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}

/**
 * Generate a JWT token with user payload
 */
export function generateToken(payload: { userId: string; role: string }): string {
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: TOKEN_EXPIRY,
    });
    return token;
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): { userId: string; role: string } | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as {
            userId: string;
            role: string;
        };
        return decoded;
    } catch (error) {
        console.error("Token verification failed:", error);
        return null;
    }
}
