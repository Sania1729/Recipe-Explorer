export function dishcard(id, name, image) {
  return `
<div class="dishcard">
<img src="${image}" alt="${name}">
<h3>${name}</h3>
<button onclick="viewRecipe('${id}')">
View Recipe
</button>
</div>
`;
}
