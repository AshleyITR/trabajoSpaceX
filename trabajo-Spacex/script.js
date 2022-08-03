let capsule = document.getElementById("capsuleName");
let imgs = document.getElementById("imgs");

const post = function () {

    fetch(`https://api.spacexdata.com/v4/dragons`)

        .then(response => response.json())  // convertir a json

        .then(function (data) {
            console.log(data);
            imgs.innerHTML = `<div class="card" style="width: 18rem;">
            <h5 class="card-header">${data[0].name}</h5>
            <img src=${data[0].flickr_images[0]} class="card-img-top" alt="...">
           
            <div class="card-body">
              <p class="card-text">${data[0].description}</p>
              <ul class="list-group list-group-flush">
              <li class="list-group-item"> <span class="badge bg-success">Type: ${data[0].type}</span>
               <span class="badge bg-warning">Is active: ${data[0].active}</span>
               <span class="badge bg-primary">Crew capacity: ${data[0].crew_capacity}</span></li>
              </ul>
            </div>
          </div>`


        }
        )    //imprimir los datos en la consola

        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

};

post();









