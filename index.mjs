import createServer from "./src/utils/server.mjs";
import dotenv from "dotenv";
const app = createServer();

dotenv.config();

// Specify the port number and start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
