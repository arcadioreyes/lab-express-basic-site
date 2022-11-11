const express = require("express"); // loads express package
const app = express(); // this executes an express server
const port = 3000; // defining our server port

/* configuring express and telling where my static files are located*/
app.use(express.static("public"));

/* setting up our routes*/

//homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/homepage.html");
});
//about
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

//work
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/work.html");
});

//gallery
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

// server started
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
