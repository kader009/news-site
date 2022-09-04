
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
    Spinner(true);
    
  
  fetch(`https://openapi.programming-hero.com/api/news/category/${category}`)
  .then(res => res.json())
  .then(data => displayDetail(data.data))
  .catch(error => console.log(error))
  // console.log(category);
}


// spinner start
const Spinner = load => {
  const loader = document.getElementById('loader');
  if(load){
    loader.classList.remove('d-none')
  }else{
    loader.classList.add('d-none')
  }
}


const displayDetail = show => {
  
  const Container = document.getElementById('category');
  Container.innerHTML = ``;
  show.forEach(show => {
    
    const detaiDiv = document.createElement('div');
    detaiDiv.classList.add('col');
    detaiDiv.innerHTML = `
    <div class="card">
    <img src="${show.image_url}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${show.title}</h5>
    <p class="card-text">${show.details.slice(0, 215)}</p>
    <img src="${show.author.img}" class="img-fluid rounded-circle" style="width:50px;">
    <h6 class="card-text d-inline-block ms-3">${show.author.name ? show.author.name : 'no data found'}</h6>
    <h6 class="card-text d-inline-block ms-5">Total view: ${show.total_view ? show.total_view : 'no view yet'}</h6>
    <button onclick="NewsDetail('${show._id}')" class="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>

    </div>

    </div>
    
    `;

    Container.appendChild(detaiDiv);


    // spinner stop
    Spinner(false);
  })
}



const NewsDetail = (news) => {

  fetch(`https://openapi.programming-hero.com/api/news/${news}`)
  .then(res => res.json())
  .then( data => DisplayNewDetail(data.data[0]))
  .catch(error => console.log(error))
}


// display news data here

const DisplayNewDetail = display => {
  console.log(display);
  const modalPLay = document.getElementById('exampleModalLabel');
  const detailCOntainer = document.getElementById('newsdetail');
  
  modalPLay.innerHTML = `
  <p >${display.title}</p>
  <img src="${display.image_url}" style="width:100%;">
  <p >${display.details.slice(0, 250)}</p>

  <img src="${display.author.img} class=" img-fluid" style="width:60px; border-radius:5px; margin-bottom:6px;">
  <h5 style="display: inline-block; margin-left: 8px;">${display.author.name ? display.author.name : 'no data found'}</h5>
  <p style="display: inline-block; margin-left: 16px;" > View: ${display.total_view ? display.total_view : 'no data found'  }</p>
  <p style="display: inline-block; margin-left: 10px;">Number: ${display.rating.number}</p>
  
  `;

}













