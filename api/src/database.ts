import mongoose from "mongoose";
import config from "./config";

const connection = async () => {
  try {
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
/*       user: config.MONGO_USER,
      pass: config.MONGO_PASWORD */
    });
    console.log("db connected to: " + db.connection.name);
  } catch (err) {
    console.log(err);
  }
};
connection();
