const api = {
    key: "55afb65de329dec808860fb3bbe033e3"
    baseurl: "http://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener('eypress' , setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);


    }
}

function getResults (query) {
    fetch('${api.base}weather?q=${query}&units=metric&APPID=$(api.key)'
    .then(weather => {
    return weather.json()
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
}