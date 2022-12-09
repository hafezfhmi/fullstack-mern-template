const dotenv = require("dotenv");

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const { createClient } = require("redis");

dotenv.config({ path: "./.env" });
const usersRouter = require("./routes/users");
const catsRouter = require("./routes/cats");
const authRouter = require("./routes/auth");
const db = require("./utils/database");

const app = express();
const redisClient = createClient({ legacyMode: true });
redisClient.connect().catch(console.error);

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "cat",
    resave: false,
    saveUninitialized: false,
  })
);

// Routes
app.use("/api/user", usersRouter);
app.use("/api/cat", catsRouter);
app.use("/auth", authRouter);

const PORT = 3001;

db.sync()
  .then(() => {
    console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
