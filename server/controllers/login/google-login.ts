import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";

import { User } from "../../models/user";
import getGoogleUserInfo from "../../utils/getGoogleUserInfo";

// google oauth login
// receive the code -> get user's google email -> verify if exists -> create and send JWT
export const google_login_handler: Handler = async (req, res) => {
    try {
        // check for params
        if (!req.query.code) throw new Error("Something bad happened with google auth");

        // fetch user info
        let user_info = await getGoogleUserInfo(req.query.code.toString(), "/api/login/google");

        // check if user exists
        let user = await User.findOne({ "oauth.google.email": user_info.email });
        if (!user) throw new Error("The google account has no user associated with it");

        const token = user.createJWT();

        res.set("Authorization", `Bearer ${token}`);
        return res.status(200).json({ token });
    } catch (e) {
        if (process.env.API_ONLY) return res.status(401).json({ error: e });
        return res.status(401).redirect("/login?errors=" + encodeURIComponent(e));
    }
};
