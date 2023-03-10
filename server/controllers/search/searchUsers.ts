import { Handler } from "express";

import { User } from "../../models/userModel";

const searchUsers: Handler = async (req, res) => {
    try {
        const searchInput: string = req.body.searchInput;

        const usersData = await User.find({
            $or: [
                {
                    username: new RegExp(searchInput, "i"),
                },
                {
                    _id: searchInput.slice(0, 12).padEnd(12, "0"),
                },
            ],
        });

        return res.json({ data: usersData });
    } catch (e) {
        return res.json({ error: e });
    }
};

export default searchUsers;
