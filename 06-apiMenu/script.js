 //   arrays
 //   objects
 //   forEach()
 //   DOMContentLoaded
 //   map, reducer y filter
 //   innerHTML
//    .includes()

const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=all`

// buttons
const input = document.getElementById('meal-name')
const searchMealbtn = document.getElementById('search-meal-btn')

// display content
const content = document.querySelector('.content')

// filter by name
searchMealbtn.addEventListener('click', searchMealByName)



async function searchMealByName() {
  let name = document.getElementById('meal-name').value
  name = (name === '') ? 'all' : name
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`

  try{
    const response = await fetch(url)
    const data = await response.json()
    displayContent(data.meals)

    const categories = data.meals.reduce((acc, i) => {
      if(!acc.includes(i.strCategory)) {
        acc.push(i.strCategory)
      }
      return acc
    }, [])
    console.log(categories)
    
  } catch {
    console.error(error)
  }

}

async function showAll() {
  const name = 'all'
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`

  try{
    const response = await fetch(url)
    const data = await response.json()
    displayContent(data.meals)
    
  } catch {
    console.error(error)
  }
}

function displayContent(items) {
  const result = items.map( item => 
    `
    <article class="item">
      <h3>${item.strMeal}</h3>
      <img src="${item.strMealThumb}" alt="">
    </article>
    `
  ).join('')

  content.innerHTML = result
}

document.addEventListener('DOMContentLoaded', showAll)

input.addEventListener('input', searchMealByName)



