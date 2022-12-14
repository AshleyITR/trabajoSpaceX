'use strict';
var key = config.SECRET_API_KEY;


let sectionName = document.getElementById("capsuleName").value;
let imgs = document.getElementById("imgs");
let buttonSearch = document.querySelector('#buttonSubmit');
let navCapsules = document.getElementById("navCapsules");
let navRockets = document.getElementById("navRockets");
let info = '';

let footerContent = document.getElementById("footerContent");

function sectionInfo() {
  let search = document.getElementById("searchInput").value;

  search.toLowerCase();
  if (search != "") {
    console.log(search);
    switch (search) {
      case 'rockets':
        info = search;

        break;
      case 'dragons':
        info = search;

        break;
    }
    post(search);
  } else {
    alert('type something');
  }
}




console.log(info);

function isActive(isActive) {

  if (isActive) {
    return 'badge bg-success';
  } else {
    return 'badge bg-danger';
  }

}
const post = function (info) {
  //console.log(import.meta.env.API_KEY);
  fetch(`https://api.spacexdata.com/v4/` + info + '&key=' + key) // info = rockets or dragons //+ `&key=${process.env.API_KEY}`
    .then(response => response.json())  // convertir a json

    .then(function (data) {
      console.log(data);


      data.map(function (dato) {
        //dato.active = false;
        let estaActivo = isActive(dato.active);
        sectionName = info;


        imgs.innerHTML += `
              <div class="col-sm-6"><div class="card mb-3" >
            <h5 class="card-header">${dato.name}</h5>
            <img src=${dato.flickr_images} class="card-img-top" alt="...">
           
            <div class="card-body">
              <p class="card-text">${dato.description}</p>
              <ul class="list-group list-group-flush">
              <li class="list-group-item"> <span class="badge bg-warning">Type: ${dato.type}</span>
               <span class="${estaActivo}">Is active: ${dato.active}</span>
               <span class="badge bg-primary">Crew capacity: ${dato.crew_capacity}</span></li>
              </ul>
            </div></div>
          </div>`

      });


    }
    )    //imprimir los datos en la consola

    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

};

post(info);
navCapsules.addEventListener('click', (e) => post(e.target.name));
navRockets.addEventListener('click', (e) => post(e.target.name));
buttonSearch.addEventListener('click', () => sectionInfo(info));







const footer = function () {
  fetch(`https://api.spacexdata.com/v4/company`) // info = rockets or dragons
    .then(response => response.json())  // convertir a json

    .then(function (data) {
      console.log(data);
      footerContent.innerHTML = ` 
      <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6  class="text-uppercase fw-bold mb-4">${data.name}</h6>
          <p> About: ${data.summary}</p>
        </div>
    
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4"> Company data</h6>
          <p>Founded by: ${data.founder} in ${data.founded}</p>
          <p>Number of employees: ${data.employees}</p>
          <p>CEO: ${data.ceo}</p>
          <p>CTO: ${data.cto} </p>
          <p>CTO of Propulsion lab: ${data.cto_propulsion}</p>
        </div>
  
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4"> Equipment data</h6>
          <p>Launch sites: ${data.launch_sites} </p>
          <p>Test sites: ${data.test_sites}</p>
          <p>number of vehicles: ${data.vehicles}</p>
         
        </div>
     
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p>${data.headquarters.address}, ${data.headquarters.city}, ${data.headquarters.state}</p>
          <p> ${data.links.website}</p>
          <p> ${data.links.flickr}</p>
          <p>${data.links.twitter}</p>
        </div>
      </div>
    </div>
`;

    }
    )

    .catch(err => console.log('Solicitud fallida', err));

};

footer();

