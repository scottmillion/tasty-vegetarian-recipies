window.onload = function () {



  //===SEED DATA===
  const veggieRecipes = [
    {
      title: "Red Curry with Green Beans",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageURL: "http://placeimg.com/640/480?random=1599888274339"
    },
    {
      title: "Awesome Blossom Stew",
      description: "Quibusdam, consectetur ea. Similique consequuntur minus non, id, molestias voluptatum nihil illum soluta, tempore rem voluptates. Iure aliquam id unde eum minima? Ex similique earum repudiandae eos deserunt aspernatur nemo?",
      imageURL: "https://images.unsplash.com/photo-1599840210141-ca4af2ec262a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Red Curry with Green Beans",
      description: "Aut libero, quaerat accusamus itaque quas eveniet! Nostrum at, tempore eveniet deleniti voluptatibus ut porro libero distinctio rerum et culpa sint odit soluta, dicta enim fugiat cupiditate ex, debitis non.",
      imageURL: "https://images.unsplash.com/photo-1599855796261-da055682563c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "So good that it takes up a lot of title space to write this",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageURL: "https://images.unsplash.com/photo-1599734699867-92dd706c8c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Pea Soup",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageURL: "https://images.unsplash.com/photo-1599837700354-0e9d832bdb67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Meatless Taco Bowl",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageURL: "https://images.unsplash.com/photo-1599839575509-b15589e78aa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Mushroom Fajitas",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageURL: "https://images.unsplash.com/photo-1589998205862-5fc4c52a739b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Next title",
      description: "Culpa, officiis nulla provident a officia, eum reprehenderit, vel impedit quas magni ea nemo fugit. Id quae quas atque deleniti eum nemo repudiandae possimus dolorum dolore, quod in facilis voluptatem.",
      imageURL: "https://images.unsplash.com/photo-1599785209728-60659c85926d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Next title",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageURL: "https://images.unsplash.com/photo-1599813391721-ed8c5fe98166?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Next title",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageURL: "https://images.unsplash.com/photo-1599831977536-10cdc8548892?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Next title",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageURL: "https://images.unsplash.com/photo-1599833058222-6ab271909436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Next title",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageURL: "https://images.unsplash.com/photo-1599848096978-7ce3709c3ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
  ];

  //===SELECT ELEMENTS FOR ASSIGNMENT===
  let dishTitles = document.getElementsByTagName("h5");
  let dishPicPs = document.getElementsByClassName("dish-pic-p");
  let dishPics = document.getElementsByClassName("dish-pic");
  let imageButtonLinks = document.querySelectorAll(".image-button-link");

  for (let i = 0; i < 12; i++) {
    // ASSIGN IMAGE URLS
    document.getElementById(`image${i}`).style.backgroundImage = `url(${veggieRecipes[i].imageURL})`;

    // ASSIGN TITLES
    if (veggieRecipes[i].title.length > 50) {
      dishTitles[i].textContent = veggieRecipes[i].title.substr(0, 50) + "...";
    } else {
      dishTitles[i].textContent = veggieRecipes[i].title;
    }
    // ASSIGN DESCRIPTIONS
    if (veggieRecipes[i].description.length > 80) {
      dishPicPs[i].textContent = veggieRecipes[i].description.substr(0, 80) + "...";
    } else {
      dishPicPs[i].textContent = veggieRecipes[i].description;
    }
    // ASSIGN IMAGE BUTTON LINKS
    // PASS OBJECT DATA TO SHOW PAGE THROUGH QUERY STRING
    const showURL = `/show/${veggieRecipes[i].title.toLowerCase().split(' ').join('-')}
      ?${veggieRecipes[i].title}
      |${veggieRecipes[i].description}
      |${veggieRecipes[i].imageURL}`;
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
};


