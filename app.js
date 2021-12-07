const express = require("express");
const ejs = require("ejs");


const app = express();


app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//Homepage
app.get("/", (req, res) => res.render("index"));
app.get("/movie_desc", (req, res) => res.render("movie_desc"));
app.get("/navbar", (req,res) => {
  res.render("movies");
});
app.get("/seating", (req, res) => res.render("seating"));


let PORT = process.env.PORT;
if (PORT == null || PORT == "") PORT = 3000;

app.listen(PORT, () => {
  console.log(`set up at ${PORT}`);
});
