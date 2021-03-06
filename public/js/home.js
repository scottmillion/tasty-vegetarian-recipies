//===BACKUP SEED DATA===
const veggieRecipes = [
  {
    title: "Red Curry with Green Beans",
    summary: "Lorem ipsum dolor sit amet consectetur.",
    image: "http://placeimg.com/640/480?random=1599888274339"
  },
  {
    title: "Awesome Blossom Stew",
    summary: "Quibusdam, consectetur ea. Similique consequuntur minus non, id, molestias voluptatum nihil illum soluta, tempore rem voluptates. Iure aliquam id unde eum minima? Ex similique earum repudiandae eos deserunt aspernatur nemo?",
    image: "https://images.unsplash.com/photo-1599840210141-ca4af2ec262a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Red Curry with Green Beans",
    summary: "Aut libero, quaerat accusamus itaque quas eveniet! Nostrum at, tempore eveniet deleniti voluptatibus ut porro libero distinctio rerum et culpa sint odit soluta, dicta enim fugiat cupiditate ex, debitis non.",
    image: "https://images.unsplash.com/photo-1599855796261-da055682563c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "So good that it takes up a lot of title space to write this",
    summary: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://images.unsplash.com/photo-1599734699867-92dd706c8c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Pea Soup",
    summary: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://images.unsplash.com/photo-1599837700354-0e9d832bdb67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Meatless Taco Bowl",
    summary: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://images.unsplash.com/photo-1599839575509-b15589e78aa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Mushroom Fajitas",
    summary: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://images.unsplash.com/photo-1589998205862-5fc4c52a739b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Next title",
    summary: "Culpa, officiis nulla provident a officia, eum reprehenderit, vel impedit quas magni ea nemo fugit. Id quae quas atque deleniti eum nemo repudiandae possimus dolorum dolore, quod in facilis voluptatem.",
    image: "https://images.unsplash.com/photo-1599785209728-60659c85926d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Next title",
    summary: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://images.unsplash.com/photo-1599813391721-ed8c5fe98166?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Next title",
    summary: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://images.unsplash.com/photo-1599831977536-10cdc8548892?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Next title",
    summary: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://images.unsplash.com/photo-1599833058222-6ab271909436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Next title",
    summary: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://images.unsplash.com/photo-1599848096978-7ce3709c3ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
];

window.onload = function () {
  //===SELECT ELEMENTS FOR ASSIGNMENT===
  let dishTitles = document.getElementsByTagName("h5");
  let dishPicPs = document.getElementsByClassName("dish-pic-p");
  let dishPics = document.getElementsByClassName("dish-pic");
  let imageButtonLinks = document.querySelectorAll(".image-button-link");

  //===Update Elements with Spoonacular Food-Api Results  ===
  function runApi(jsonOrArrOfObjects) {
    for (let i = 0; i < 12; i++) {
      //IF ERROR WITH JSON, USE SEED DATA
      let recipe = jsonOrArrOfObjects.recipes[i] || veggieRecipes[i];

      //LOCAL STORAGE FOR SHOW PAGE
      window.localStorage.setItem(`recipe${i}`, JSON.stringify(recipe));

      // ASSIGN IMAGE URLS
      document.getElementById(`image${i}`).style.backgroundImage = `url(${recipe.image || 'https://veggieipsum.com/assets/veggie-ipsum.png'})`;

      // ASSIGN TITLES
      if (recipe.title.length > 50) {
        dishTitles[i].textContent = recipe.title.substr(0, 50) + "...";
      } else {
        dishTitles[i].textContent = recipe.title;
      }

      // STRIP HTML FROM SUMMARY
      function stripHtml(html) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
      }

      let summary = stripHtml(recipe.summary) || recipe.summary;

      // ASSIGN SUMMARY
      if (summary.length > 80) {
        dishPicPs[i].textContent = summary.substr(0, 80) + "...";

      } else {
        dishPicPs[i].textContent = summary;
      }

      // ASSIGN IMAGE BUTTON LINKS
      // URL SLUG WITH JSON INDEX AT THE END (USED TO ACCESS CORRECT RECIPE ON SHOW PAGE)
      const showURL = `/show/${recipe.title.replace(/[^a-zA-Z0-9-_\s]/g, '').toLowerCase().split(' ').join('-')}?${i}`
      imageButtonLinks[i].setAttribute("href", showURL);

      // ADD EVENT LISTENERS TO IMAGES
      dishPics[i].addEventListener("mouseenter", function (e) {
        document.getElementById(`button${i}`).classList.add("show-as-block");
      });
      dishPics[i].addEventListener("mouseleave", function (e) {
        document.getElementById(`button${i}`).classList.remove("show-as-block");
      });
      dishPics[i].addEventListener("click", function (e) {
        window.location = showURL;
      });
    };
  }

  //===Execute Spoonacular Food-Api ===
  function fetchApi() {
    fetch('https://api.spoonacular.com/recipes/random?apiKey=120a318750fc4294b6406710583ca19b&number=12&tags=vegetarian')
      .then(res => res.json())
      .then((json) => {
        runApi(json);
      })
      .catch((err) => {
        console.log(err);
        runApi(veggieRecipes);
      });
  }
  fetchApi();
};