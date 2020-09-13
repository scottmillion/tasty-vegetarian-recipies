fetch = require('node-fetch');

fetch('https://api.spoonacular.com/recipes/random?apiKey=120a318750fc4294b6406710583ca19b&number=1&tags=italian')
  .then(res => res.json())
  .then((json) => {

    for (let j = 0; j < 1; j++) {

      // we will need to handle undefined and maybe null
      console.log(json.recipes[j].title);
      console.log(json.recipes[j].readyInMinutes);
      console.log(json.recipes[j].servings);
      console.log(json.recipes[j].sourceUrl);
      console.log(json.recipes[j].image);
      console.log(json.recipes[j].summary);
      console.log(json.recipes[j].instructions);
      console.log(json.recipes[j].extendedIngredients);

    }
    //catch statement?

  });

{/* <a href="/recipe">Generate another recipe</a>

<h2><%= recipe.title %></h2>

<p>Time to cook: <%= recipe.readyInMinutes %> minutes.</p>

<p>Servings: <%= recipe.servings %></p>

<p>Full recipe info <a href="<%= recipe.sourceUrl %>">here</a>.</p>

<img src="<%= recipe.image %>" alt="">

<p>Description: <%- recipe.summary %></p>

<p>Instructions: <%- recipe.instructions %></p>

<p>Ingredients:</p>
<ul>
  <% recipe.extendedIngredients.forEach(element => { %>
  <li><%= element.original %></li>
  <% }) %>

</ul> */}



// fetch('/js/users.json')
//   .then(response => {
//     // handle response data
//   })
//   .catch(err => {
//     // handle errors
//   });