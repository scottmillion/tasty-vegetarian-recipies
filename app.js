const
  express = require('express'),
  app = express();


app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/show/:title", (req, res) => {
  res.render("show");
});

app.listen(3000, (req, res) => {
  console.log("We are live, sir!")
});