import dotenv from "dotenv";
dotenv.config()

export default {
  MONGO_DATABASE:process.env.MONGO_DATABASE,
  MONGO_USER:process.env.MONGO_USER,
  MONGO_PASWORD:process.env.MONGO_PASWORD,
  MONGO_HOST:process.env.MONGO_HOST,
  PORT: process.env.PORT || 3000
};
