import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";

import { User } from "../../models/userModel";
import getGoogleUserInfo from "../../utils/getGoogleUserInfo";
import inject_jwt_into_localstorage from "../../utils/inject_jwt_into_localstorage";

// google oauth register
// receive the code -> get user's google email -> verify email not already in use -> create user -> create and send JWT
export const google_register_handler: Handler = async (req, res) => {
    try {
        // check for params
        if (!req.query.code) throw new Error("Something bad happened with google auth");

        // fetch user info
        let user_info: global.GoogleUserInfo = await getGoogleUserInfo(req.query.code.toString(), "/api/register/google");

        // make sure that the email is not already in use
        if (await User.findOne({ "oauth.google.email": user_info.email })) throw new Error("Google account aleady in use");

        // creem userul
        let user = await User.create({ username: user_info.name, picture: user_info.picture, oauth: { google: user_info } });

        // cream un JWT pentru user
        const token = user.createJWT();

        return res.status(200).send(inject_jwt_into_localstorage(token));
    } catch (e) {
        if (process.env.API_ONLY) return res.status(401).json({ error: e });
        return res.status(401).redirect("/login?errors=" + encodeURIComponent(e));
    }
};
