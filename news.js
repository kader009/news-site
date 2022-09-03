
// fetch category

const GetCategory = () => {
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res => res.json())
  .then(data => DisplayCatagory(data.data.news_category))
  .catch(error => console.log(error))
}


// call here
GetCategory('');


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
  .then(data => displayDetail(data.data))
  .catch(error => console.log(error))
  // console.log(category);
}


const displayDetail = show => {
  // console.log(show);
  // for(const shows of show){
  //   console.log(shows);
  //   const categoryDiv = document.getElementById('category');
  //   const cols = document.getElementById('col');
  //   // cols.classList.add('card');

  //   cols.innerHTML = `
  //   <div class="card">
  //     <img src="${shows.thumbnail_url}" class="card-img-top" alt="...">
  //     <div class="card-body">
  //       <h5 class="card-title">${shows.title}</h5>
  //       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //     </div>
  //   </div>

  //   `;

  //   categoryDiv.appendChild(cols);

  // }
  const Container = document.getElementById('category');
  Container.innerHTML = ``;
  show.forEach(show => {
    console.log(show);
    const detaiDiv = document.createElement('div');
    detaiDiv.classList.add('col');
    detaiDiv.innerHTML = `
    <div class="card">
    <img src="${show.image_url}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${show.title}</h5>
    <p class="card-text">${show.details.slice(0, 200)}</p>
    </div>

    </div>
    
    `;

    Container.appendChild(detaiDiv);
  })
}










