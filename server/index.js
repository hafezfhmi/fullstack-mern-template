const express = require("express");
const cors = require("cors");

const usersRouter = require("./routes/users");
const db = require("./utils/database");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", usersRouter);

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
