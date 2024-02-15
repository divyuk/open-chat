import mongoose, { Connection } from "mongoose";
import { DbName } from "@src/types";

export let dbInstance: mongoose.Connection | undefined = undefined;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}\${DbName}`
    );
    dbInstance = connectionInstance.connection;
    console.log(
      `\n☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}\n`
    );
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
