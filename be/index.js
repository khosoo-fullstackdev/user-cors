// module
// import bla from "bla bla";

// common js
// const bla = require("bla bla");

const express = require("express");
const { products, users } = require("./dummy.json");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const fs = require("fs");

app.get("/products", (request, response) => {
  response.type = "application/json";
  response.status(200);
  response.send({ products });
});

app.get("/users", (request, response) => {
  response.type = "application/json";
  response.send({ abc: users });
});

app.post("/add-user", (req, res) => {
  const newUser = req.body;
  console.log(newUser);

  fs.readFile("dummy.json", (error, data) => {
    if (error) {
      console.log("Error in reading file");
    } else {
      const jsonFile = JSON.parse(data.toString());
      jsonFile.users.push(newUser);
      fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
        if (err) {
          console.log(err);
          res.send("error happened");
        } else {
          console.log("success");
          res.send("User added successfully");
        }
      });
    }
  });
  fs.readFile("dummy.json", (error, data) => {
    if (error) {
      console.log("Error in reading file");
    } else {
      const jsonFile = JSON.parse(data.toString());
      jsonFile.users.push(newUser);
      fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
        if (err) {
          console.log(err);
          res.send("error happened");
        } else {
          console.log("success");
          res.send("User added successfully");
        }
      });
    }
  });
});

app.post("/read-new-user", (req, res) => {});

app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});
