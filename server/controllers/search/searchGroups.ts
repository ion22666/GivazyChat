import { Handler } from "express";

const searchGroups: Handler = async (req, res) => {
    try {
        return res.json({ data: [] });
    } catch (e) {
        return res.json({ error: e });
    }
};
export default searchGroups;
