import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { traditional_register_handler } from "../controllers/register/traditional-register";
import { google_register_handler } from "../controllers/register/google-register";
import { facebook_register_handler } from "../controllers/register/facebook-register";

export default express
    .Router()
    // all this routes will be called by the user browser
    .post("/", traditional_register_handler)
    .get("/google", google_register_handler)
    .get("/facebook", facebook_register_handler);
