import dotenv from "dotenv";
dotenv.config();

import express from "express";

import searchUsers from "../controllers/search/searchUsers";

export default express.Router().get("/users", searchUsers);
