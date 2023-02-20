import type { NextApiHandler } from "next";

import { User } from "../../models/user";

const handler: NextApiHandler = async (req, res) => {
    // try {
    //     await User.create({ email: "iulica@gmail.com" });
    // } catch (e) {
    //     return res.status(500).json({ error: e });
    // }

    // return all users from the database
    return res.status(200).json({ message: "This is the LoginPage API Handler", users: await User.find() });
};

export default handler;
