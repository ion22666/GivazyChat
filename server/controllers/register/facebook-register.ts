import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";

import { User } from "../../models/user";
import getGoogleUserInfo from "../../utils/getGoogleUserInfo";

// facebook oauth register
export const facebook_register_handler: Handler = async (req, res) => {
    return res.json({ message: "facebook login" });
};
