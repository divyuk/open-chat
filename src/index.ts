import express, { Express } from "express";

const app: Express = express();

app.use(express.json());

app.listen(() => {
  console.log("Server started ");
});
