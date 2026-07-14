if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}
import { dishcard } from "./dishcard.js";
const container = document.getElementById("container");
const countrySelect = document.getElementById("country");
const categorySelect = document.getElementById("category");
// ===============================
// Fetch Meals Function
// ===============================
async function fetchMeals(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    container.innerHTML = "";
    let meals = data.meals;
    if (!Array.isArray(meals)) {
      container.innerHTML = container.innerHTML = `
    <div class="message-box no-data">
        <h2>🍽️ No meals found</h2>
        <p>Try searching another recipe or select a different option.</p>
    </div>
`;
      return;
    }
    meals.forEach((meal) => {
      container.innerHTML += dishcard(
        meal.idMeal,
        meal.strMeal,
        meal.strMealThumb,
      );
    });
  } catch (error) {
    console.log(error);
    container.innerHTML = "<h2>Error loading meals</h2>";
  }
}
// ===============================
// Default Meals
// ===============================
function loadDefault() {
  container.innerHTML = `
    <div class="message-box loading">
        <div class="loader"></div>
        <h2>Loading recipes...</h2>
    </div>
`;
  fetchMeals("https://www.themealdb.com/api/json/v1/1/search.php?s=");
}
loadDefault();
// ===============================
// Selected Countries Loading
// ===============================
function loadCountries() {
  let selectedCountries = [
    "Canadian",
    "Chinese",
    "Japanese",
    "Mexican",
    "Egyptian",
    "Italian",
    "Saudi Arabia",
    "Thai",
    "Turkish",
  ];
  selectedCountries.forEach((country) => {
    let option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
}
loadCountries();
// ===============================
// Country Filter
// ===============================
countrySelect.addEventListener("change", (e) => {
  let country = e.target.value;
  if (country === "all") {
    loadDefault();
    return;
  }
  fetchMeals(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
});
// ===============================
// Category Filter
// ===============================
categorySelect.addEventListener("change", (e) => {
  let category = e.target.value;
  if (category === "all") {
    loadDefault();
    return;
  }
  fetchMeals(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
});
// ===============================
// Search
// ===============================
document.getElementById("searchBtn").addEventListener("click", () => {
  let value = document.getElementById("search").value;
  if (value.trim() === "") {
    loadDefault();
    return;
  }
  fetchMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
});
// ===============================
// Recipe Details Navigation
// ===============================
window.viewRecipe = function (id) {
  localStorage.setItem("recipeId", id);
  window.location.href = "recipe-details.html";
};
