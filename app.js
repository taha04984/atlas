let menu = document.querySelector('.menu');
let navlinks = document.querySelector('.navlinks');

menu.addEventListener('click', ()=>{
    // navlinks.style.left = "0%";
    navlinks.classList.toggle('left');
})



// API Attempt

let search = document.querySelector('.search');
let input = document.querySelector('#input');
let result = document.querySelector('.result');

search.addEventListener('click', ()=>{
    // result.classList.remove('result')
    result.classList.add("result-toggle")

    let countryname = input.value;
    let finalurl = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`;
    // console.log(finalurl);
    fetch(finalurl).then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data[0].capital[0])
        console.log(data[0].flags.svg)
        console.log(data[0].name.common)
        console.log(data[0].continents[0])
        console.log(Object.keys(data[0].currencies)[0])
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        
        
        result.innerHTML = `
        <div class="content">
        <img src="${data[0].flags.svg}" class="flag-img">
        <div class="text-area">
        <p class="Country">Country: ${data[0].name["common"]}</p>
        <p class="capital">Capital: ${data[0].capital[0]}</p>
        <p class="continents">Continents: ${data[0].continents[0]}</p>
        <p class="currency">Currency: ${Object.keys(data[0].currencies)[0]}, ${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
        <p class="languages">Language: ${Object.values(data[0].languages)}</p>
        <p class="timezones">Time-Zones: ${data[0].timezones[0]}</p>
        </div>
        </div>
    `
    })
    
})
