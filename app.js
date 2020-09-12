const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  fetch = require('node-fetch');

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/recipe", (req, res) => {
  // fetch('https://api.spoonacular.com/recipes/random?apiKey=120a318750fc4294b6406710583ca19b&number=1&tags=vegetarian')
  //   .then(res => res.json())
  //   .then((json) => {
  //     console.log(json);
  //     return res.render("recipe", { recipe: json.recipes[0] })
  //   });

});



app.listen(3000, (req, res) => {
  console.log("We are live, sir!")
});