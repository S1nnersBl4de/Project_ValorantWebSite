let _baseurl = "https://valorant-api.com/";

function url(endpoint){
    return _baseurl + endpoint;
}

fetch(url("v1/agents"))
.then(response => response.json())
.then(data => {
    console.log(data); 
    if(data && data.data && Array.isArray(data.data)) {
        render(data.data); 
    } else {
        console.error("Unexpected data structure.");
    }
});

function render(data){
    let container = document.getElementById("containerA");
    
    data.forEach((agent) => {
        container.innerHTML += `
        <div class="insideContainer">

            <section id="card1" class="card">
                <img src="${agent.displayIcon}" alt="">
                <div class="card__content">
                  <p class="card__title">${agent.displayName}</p>
                  <p class="card__description">
                    ${agent.description}
                  </p>
                </div>
              </section>
        </div>
        `;
        

    });
}


