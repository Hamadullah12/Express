// const express = require("express");
// const app = express();

// let port = 8080;
// app.listen(port, () => {
//   console.log(`Expreess app is listening ${port}`);
//   app.get("/", (req, res) => {
//     res.send("successfully connected to the get method");
//   });
//   app.get("/:search/:username", (req, res) => {
//     let { search, username } = req.params;
//     res.send(`successfully connected to the search path of @${search} and with username fo ${username}`);
//   });
//   app.get("/contact", (req, res) => {
//     res.send("successfully connected to the contaced path");
//   });
//   app.get("*", (req, res) => {
//     res.send("this does not contain");
//   });
//   app.post("/root", (req, res) => {
//     res.send("You requed to the post root defination  method");
//   });
// });

// // app.use((req, res) => {
// //   // console.log(res);
// //   console.log("request received successfully");
// //   // res.send("Response has been sent successfully");
// //   res.send({
// //     name: "Hamad Ullah",
// //     startup: "To start a food buissnes ",
// //     inspiration: "My Mother",
// //     Yeartoacheive: 2027,
// //   });
// // });

// path pararmeterrs
// const express = require("express"); //we have to import express
// const app = express();

// let port = 8080; //locall server
// app.listen(port, () => {
//   //it listen the request
//   console.log(`${port} server is succesfully running`);
//   app.get("/:username/:id", (req, res) => {
//     //these are paht parameters with get method
//     let { username, id } = req.params; //params are parameters that is used to display the paramerter that we pass
//     let htmlCode = `<h1>The user @${username} has <p> been enrolled </p> with id: ${id} </h1>`;
//     res.send(htmlCode); //at the end we send the response
//   });
// });

// const express = require("express");
// const app = express();
// let port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
//   app.get("/:name/:password", (req, res) => {
//     let { name, password } = req.params;
//     res.send(`${name} and the password is ${password}`);
//   });
// });

const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("<h1>Nothing searched</h1>");
  }
  res.send(`Serch results for ${q}`);
});
