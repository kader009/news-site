
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
const DisplayCatagory = (catagory) => {
  const Cataitem = document.getElementById('cataitem');
  // console.log(catagory);

  catagory.forEach(element => {
    const li = document.createElement('li');
    li.classList.add('nav-item', 'd-block');
    li.innerHTML = `
    <a onclick="GetDetail()" href="#${element}" class="nav-link">${element.category_name}</a>

    `;
    Cataitem.appendChild(li);
  });
}



// get detail here

const GetDetail = id =>{
  fetch(`https://openapi.programming-hero.com/api/news/category/01`)
  .then(res => res.json())
  .then(data => console.log(data.data))
}

GetDetail();










