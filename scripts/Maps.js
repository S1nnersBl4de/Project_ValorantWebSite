let _baseurl = "https://valorant-api.com";

function url(endpoint){
    return _baseurl + endpoint;
}

fetch(url("/v1/maps"))
.then(Response => Response.json())
.then(data => {
    console.log(data); 
    if(data && data.data && Array.isArray(data.data)) {
        render(data.data); 
    } else {
        console.error("Unexpected data structure.");
    }
});

function render(data){
    let container = document.getElementById("CONTAINER");
    
    data.forEach((maps) => {
        container.innerHTML += `
        <div class="card">
        <img src="${maps.splash}" alt="">

        <div class="card__content">
          <p class="card__title">${maps.displayName}</p>
          <p class="card__description">
          ${maps.narrativeDescription}
          </p>
        </div>
      </div>
        `;
        

    });
}



