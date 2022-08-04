let capsule = document.getElementById("capsuleName");
let imgs = document.getElementById("imgs");
let button = document.querySelector('#buttonSubmit');
let search = document.getElementById("searchInput").value;
let info = 'dragons';



const post = function () {

  fetch(`https://api.spacexdata.com/v4/${info}`)

    .then(response => response.json())  // convertir a json

    .then(function (data) {
      console.log(data);
      data.map(function (dato) {

        imgs.innerHTML += `
              <div class="col-sm-6"><div class="card mb-3" >
            <h5 class="card-header">${dato.name}</h5>
            <img src=${dato.flickr_images} class="card-img-top" alt="...">
           
            <div class="card-body">
              <p class="card-text">${dato.description}</p>
              <ul class="list-group list-group-flush">
              <li class="list-group-item"> <span class="badge bg-success">Type: ${dato.type}</span>
               <span class="badge bg-warning">Is active: ${dato.active}</span>
               <span class="badge bg-primary">Crew capacity: ${dato.crew_capacity}</span></li>
              </ul>
            </div></div>
          </div>`



        console.log(`${dato.description} `);
      });


    }
    )    //imprimir los datos en la consola

    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

};

function isActive(active) {

  if (active == true) {

  }
}
post();









  button.addEventListener('click', function () {
    search = document.getElementById("searchInput").value;

    search.toLowerCase();
    if (search != " ") {
      console.log(search);
      switch (search) {
        case 'rockets':
          info = 'rockets';
          break;
        case 'capsule':
         info = 'dragons';
          break;
       
       
      }
    } else{
      alert('type something')
    }
  });