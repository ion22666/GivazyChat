import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";

import { User } from "../../models/user";
import getGoogleUserInfo from "../../utils/getGoogleUserInfo";

// google oauth register
// receive the code -> get user's google email -> verify email not already in use -> create user -> create and send JWT
export const google_register_handler: Handler = async (req, res) => {
    try {
        // check for params
        if (!req.query.code) throw new Error("Something bad happened with google auth");

        // fetch user info
        let user_info = await getGoogleUserInfo(req.query.code.toString(), "/api/register/google");

        // make sure that the email is not already in use
        if (await User.findOne({ "oauth.google.email": user_info.email })) throw new Error("Google account aleady in use");

        // creem userul
        let user = await User.create({ oauth: { google: user_info } });

        // cream un JWT pentru user
        const token = user.createJWT();

        res.set("Authorization", `Bearer ${token}`);
        return res.status(200).json({ token });
    } catch (e) {
        if (process.env.API_ONLY) return res.status(401).json({ error: e });
        return res.status(401).redirect("/login?errors=" + encodeURIComponent(e));
    }
};
