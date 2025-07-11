// main.js
import { recipes } from './recipes.js';

export function loadRandomRecipe() {
  const section = document.getElementById("random-recipe");
  const random = recipes[Math.floor(Math.random() * recipes.length)];

  section.innerHTML = `
    <div class="card">
      <h2>${random.title}</h2>
      <img src="${random.image}" alt="${random.title}" />
      <p>${random.description}</p>
    </div>
  `;
}

window.addEventListener("load", loadRandomRecipe);
