import mongoose from "../database/mongodb";

// intrebatil pe giovanni ce se intampla aici :(
const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, sparse: true },
    username: { type: String },
    password: { type: String },
    oauth: {
        google: {
            id: { type: String },
            email: { type: String, unique: true, sparse: true },
            verified_email: { type: String },
            name: { type: String },
            given_name: { type: String },
            family_name: { type: String },
            picture: { type: String },
            locale: { type: String },
        },
        facebook: {},
    },
});

export const User = (mongoose.models.User || mongoose.model("User", UserSchema)) as mongoose.Model<global.User, mongoose.Document>;
