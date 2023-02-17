import mongoose from "../database/mongodb";

const UserSchema = new mongoose.Schema({});

export const User = mongoose.model("User", UserSchema);

