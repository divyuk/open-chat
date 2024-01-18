// app.js
import { Express } from "express";

export function setupApp(app: Express): void {
  // Define your routes and middleware here
  app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

  // Add more routes and middleware as needed
}
