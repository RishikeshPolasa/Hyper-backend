import bcrypt from "bcryptjs";
import { User } from "../../Models/userModels.mjs";
import { generateToken } from "../../middleware.mjs";

export const regtisterUser = async ({ email, password, userName }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw { statusCode: 400, message: "Email already exists" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    password: hashedPassword,
    userName,
  });
  await newUser.save();
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw { statusCode: 401, message: "Invalid email" };
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw { statusCode: 401, message: "Invalid password" };
  }
  const token = generateToken(user);
  return {
    data: {
      res: { userName: user.userName, email: user.email, token: token },
      statusCode: 200,
    },
  };
};
