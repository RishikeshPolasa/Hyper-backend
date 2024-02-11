import { regtisterUser, loginUser } from "../services/user/userService.mjs";

export const userSignUpHandler = async (req, res) => {
  try {
    const { email, password, userName } = req.body;

    if (!email || !password || !userName) {
      return res
        .status(400)
        .json({ message: "Email,userName and password are required" });
    }
    await regtisterUser({ email, password, userName });
    res.status(201).json({ message: "Successfully registered" });
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const userLoginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await loginUser({ email, password });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
