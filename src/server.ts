import { config } from "./config";
import express, { Express } from "express";
import { setupApp } from "./app";

const httpServer: Express = express();

const httpPort: Number = Number(config.HTTPSERVER);
setupApp(httpServer);
httpServer.listen(httpPort, () => {
  console.log(`HTTP Server started on PORT ${httpPort} ✈✈`);
});
