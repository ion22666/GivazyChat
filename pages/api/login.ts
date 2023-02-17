import type { NextApiHandler } from "next";

export const handler: NextApiHandler = (req, res) => {
    res.status(200).json({ message: "This is the '/login' POST handler" });
};
