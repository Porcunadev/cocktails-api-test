let container = document.querySelector('.container');
async function drinksData() {
  //read our JSON
  let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
  let drinksData = await response.json()
  let drinks = (drinksData.drinks)  
  for(drink of drinks) {
    console.log(drink)
    let div = document.createElement("div");
    let small = document.createElement("small");
    let img = document.createElement("img");
    let br = document.createElement("br");
    div.classList.add("table");
    console.log(drink.strDrink)
    div.textContent = drink.strDrink;
    div.appendChild(br);
    small.textContent = drink.strInstructions;
    img.src = `${drink.strDrinkThumb}`;
    container.appendChild(div);
    div.appendChild(small);
    div.appendChild(img);
  }  
  }
drinksData();
