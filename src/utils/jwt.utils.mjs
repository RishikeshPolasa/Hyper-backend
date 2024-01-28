import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_KEY || "9090";

//sign jwt
export const signJWT = (payload, expiresIn) => {
  return jwt.sign(payload, secretKey);
};

//verify jwt
export const verifyJWT = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return { payload: decoded, expired: false };
  } catch (error) {
    return {
      payload: null,
      expired: error.message.includes("jwt expired"),
    };
  }
};
