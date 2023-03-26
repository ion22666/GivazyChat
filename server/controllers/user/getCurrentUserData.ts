import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";

export const getCurrentUserData: Handler = async (req, res) => {
    res.json({ data: req.user.currentUser() });
};
