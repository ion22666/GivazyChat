import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { delete_user } from "../controllers/user/deleteUser";
import { get_chats } from "../controllers/user/getChats";
import { getCurrentUserData } from "../controllers/user/getCurrentUserData";
import { getUsersData } from "../controllers/user/getUsersData";
import { acceptFriendRequest } from "../controllers/user/friends/acceptFriendRequest";
import { cancelFriendRequest } from "../controllers/user/friends/cancelFriendRequest";
import { get_friends } from "../controllers/user/friends/getFriends";
import { getReceivedFriendRequests } from "../controllers/user/friends/getReceivedFriendRequests";
import { getSentFriendRequests } from "../controllers/user/friends/getSentFriendRequests";
import { rejectFriendRequest } from "../controllers/user/friends/rejectFriendRequest";
import { sendFriendRequest } from "../controllers/user/friends/sendFriendRequest";
import { removeFriend } from "../controllers/user/friends/removeFriend";


export default express
    .Router()
    //
    .get("/", getCurrentUserData)
    .delete("/", delete_user)
    //
    .get("/friends", get_friends)
    .delete("/friends",removeFriend)
    //
    .get("/friends/requests/received", getReceivedFriendRequests)
    .put("/friends/requests/received", acceptFriendRequest)
    .delete("/friends/requests/received", rejectFriendRequest)
    //
    .get("/friends/requests/sent", getSentFriendRequests)
    .put("/friends/requests/sent", sendFriendRequest)
    .delete("/friends/requests/sent", cancelFriendRequest)
    //
    .get("/chats", get_chats)
    //
    .post("/getUsersData", getUsersData);
