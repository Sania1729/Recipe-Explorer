# 🍽️ Food Recipe Finder

A responsive web application that allows users to explore, search, and discover different recipes from around the world. Users can filter recipes based on country and category, view detailed recipe information, ingredients, cooking instructions, and watch recipe videos.

---

## 📌 Project Overview

Food Recipe Finder is a frontend-based recipe exploration application developed using HTML, CSS, and JavaScript. The application integrates with **TheMealDB API** to fetch real-time recipe data and display various dishes with images and details.
The project provides an interactive user experience where users can search for recipes, filter meals by category or country, and view complete recipe details.

---

## ✨ Features

### 🔐 User Authentication
- User registration and login functionality
- Stores user details using Local Storage
- Redirects authenticated users to the recipe explorer page
- Displays logged-in username
- Logout functionality

### 🍴 Recipe Explorer
- Displays recipes dynamically from API
- Attractive recipe card layout
- Recipe images with names
- Responsive grid design

### 🔍 Search Functionality
- Search recipes by food name
- Fetches matching recipes dynamically

### 🌎 Country Based Filtering
- Filter recipes based on selected countries:
  - Canadian
  - Chinese
  - Japanese
  - Mexican
  - Egyptian
  - Italian
  - Saudi Arabian
  - Thai
  - Turkish

### 🥗 Category Filtering
- Filter recipes based on categories:
  - Seafood
  - Vegetarian
  - Beef

### 📖 Recipe Details Page
- Displays complete recipe information:
  - Recipe image
  - Recipe name
  - Country
  - Category
  - Ingredients
  - Cooking instructions
  - YouTube cooking video link

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6 Modules)

### API
- TheMealDB API

API Link:
https://www.themealdb.com/api.php

### Storage
- Browser Local Storage

### Tools
- Visual Studio Code
- GitHub
- Live Server Extension

---

## 📂 Project Structure
RecipeExplorer
│
├── assets
│ └── logo.png
│
├── css
│ ├── style.css
│ ├── login.css
│ └── recipe.css
│
├── js
│ ├── app.js
│ ├── auth.js
│ ├── dishcard.js
│ └── recipe.js
│
├── pages
│ └── recipe-details.html
│
├── index.html
├── login.html
└── register.html


---

## ⚙️ How to Run the Project

1. Clone the repository
2. Open the project folder in VS Code.
3. Install Live Server extension.
4. Run:
index.html
using Live Server.
---
## 🔄 Application Workflow
1. User registers an account.
2. User logs in using credentials.
3. User is redirected to the Recipe Explorer.
4. Recipes are fetched from TheMealDB API.
5. User can:
   - Search recipes
   - Filter recipes
   - View recipe details
6. User can logout from the application.
---

## 🎯 Future Enhancements

- Add user profile section
- Add favorite recipes feature
- Add recipe rating system
- Add meal recommendation system
- Add dark mode
- Improve authentication using backend database
- Add AI-based recipe suggestions

---

## 👩‍💻 Developer

**Saniya Begum**

This project is created for learning and demonstration purposes.
