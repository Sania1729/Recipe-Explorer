let id = localStorage.getItem("recipeId");
const container = document.getElementById("recipeDetails");
async function getRecipe() {
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    let data = await response.json();
    let meal = data.meals[0];
    let ingredients = "";

    for (let i = 1; i <= 20; i++) {
      let item = meal[`strIngredient${i}`];
      let measure = meal[`strMeasure${i}`];
      if (item && item.trim() !== "") {
        ingredients += `
<li>
${item} - ${measure}
</li>
`;
      }
    }
    container.innerHTML = `
<div class="recipe-card">
<img src="${meal.strMealThumb}">
<div class="recipe-content">
<h1>${meal.strMeal}</h1>
<div class="info">
<span>🌍 ${meal.strArea}</span>
<span>🍴 ${meal.strCategory}</span>
</div>
<h2>Ingredients</h2>
<ul>
${ingredients}
</ul>
<h2>Instructions</h2>
<p>
${meal.strInstructions}
</p>
<a href="${meal.strYoutube}" target="_blank">
▶ Watch Cooking Video
</a>
</div>
</div>
`;
  } catch (error) {
    console.log(error);
    container.innerHTML = `
<h2>
Unable to load recipe
</h2>
`;
  }
}
getRecipe();
