// module
// import bla from "bla bla";

// common js
// const bla = require("bla bla");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { userNames } = require("./dummy.json");
const fs = require("fs");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/userNames", (request, response) => {
  response.type = "application/json";
  response.send({ userNames });
});

// function writeFile() {
//   fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
//     if (err) {
//       console.log(err);
//       res.send("error happened");
//     } else {
//       console.log("success");
//       res.send("User added successfully");
//     }
//   });
// }

app.post("/add-user", (req, res) => {
  const newUserName = req.body;
  userNames.push(newUserName);

  fs.writeFile(
    "dummy.json",
    JSON.stringify({ userNames: userNames }),
    (err) => {
      if (err) {
        console.log(err);
        res.send("error happened");
      } else {
        console.log("success");
        res.send("User added successfully");
      }
    }
  );
});
// app.post("delete-user", (req, res) => {
//   const idToDelete = req.body.id;
//   fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
//     if (err) {
//       console.log(err);
//       res.send("error happened");
//     } else {
//       console.log("success");
//       res.send("User added successfully");
//     }
//   });
// });

// app.post("update-user", (req, res) => {
//   const { id, updateData } = re.body;
//   fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
//     if (err) {
//       console.log(err);
//       res.send("error happened");
//     } else {
//       console.log("success");
//       res.send("User added successfully");
//     }
//   });
// });

// const updateData = { ...newUser, ...updateUser };

app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});
