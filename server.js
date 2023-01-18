require("dotenv").config();
const express = require("express");
const app = express();
// const bodyparser = require("body-parser");
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));
const route = require("./routes/route");
const connectDB = require("./db/connect");
const cors = require("cors");
app.use(express.json());
app.use(cors());
// app.use(express.static("public"));
// app.set("views", "./views");
// app.set("view engine", "ejs");

app.use("/", route);
// app.get("/", (req, res) => {
//   // console.log(req.file);
//   // res.render("home.ejs");
//   res.send({ msg: "hello" });
// });

// app.listen(8000, () => {
//   console.log("connected");
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(8000, () => {
      console.log("connected");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
