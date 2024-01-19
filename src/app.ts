// app.js
import { Express } from "express";

export function setupApp(app: Express): void {
  // Define your routes and middleware here
  app.get("/api/v1", (req, res) => {
    res.send("Hello, World!");
  });

  // 👤 User Routes
  app.use("/api/v1/users", userRouter);
}
