import dotenv from "dotenv";
dotenv.config();

import express from "express";
import searchGroups from "../controllers/search/searchGroups";

import searchUsers from "../controllers/search/searchUsers";

export default express.Router().get("/users", searchUsers).get("/groups", searchGroups);
