import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";
import bcrypt from "bcrypt";

import { User } from "../../models/user";
import getGoogleUserInfo from "../../utils/getGoogleUserInfo";

// traditional register
export const traditional_register_handler: Handler = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        if (!email || !username || !password) throw new Error("Some parameters are missing");

        // sa fim siguri ca email-ul nu e deja folosit de cineva
        if (await User.findOne({ email: req.body.email })) throw new Error("email already in use");

        // creem userul
        let user = await User.create({ email, password: await bcrypt.hash(req.body.password, 10), username });

        // cream un JWT pentru user
        const token = user.createJWT();

        res.set("Authorization", `Bearer ${token}`);
        return res.status(200).json({ token });
    } catch (e) {
        return res.status(401).json({ error: e });
    }
};
