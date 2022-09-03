
// fetch category

const GetCategory = () => {
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res => res.json())
  .then(data => DisplayCatagory(data.data.news_category))
  .catch(error => console.log(error))
}


// call here
GetCategory();


// display here
const DisplayCatagory = (category) => {
  const Cataitem = document.getElementById('cataitem');
  // console.log(catagory);

  category.forEach(category => {
    const li = document.createElement('li');
    li.classList.add('nav-item', 'd-block');
    li.innerHTML = `
    <a onclick="GetDetail('${category.category_id}')" href="#" class="nav-link">${category.category_name}</a>

    `;
    Cataitem.appendChild(li);
  });
}



// get detail here

const GetDetail = category => {
  
  fetch(`https://openapi.programming-hero.com/api/news/category/${category}`)
  .then(res => res.json())
  .then(data => console.log(data.data))
  .catch(error => console.log(error))
  console.log(category);
}

// GetDetail();










