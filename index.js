const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
var cors = require("cors");
const path = require("path");

// const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const categoryRoute = require("./routes/category");
const postRoute = require("./routes/posts");
const settingsRoute = require("./routes/settings");

// const uploadRoute = require("./routes/upload");
// const useruploadRoute = require("./routes/userupload");
// const messageRoute = require("./routes/messages");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use("/images", express.static(path.join(__dirname, "public/images")));
// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

// app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/category", categoryRoute);
app.use("/api/posts", postRoute);
app.use("/api/settings", settingsRoute);
// app.use("/api/upload", uploadRoute);
// app.use("/api/userupload", useruploadRoute);
// app.use("/api/messages", messageRoute);

app.listen(8000, () => {
  console.log("server running");
});
