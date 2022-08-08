
let timeLine = document.getElementById("timeLine");

const history = function () {
    fetch(`https://api.spacexdata.com/v4/history`)
        .then(response => response.json())  // convertir a json

        .then(function (data) {
            console.log(data);


            data.map(function (dato) {

                timeLine.innerHTML += `
               
  <div class="col-sm" >
            <div class="card text-center border-warning mb-3">
 
                <div class="card-body">
                <h5 class="card-title">${dato.title}</h5>
                 <p class="card-text">${dato.details}</p>
                <a href="${dato.links.article}" target=”_blank” class="btn btn-primary">article</a>
                </div>
                <div class="card-footer text-muted"> Date: ${dato.event_date_utc}</div>
            </div>
            
            </div>
        `

            });


        }
        )

        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

};

history();