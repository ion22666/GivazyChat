import jwt from "jsonwebtoken";
import { User } from "../models/userModel";

export default async (token: string | undefined): Promise<global.User> => {
    if (!token) throw new Error("Auth token missing on");

    let payload: global.JWT = ((e: string | jwt.JwtPayload) => (typeof e === "string" ? JSON.parse(e) : e)).call(
        null,
        jwt.verify(token, process.env.JWT_PRIVETE_KEY || "givazy", { algorithms: ["HS256"] })
    );

    if (!payload.sub) throw new Error("Invalid token");

    const user = await User.findOne({ _id: payload.sub });
    if (!user) throw new Error("The email from the JWT provided is not associeated to any user");

    return user;
};
