import dotenv from "dotenv";
import path from "path";
import { EnvConfig } from "./types";

const environmentPath = path.join(__dirname, "..", ".env");
dotenv.config({ path: environmentPath });
export const config: EnvConfig = {
  HTTPSERVER: parseInt(process.env.HTTPPORT || "8000", 10),
};
