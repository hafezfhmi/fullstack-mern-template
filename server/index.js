const express = require("express");
const cors = require("cors");
const session = require("express-session");

const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const db = require("./utils/database");

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(session({ secret: "cat", resave: false, saveUninitialized: false }));

// Routes
app.use("/api/user", usersRouter);
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
