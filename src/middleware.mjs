const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = process.env;
const secretKey = process.env.SECRET_KEY;
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
  return {
    token: jwt.sign(
      { userName: user.name, userEmail: user.email_id, userId: user.id },
      secretKey
    ),
  };
};
const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new Error();
  }
};

export {  generateToken, comparePassword };
