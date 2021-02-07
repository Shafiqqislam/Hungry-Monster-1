document.getElementById('search_button').addEventListener('click', function () {
    const searchValue = document.getElementById('search_meal').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then(res => res.json())
        .then(data => {
            const mealItems = document.getElementById('mealItems');
            const meals = data.meals;
            meals.forEach(meal => {
                const mealDiv = document.createElement('div');
                mealDiv.className = 'meals'
                const mealInfo = `   
                <img onclick="displaysingleDetails('${meal.strMeal}')" src = "${meal.strMealThumb}">
                <h2 onclick="displaysingleDetails('${meal.strMeal}')" class='mealName'>${meal.strMeal}</h2> `
                mealDiv.innerHTML = mealInfo;
                mealItems.appendChild(mealDiv);
                document.getElementById('mealItems').style.backgroundColor = "#2D2013";
                document.getElementById("header").style.color = " blueviolet";
                document.getElementById("header").style.display = "block";
                document.getElementById("header").style.textAlign = "center";
                document.getElementById('search_meal').value = "";

            });
        })
})


const displaysingleDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const singleDiv = document.getElementById('show-details');
            const singleInfo = data.meals[0];
            singleDiv.innerHTML = `
             <img src ="${singleInfo.strMealThumb}">
             <h1>${singleInfo.strMeal}</h1>
             <h4>Ingredients: </h4>
             <ul>
               <li><i class="fas fa-check-square"></i>${singleInfo.strIngredient1}</li>
               <li><i class="fas fa-check-square"></i>${singleInfo.strIngredient2}</li>
               <li><i class="fas fa-check-square"></i>${singleInfo.strIngredient3}</li>
               <li><i class="fas fa-check-square"></i>${singleInfo.strIngredient4}</li>
               <li><i class="fas fa-check-square"></i>${singleInfo.strIngredient5}</li>
               <li><i class="fas fa-check-square"></i>${singleInfo.strIngredient6}</li>
               <li><i class="fas fa-check-square"></i>${singleInfo.strIngredient7}</li>
               <li><i class="fas fa-check-square"></i>${singleInfo.strIngredient8}</li>
               <li><i class="fas fa-check-square"></i>${singleInfo.strIngredient9}</li>
               <li><i class="fas fa-check-square"></i>${singleInfo.strIngredient10}</li>
             </ul>
            `
        })
}

