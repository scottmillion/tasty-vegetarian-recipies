let imageArray = [
  "http://placeimg.com/640/480?random=1599888274339",
  "https://images.unsplash.com/photo-1599840210141-ca4af2ec262a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599855796261-da055682563c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599734699867-92dd706c8c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599837700354-0e9d832bdb67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599839575509-b15589e78aa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1589998205862-5fc4c52a739b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599785209728-60659c85926d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599813391721-ed8c5fe98166?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599831977536-10cdc8548892?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599833058222-6ab271909436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599848096978-7ce3709c3ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];

let titles = [
  "Red Curry with Green Beans",
  "Awesome Blossom Stew",
  "So good that it takes up a lot of title space to write this",
  "Pea Soup",
  "Dragon Fruit Salad",
  "Meatless Taco Bowl",
  "Mushroom Fajitas",
  "Next title",
  "Next title",
  "Next title",
  "Next title",
  "Next title"
];

let descriptions = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus mollitia optio voluptates, dicta in neque veniam cupiditate quibusdam voluptas necessitatibus eveniet adipisci deleniti id excepturi aperiam dolores, qui consequuntur ducimus!",
  "Quibusdam, consectetur ea. Similique consequuntur minus non, id, molestias voluptatum nihil illum soluta, tempore rem voluptates. Iure aliquam id unde eum minima? Ex similique earum repudiandae eos deserunt aspernatur nemo?",
  "Aut libero, quaerat accusamus itaque quas eveniet! Nostrum at, tempore eveniet deleniti voluptatibus ut porro libero distinctio rerum et culpa sint odit soluta, dicta enim fugiat cupiditate ex, debitis non.",
  "Culpa, officiis nulla provident a officia, eum reprehenderit, vel impedit quas magni ea nemo fugit. Id quae quas atque deleniti eum nemo repudiandae possimus dolorum dolore, quod in facilis voluptatem.",
  "Delectus eos, ducimus consequatur sequi deserunt cupiditate tempora deleniti aperiam quis aliquam vero maiores. Architecto rerum, alias ut earum accusantium sit rem illum eos hic consequuntur, dolorem dignissimos, molestias aut?",
  "Aliquid cumque consequatur nisi voluptatem architecto, officia totam quaerat provident quia eveniet. Asperiores, porro. Natus hic tempore aliquid obcaecati tempora officiis ea alias sint itaque ut. Sunt rerum incidunt doloremque!",
  "Molestias cum mollitia reprehenderit? Accusantium numquam praesentium nam, adipisci alias nesciunt quia, laudantium dolores dignissimos ducimus odit quis non officia aliquid. Pariatur velit cumque voluptates numquam consequuntur, nemo laudantium reiciendis.",
  "Amet eum laboriosam ullam in veniam voluptatibus hic aliquam incidunt dignissimos natus rerum, iste maxime odit debitis, cum aspernatur modi repudiandae non odio mollitia? Corrupti laboriosam fugiat dolores dolor eum?",
  "Est consequuntur reiciendis perferendis ea nihil nostrum dignissimos labore vel at, in ad animi sapiente veniam modi enim tempore sint placeat rem molestias. Itaque temporibus et ullam, cumque rerum at.",
  "Quis iusto placeat minima vitae rem doloribus molestiae ad magni perferendis quo molestias, veritatis alias? Ipsum, doloremque accusamus officia minima, ratione fugiat culpa, sint iste ducimus tempora blanditiis a in?",
  "Necessitatibus a reiciendis consequuntur labore esse recusandae amet alias obcaecati omnis exercitationem optio nobis vel libero provident similique at, molestiae quidem veniam corporis repudiandae numquam neque id. Itaque, ipsa minus.",
  "Voluptatem dolor consectetur blanditiis illum odio. Necessitatibus esse aperiam soluta consequatur libero laborum modi et aut nobis quo, debitis sit pariatur? Minus culpa rerum voluptatibus, voluptate nemo officia fuga aspernatur."
];


let h5s = document.getElementsByTagName("h5");
let dishPicPs = document.getElementsByClassName("dish-pic-p");
let dishPics = document.getElementsByClassName("dish-pic");

for (let i = 0; i < 12; i++) {
  //ASSIGN BG IMAGES  
  document.getElementById(`image${i}`).style.backgroundImage = `url(${imageArray[i]})`;

  // ASSIGN TITLES
  if (titles[i].length > 50) {
    h5s[i].textContent = titles[i].substr(0, 50) + "...";
  } else {
    h5s[i].textContent = titles[i];
  }
  // ASSIGN DESCRIPTIONS
  if (descriptions[i].length > 80) {
    dishPicPs[i].textContent = descriptions[i].substr(0, 80) + "...";
  } else {
    dishPicPs[i].textContent = descriptions[i];
  }
  // ADD EVENT LISTENERS TO IMAGES
  dishPics[i].addEventListener("mouseenter", function (e) {
    console.log("entered");
    document.getElementsByClassName("middle-item")[i].style.opacity = 1;
    console.log(document.getElementsByClassName("middle-item")[i].style.opacity);
  });
  dishPics[i].addEventListener("mouseleave", function (e) {
    console.log("left");
  });

};






