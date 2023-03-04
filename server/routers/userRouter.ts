import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { get_user_data } from "../controllers/user/getUserData";


export default express.Router().get("/data", get_user_data);

