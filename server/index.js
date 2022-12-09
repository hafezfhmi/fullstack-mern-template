const http = require("http");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const app = require("./app");
const db = require("./utils/database");

const PORT = 3001;

const server = http.createServer(app);

db.sync()
  .then(() => {
    console.log("Database synced");

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
