// loads express package
const express = require("express");

// this executes an express server
const app = express();

// defining our server port
const port = 3000;

/* configuring express and telling where my static files are located*/
app.use(express.static("public"));

/* setting up our routes*/

//homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/homepage.html");
});
//about
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

//work
app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/views/work.html");
});

//gallery
app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

// server started
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
