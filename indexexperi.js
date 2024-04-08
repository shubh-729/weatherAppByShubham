//api integration


const API_key = "f052dd4d2bb383541955caf26f9fec00";
async function showWheather() {
    // let city="patna";
    let lat = 12.454;
    let lon = 12.654;
    const response = await fetch('https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&appid={API_key}'); //api call

    const data = await response.json(); //most
    console.log("wheather data:->", data);
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`
    document.body.appendChild(newPara);
}
try {

} catch (error) {
    //error show
}


// to current location

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("no geo location supported");
    }

}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;
    console.log(lat);
    console.log(longi);
}