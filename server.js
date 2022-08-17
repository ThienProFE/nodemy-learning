const express = require("express");
// const router = require("./apiRouter");
const bodyParser = require("body-parser");
const AccountModel = require("./models/account");
const accountRouter = require("./routers/routerAccount");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/register", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  AccountModel.findOne({ username: username })
    .then((data) => {
      if (data) {
        res.json("User da ton tai");
      } else {
        return AccountModel.create({
          username: username,
          password: password,
        });
      }
    })
    .then((data) => {
      res.json("Tao tai khoan thanh cong");
    })
    .catch((err) => {
      res.status(500).json("Tao tai khoan that bai");
    });
});

app.post("/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  AccountModel.findOne({
    username: username,
    password: password,
  })
    .then((data) => {
      if (data) {
        res.json("Dang nhap thanh cong");
      } else {
        res.status(400).json("Account khong dung");
      }
    })
    .catch((err) => {
      res.status(500).json("Dang nhap that bai (Loi ben server");
    });
});

app.use("/api/account/", accountRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port`);
});
