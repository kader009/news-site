
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
    <p class="card-text">${show.details.slice(0, 215)}</p>
    <img src="${show.author.img}" class="img-fluid rounded-circle" style="width:50px;">
    <h6 class="card-text d-inline-block ms-3">${show.author.name}</h6>
    <h6 class="card-text d-inline-block ms-5">Total view: ${show.total_view}</h6>
    <button onclick="NewsDetail('${show._id}')" class="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>

    </div>

    </div>
    
    `;

    Container.appendChild(detaiDiv);
  })
}



const NewsDetail = (news) => {
// console.log(news);
  fetch(`https://openapi.programming-hero.com/api/news/${news}`)
  .then(res => res.json())
  .then( data => DisplayNewDetail(data.data[0]))
  .catch(error => console.log(error))
}




const DisplayNewDetail = display => {
  console.log(display);
  const modalPLay = document.getElementById('exampleModalLabel');
  const detailCOntainer = document.getElementById('newsdetail');
  // modalPLay.innerText = display.title;
  modalPLay.innerHTML = `
  <p >${display.title}</p>
  <img src="${display.image_url}" style="width:100%;">
  <p >${display.details.slice(0, 250)}</p>
  
  `

}













