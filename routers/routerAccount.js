const express = require("express");
const router = express.Router();
const AccountModel = require("../models/account");

// Lay thong tin account
router.get("/", (req, res, next) => {
  var page = req.query.page;
  if (page) {
    //get page
    var PAGE_SIZE = 3;
    page = parseInt(page);
    if (page < 1) {
      page = 1;
    }
    var skip_number = (page - 1) * PAGE_SIZE;
    AccountModel.find({})
      .skip(skip_number)
      .limit(PAGE_SIZE)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json("Loi server"));
  } else {
    //get all
    AccountModel.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json("Loi server");
      });
  }
});

// Them 1 account
router.post("/", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  AccountModel.create({
    username: username,
    password: password,
  })
    .then((data) => {
      res.json("Da them thanh cong");
    })
    .catch((err) => res.status(500).json("Loi server"));
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const newPassword = req.body.newPassword;
  AccountModel.findByIdAndUpdate(id, {
    password: newPassword,
  })
    .then((data) => {
      res.json("Update thanh cong");
    })
    .catch((err) => res.status(500).json("Loi server"));
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  AccountModel.deleteOne({
    _id: id,
  })
    .then((data) => res.json("Da xoa thanh cong"))
    .catch((err) => res.status(500).json("Loi server"));
});

module.exports = router;
