import express, { Express } from "express";
import { config } from "./config";

const httpServer: Express = express();
const httpPort: Number = Number(config.HTTPSERVER);
httpServer.use(express.json());

httpServer.listen(httpPort, () => {
  console.log(`HTTP Server started on PORT ${httpPort} ✈✈`);
});
