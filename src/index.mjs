import createServer from "./utils/server.mjs";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = createServer();

dotenv.config();

const port = process.env.PORT || 3000;

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.htaibqw.mongodb.net/`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
