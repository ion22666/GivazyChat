import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";
import bcrypt from "bcrypt";

import { User } from "../../models/user";

export const traditional_login_handler: Handler = async (req, res) => {
    const { email, password } = req.body;

    // daca email sau password lipseste
    if (!email || !password) {
        return res.status(401).json({ message: "Some credentials are missing" });
    }

    // cauta in bazade da date un user cu emailul dat
    const user = await User.findOne({ email });

    // daca nu a fost gasit nici un user
    if (!user) {
        return res.status(401).json({ message: "Email not associeted with any user" });
    }

    // se compara parola introdusa de user si parola corecta din baza de date
    if (await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ message: "Password not correct" });
    }

    // create a JWT for the user witch will be used to authenticate the user without providing email and password on every request
    const token = user.createJWT();

    res.set("Authorization", `Bearer ${token}`);
    return res.status(200).json({ token });
};
