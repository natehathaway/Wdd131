 import recipes from './recipes.mjs';

 // Function to get a random recipe
 function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomListEntry(list) {
  return list[getRandomInt(list.length)];
}


// Template Functions
function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += `<span aria-hidden="true" class="${i <= rating ? 'icon-star' : 'icon-star-empty'}">${i <= rating ? '⭐' : '☆'}</span>`;
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>
      <h2><a href="#">${recipe.name}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}
      </p>
      <p class="recipe__description">${recipe.description}</p>
    </figcaption>
  </figure>`;
}

function renderRecipes(recipeList) {
  const output = document.querySelector('#recipes');
  output.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}
init();


function filterRecipes(query) {
  const lowerQuery = query.toLowerCase();
  const filtered = recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(lowerQuery) ||
    recipe.description.toLowerCase().includes(lowerQuery) ||
    recipe.tags.find(tag => tag.toLowerCase().includes(lowerQuery)) ||
    recipe.ingredients.find(ing => ing.toLowerCase().includes(lowerQuery))
  );
  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault();
  const query = document.querySelector('#search').value;
  const results = filterRecipes(query);
  renderRecipes(results);
}

document.querySelector('#searchBtn').addEventListener('click', searchHandler);