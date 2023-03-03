import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { traditional_login_handler } from "../controllers/login/traditional-login";
import { google_login_handler } from "../controllers/login/google-login";
import { facebook_login_handler } from "../controllers/login/facebook-login";

export default express
    .Router()
    // all this routes will be called by the user browser
    .post("/", traditional_login_handler)
    .get("/google", google_login_handler)
    .get("/facebook", facebook_login_handler);
