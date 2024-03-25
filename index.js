const btnloc = document.querySelector("#btnloc");
const searchloc = document.querySelector("#searchloc");
const city = document.querySelector("#city");
const temperature = document.querySelector("#temper");
const description = document.querySelector("#desc");

btnloc.addEventListener('clic', () => {
    const ville = searchloc.value;
    // je fais en sorte que lorsque je clique sur le bouton de recherche, il prenne la valeur écrite par l'utilisateur

    fetch("https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=ee553158eb60c4df59b457d92d13a891")
    //fetch = creer une demande pour un server. J'ai utilisé l'API de https://openweathermap.org/api
    .then(response => response.json())
    .then(datas => {
        emplacementEl.textContent = datas.name;
        temperatureEl.textContent = "${datas.main.temp} °";
        descriptionEl.textContent = datas.weather[0].description;
        //je vais chercher les information via le json de openweathermap
    })
})


