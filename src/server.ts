import express, { Express } from "express";
import { config } from "./config";
import { setupApp } from "./app";

const httpServer: Express = express();

const httpPort: Number = Number(config.HTTPSERVER);
setupApp(httpServer);
httpServer.listen(httpPort, () => {
  console.log(`HTTP Server started on PORT ${httpPort} ✈✈`);
});
