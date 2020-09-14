
window.onload = function () {
  //===ADD A SECOND STYLESHEET TO HEAD===
  //NOT IDEAL, BUT WANTED TO TRY IT THIS WAY
  const head = document.querySelector("head");
  const newStyleSheet = document.createElement('link');
  newStyleSheet.rel = "stylesheet";
  newStyleSheet.href = "/stylesheets/show.css"
  head.appendChild(newStyleSheet);

  //===EXTRACT JSON INDEX FROM QUERY STRING.=== 
  let foodId = location.search.substr(1);
  let recipe = JSON.parse(localStorage.getItem(`recipe${foodId}`));

  //===UPDATE HTML CONTENT.===
  document.querySelector("h1").textContent = recipe.title;
  document.querySelector(".summary").innerHTML = recipe.summary;
  document.querySelector("img").setAttribute("src", recipe.image);
  document.querySelector(".readyInMinutes").innerHTML = recipe.readyInMinutes;
  document.querySelector(".servings").innerHTML = recipe.servings;
  document.querySelector(".sourceUrl").setAttribute("href", recipe.sourceUrl);
  document.querySelector(".instructions").innerHTML = recipe.instructions;

  recipe.extendedIngredients.forEach((ingredient) => {
    let li = document.createElement('li');
    li.textContent = ingredient.originalString;
    document.querySelector(".extendedIngredients").appendChild(li);
  });

  document.getElementById("back-button").addEventListener("click", (e) => {
    window.history.back();
  });
};
