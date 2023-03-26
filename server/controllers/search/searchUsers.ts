import { Handler } from "express";

import { User } from "../../models/userModel";

const countLimit = 20;
const searchUsers: Handler = async (req, res) => {
    try {
        const searchInput: string = req.query.input.toString();
        const skip: number = parseInt(req.query.skip?.toString() || "0");
        const usersData = await User.aggregate([
            {
                $match: {
                    $and: [
                        { $or: [{ username: new RegExp(searchInput, "i") }, { _id: searchInput.slice(0, 24).padEnd(24, "0") }] },
                        { _id: { $nin: [...req.user.friends.map(f => f.friendId), req.user._id] } },
                    ],
                },
            },
            {
                $group: {
                    _id: null,
                    totalMatch: { $sum: 1 },
                    data: { $push: "$$ROOT" },
                },
            },
            {
                $project: {
                    _id: 0,
                    totalMatch: 1,
                    data: { $slice: ["$data", skip, countLimit] }, // limit data array to 10 elements
                },
            },
        ]);
        usersData[0].data = usersData[0].data.map(e => ({ ...e, id: e._id }));
        return res.json({ ...usersData[0] });
    } catch (e) {
        console.log(e);
        return res.json({ error: e });
    }
};

export default searchUsers;
