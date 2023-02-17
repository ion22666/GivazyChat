import type { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
    res.status(200).json({ message: "This is the '/login' POST handler" });
};

export default handler;
