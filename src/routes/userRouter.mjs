import express from "express";
import {
  userSignUpHandler,
  userLoginHandler,
} from "../handlers/userHandler.mjs";

const userRouter = express.Router();

userRouter.get("/login", userLoginHandler);

userRouter.post("/register", userSignUpHandler);

export { userRouter };
