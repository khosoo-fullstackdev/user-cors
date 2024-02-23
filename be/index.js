// module
// import bla from "bla bla";

// common js
// const bla = require("bla bla");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { users } = require("./dummy.json");
const fs = require("fs");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/users", (request, response) => {
  response.type = "application/json";
  response.send({ users });
});

app.post("/add-user", (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  fs.writeFile("dummy.json", JSON.stringify({ users: users }), (err) => {
    if (err) {
      console.log(err);
      res.send("error happened");
    } else {
      console.log("success");
      res.send("User added successfully");
    }
  });
});

app.post("/delete-user", (req, res) => {
  let deletedDummy = dummyData.users.filter((user) => {
    return user.id != req.body.id;
  });
  fs.writeFile("dummy.json", JSON.stringify({ users: deletedDummy }), (err) => {
    if (err) {
      console.log(err);
      res.send("Error happened when write file");
    } else {
      console.log("dummyData: ", dummyData);
      res.send("dummyData changed success");
    }
  });
});

app.post("/edit-user", (req, res) => {
  let editedDummy = dummyData.users.map((user) => {
    if (user.id == req.body.id) {
      return user.id != req.body.id;
    }
  });

  fs.writeFile("dummy.json", JSON.stringify({ users: editedDummy }), (err) => {
    if (err) {
      console.log(err);
      res.send("Error happened when write file");
    } else {
      console.log("dummyData: ", dummyData);
      res.send("dummyData changed success");
    }
  });
});

app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});
