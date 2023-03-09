import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";

import { User } from "../../models/userModel";
import getGoogleUserInfo from "../../utils/getGoogleUserInfo";

// facebook oauth login
export const facebook_login_handler: Handler = async (req, res) => {
    return res.json({ message: "facebook login" });
};
