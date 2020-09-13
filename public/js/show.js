
window.onload = function () {
  //===BREAKDOWN QUERY STRING. UPDATE HTML CONTENT.===
  const queryArray = location.search.split("|");
  const title = queryArray[0].substring(1).split("%20").join(" ");
  const description = queryArray[1].split("%20").join(" ");
  const imageURL = queryArray[2];
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
};
