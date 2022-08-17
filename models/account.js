const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nodemy_express");

const Schema = mongoose.Schema;
const AccountSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: "account",
  }
);

const AccountModel = mongoose.model("account", AccountSchema);

for (let i = 0; i < 20; i++) {
  AccountModel.create({
    username: "Nodemy_" + i,
    password: "123456",
  });
}

module.exports = AccountModel;
