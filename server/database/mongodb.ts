import mongoose from "mongoose";
import config from "./config";

mongoose.set("strictQuery", true);
mongoose.connect(`mongodb+srv://${config.USERNAME}:${config.PASSWORD}@cluster0.wgurxzm.mongodb.net/${config.DATABASE}?retryWrites=true&w=majority`);

export default mongoose;
