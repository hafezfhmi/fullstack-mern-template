const express = require("express");
const cors = require("cors");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const { createClient } = require("redis");

const usersRouter = require("./routes/users");
const catsRouter = require("./routes/cats");
const authRouter = require("./routes/auth");

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

module.exports = app;
