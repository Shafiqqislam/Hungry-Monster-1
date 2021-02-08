//document.getElementById('search_button').addEventListener('click', function () {
    const searchMeals = () => {
    const searchValue = document.getElementById('search_meal').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals) )

    }

           const displayMeals =meals =>{
            const mealItems = document.getElementById('mealItems');
           
            meals.forEach(meal => {
                        const mealDiv = document.createElement('div');
                        mealDiv.className = 'meals'
                        const mealInfo = `   
                        <img onclick="displaysingleDetails('${meal.strMeal}')" src = "${meal.strMealThumb}">
                        <h2 onclick="displaysingleDetails('${meal.strMeal}')" class='mealName'>${meal.strMeal}</h2> `
                        mealDiv.innerHTML = mealInfo;
                        mealItems.appendChild(mealDiv);
                        document.getElementById('search_meal').value = "";
            })
   
          }
    

const displaysingleDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const singleDiv = document.getElementById('show-details');
            const meal = data.meals[0];
            singleDiv.innerHTML = `
             <img src ="${meal.strMealThumb}">
             <h1>${meal.strMeal}</h1>
             <h4>Ingredients :</h4>
         <ul>
             <li>${meal.strIngredient1}</li>
             <li>${meal.strIngredient2}</li>
             <li>${meal.strIngredient3}</li>
             <li>${meal.strIngredient4}</li>
             <li>${meal.strIngredient5}</li>
             <li>${meal.strIngredient6}</li>
             <li>${meal.strIngredient7}</li>
             <li>${meal.strIngredient8}</li>
             <li>${meal.strIngredient9}</li>
             <li>${meal.strIngredient10}</li>
         </ul>
            `
        });
    };
    
   