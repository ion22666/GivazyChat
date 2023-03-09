import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { delete_user } from "../controllers/user/deleteUser";
import { get_chats } from "../controllers/user/getChats";
import { get_friends } from "../controllers/user/getFriends";
import { get_user_data } from "../controllers/user/getUserData";

export default express.Router().get("/data", get_user_data).get("/friends", get_friends).get("/chats", get_chats).get("/delete", delete_user);
