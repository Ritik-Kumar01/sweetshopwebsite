import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://ritikpareek81077:Pareek123@cluster0.gbapx9o.mongodb.net/?retryWrites=true"

export const dbConnection = () => {
    mongoose
        .connect(MONGO_URI, {
            dbName: "ritikpareek",
        })
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((err) => {
            console.log(`Some error occured while connecing to database: ${err}`);
        });
};