
window.onload = function () {
  //===BREAKDOWN QUERY STRING. UPDATE HTML CONTENT.===
  let queryArray = location.search.split("|||||");
  console.log(location.search);
  console.log(queryArray);
  let imageURL = queryArray[0].substring(1);
  if (imageURL === "undefined") {
    imageURL = "https://veggieipsum.com/assets/veggie-ipsum.png";
  }
  let title = queryArray[1].split("%20").join(" ") || "Oops! API Issue";
  let description = queryArray[2].split("%20").join(" ") || "Oops! Looks like an Issue from the API";
  document.querySelector("h1").textContent = title;
  document.querySelector("h2").textContent = description;
  document.querySelector("img").setAttribute("src", imageURL);

  //===ADD A SECOND STYLESHEET TO HEAD===
  //NOT IDEAL, BUT WANTED TO TRY IT THIS WAY
  const head = document.querySelector("head");
  const newStyleSheet = document.createElement('link');
  newStyleSheet.rel = "stylesheet";
  newStyleSheet.href = "/stylesheets/show.css"
  head.appendChild(newStyleSheet);

  document.getElementById("back-button").addEventListener("click", (e) => {
    window.history.back();

  })
};
