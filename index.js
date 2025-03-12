const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
  console.log(`Expreess app is listening ${port}`);
});

app.use((req, res) => {
  // console.log(res);
  console.log("request received successfully");
  // res.send("Response has been sent successfully");
  res.send({
    name: "Hamad Ullah",
    startup: "To start a food buissnes ",
    inspiration: "My Mother",
    Yeartoacheive: 2027,
  });
});
