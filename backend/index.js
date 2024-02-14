// server.js
const express = require("express");
const mongoose = require("mongoose");
const DataModel = require('./models/data');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://sp21bse038:root@cluster0.iwnzsgl.mongodb.net/data");

app.post('/register', (req, res) => {
  DataModel.create(req.body)
    .then(data => res.json(data))
   
});






app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
