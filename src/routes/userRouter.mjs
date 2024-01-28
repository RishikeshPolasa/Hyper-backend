import express from "express";
import {
  userSignHandler,
  sessionHandler,
  deleteSessionHandler,
} from "../handlers/userHandler.mjs";

const userRouter = express.Router();

userRouter.get("/login", (req, res) => {
  res.send("Hello login");
});

userRouter.post("/signup", userSignHandler);

userRouter.get("/session", sessionHandler);

userRouter.delete("/delete", deleteSessionHandler);

export { userRouter };
