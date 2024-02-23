const express = require("express");
const cors = require("cors");
const dummyData = require("./dummy.json");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
const fs = require("fs");

app.get("/users", (req, res) => {
  res.type("application.json");
  res.send(dummyData);
  console.log("typeof dummyData: ", typeof dummyData);
});

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

app.listen("4001", () => {
  console.log("Server is listening at port 4001");
});
