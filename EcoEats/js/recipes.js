// recipes.js
export const recipes = [
  {
    title: "Chickpea Stir-fry",
    diet: "vegan",
    description: "A quick, nutritious, plant-based meal.",
    image: "css/chickpea-stir-fry.webp"
  },
  {
    title: "Veggie Lasagna",
    diet: "vegetarian",
    description: "A comforting classic with a healthy twist.",
    image: "css/veggie-lasagna.jpg"
  }
];

const list = document.getElementById("recipe-list");
const select = document.getElementById("diet");

function displayRecipes(filter = "all") {
  list.innerHTML = "";
  recipes
    .filter(r => filter === "all" || r.diet === filter)
    .forEach(r => {
      list.innerHTML += `
        <div class="card">
          <h2>${r.title}</h2>
          <img src="${r.image}" alt="${r.title}" />
          <p>${r.description}</p>
        </div>
      `;
    });
}

if (select && list) {
  select.addEventListener("change", () => displayRecipes(select.value));
  displayRecipes();
}
