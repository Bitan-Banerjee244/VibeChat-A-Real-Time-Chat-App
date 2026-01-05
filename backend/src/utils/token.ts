import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
}

const generateToken = (payload: TokenPayload): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  const token = jwt.sign(payload, secret, {
    expiresIn: "7d",
  });

  return token;
};

export default generateToken;
