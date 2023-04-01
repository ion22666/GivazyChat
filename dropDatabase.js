import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
var config = {
    DATABASE: "givazy",
    USERNAME: process.env.MONGODB_USERNAME,
    PASSWORD: process.env.MONGODB_PASSWORD,
};

mongoose.set("strictQuery", true);

(async () => {
    await mongoose.connect(`mongodb+srv://${config.USERNAME}:${config.PASSWORD}@cluster0.wgurxzm.mongodb.net/${config.DATABASE}?retryWrites=true&w=majority`);
    // Get all collection names in the current database
    await mongoose.connection.dropDatabase();
    console.log("All collections dropped!");
    await mongoose.connection.close();
    return;
})();
