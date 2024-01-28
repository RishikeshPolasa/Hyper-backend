// import { getUser } from "../services/user/userService.mjs";
import { signJWT, verifyJWT } from "../utils/jwt.utils.mjs";

export const userSignHandler = (req, res) => {
  try {
    console.log("body");
    const { email } = req.body;
    //     const user = getUser(email, password);

    //     if (!user) {
    //       res.status(401).send("user not found");
    //     }
    //create access token
    res.status(201).send({
      email: email,
      // Other data as needed
    });
    //     res.send("login");
  } catch (error) {
    console.error(error);
  }
};

export const sessionHandler = (req, res) => {
  return res.send(req.user);
};

export const deleteSessionHandler = (req, res) => {
  res.cookie("accessToken", "", {
    maxAge: 0,
    httpOnly: true,
  });
  return res.send({ success: true });
};
