const express = require("express");
const router = express.Router();
const AccountModel = require("../models/account");

router.get("/", (req, res, next) => {
  AccountModel.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json("Loi server");
    });
});

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
