import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY;
const expiresIn = "1h";
// async function verifyToken(req,res,next) {
//   try {
//     if (!ctx.header.token) {
//       throw new Error("Token should not be empty");
//     }
//     const bearerHeader = ctx.get("token");
//     const token = ctx.request.header.token.split(" ")[1];
//     ctx.state.jwtPayload = jwt.verify(token, secretKey);
//     await next();
//   } catch (error: any) {
//     ctx.status = 401;
//     ctx.body = error;
//   }
// }

const generateToken = (user) => {
  return jwt.sign(
    { userName: user.userName, userEmail: user.email, userId: user._id },
    secretKey,
    { expiresIn: expiresIn }
  );
};
const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new Error();
  }
};

export { generateToken, comparePassword };
