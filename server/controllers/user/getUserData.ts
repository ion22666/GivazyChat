import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";

export const get_user_data: Handler = async (req, res) => res.json({ data: req.user });
