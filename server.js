const express = require("express");
const bodyParser = require("body-parser");
const accountRouter = require("./routers/routerAccount");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/account/", accountRouter);

app.get("/", (req, res, next) => {
  res.json("HOME");
});

app.listen(5000, () => {
  console.log(`Server started on port`);
});

//Khi deploy len heroku
// app.listen(process.env.PORT, () => {
//   console.log(`Server started on port`);
// });
