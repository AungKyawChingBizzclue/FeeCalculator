const display = document.getElementById("display");

function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        display.innerHTML("Geolocation is not available in your browser");
    }
}

function showPosition(position){
    display.innerHTML = "Latitude: " + position.coords.latitude + "<br> longitude: " + position.coords.longitude; 
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            display.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            display.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            display.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            display.innerHTML = "An unknown error occurred.";
            break;
    }
}



const live = document.getElementById("live");

function getLiveLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showLiveLivePosition, showError);
    }
}

function showLiveLivePosition(position){
    live.innerHTML = "Live latitude: " + position.coords.latitude + "<br>Live longitude: " + position.coords.longitude; 
}