import express from "express";
import { userRouter } from "../routes/userRouter.mjs";

function createServer() {
  const app = new express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(userRouter);
  return app;
}

export default createServer;
