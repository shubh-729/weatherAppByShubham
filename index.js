


const userTab = document.querySelector("[data-userWeather");
const searchTab = document.querySelector("[ data-searchWeather]");
const usercontainer = document.querySelector(".weather-container");
const grantaccess = document.querySelector(".grantlocation");
const searchform = document.querySelector(".searchWeather");
const loadingscreen = document.querySelector(".load");
const userweatherinfo = document.querySelector(".info");

let currentTab = userTab;
const API_key = "06a277a05e46924ce34f1dbaf55b410d";
currentTab.classList.add("current-tab");

//adding removing feature of current tab

function switchTab(clickedTab) {
    if (clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab")
    };
    if (!searchform.classList.contains("active")) {
        //kya search wala invisible hai if yes then make it visible
        usercontainer.classList.remove("active");
        grantaccess.classList.remove("active");
        searchform.classList.add("active");
        //added weather tab
    }
    else {
        //agar pahle search wale tab pr tha ab weather tab visible krna hai  so check local storage first for coordinates is visible or not
        getfromSessionStorage();
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input parameter
    switchTab(searchTab);
});
// check coordinates are already available or not

function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinate");
    if (!localCoordinates) {
        //agar location nahi mila
        grantaccess.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates)
        usercontainer.classList.add("active");
    }
}

//user weather info ki api call
async function fetchUserWeatherInfo(coordinate) {
    const { lat, lon } = coordinates
    //make grant container invisible
    grantaccess.classList.remove("active");
    loadingscreen.classList.add("active");

    //api call
    try {
        const response = await fetch(

        );
        const data = await response.JSON();
        loadingscreen.classList.remove("active");
        userweatherinfo.classList.add("active");
        renderWeatherInfo(data);

    } catch (error) {

    }
}

//rendering information
function renderWeatherInfo(weatherInfo) {
    const cityname = document.querySelector("data-cityname")
    const countryIcon = document.querySelector("data-countryicon ")
    const weathertype = document.querySelector("data-weathertype")
    const weatherIcon = document.querySelector("data-weathericon")
    const temp = document.querySelector("data-temp")
    const windspeed = document.querySelector("data-windspeed")
    const humidity = document.querySelector("data-humidity")
    const cloudiness = document.querySelector("data-clouds")


    // fetch values from weatherinfo object and put it UI elements
    //create byy seeing json file
    cityname.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144*108/${weatherInfo?.sys?.country.tolowercase()}.png`;
    weathertype.innerText = weatherInfo?.weather[0]?.description;
    weatherIcon.src = ``
    temp.innerText = weatherInfo?.main?.temp;
    windspeed.innerText =`${weatherInfo?.wind?.speed}m/s`;
    humidity.innerText =`${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

function geolocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("no geolocation support available");
    }
}

//findind coordinates
function showPosition(position) {
     lat = position.coords.latitude;
     lon = position.coords.longitude;
    
}
sessionStorage.setItem('user=-coordinates',JSON.stringify(user-coordinates));

//grant accesspr listener ki access pr session storage me coords store

const grantAccess=document.querySelector("data-grantlocation");
grantAccess.addEventListener("click",getlocation);

//api function call for search
const grantaccesslocation=document.querySelector("data-searchInput")
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(searchInput==="") return;
    else
    fetchUserWeatherInfo(searchinput.value);

    async function fetchUserWeatherInfo(city){

    }
})



// completed 1:37:10