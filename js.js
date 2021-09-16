let submitButton = document.querySelector("#submit");
let form = document.querySelector("#form");
let restaurantDisplay = document.querySelector("#restaurants-display");

const initMap = (lattitude = 33.883415, longitutde = -117.885626) => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lattitude, lng: longitutde },
        zoom: 16,
    });
};

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    formData = Object.fromEntries(formData.entries());
    getRequest(parseFloat(formData.lattitude), parseFloat(formData.longitude));
    initMap(parseFloat(formData.lattitude), parseFloat(formData.longitude));
    if(Math.abs(parseFloat(formData.lattitude)) >= 180 || Math.abs(parseFloat(formData.longitude)) >= 180){
        document.getElementById("result").innerHTML = "Invalid Input, please try again.";
    }
    else{document.getElementById("result").innerHTML = "Valid Input";}
});

const getRequest = (lat, long) => {
    const config = {
        headers: {
            Authorization:
                "Bearer UFZPvUmqp5s3EJ8VCo6-U1Gg_6vWarpQlkuBfFhJtcs_-c9qo4nAEPHGNSP0sR7PjdOFFDRo1tscepPBZ7maehpu1P9T0uHE65cYCyK4bgcUMyq_Pjo2OwReHdI6YXYx",
            crossDomain: true,
        },
        params: {
            term: "pizza",
            latitude: lat,
            longitude: long,
        },
    };

    axios
        .get("https://api.yelp.com/v3/businesses/search?", config)
        .then((response) => {
            restaurant_data = response.data.businesses;
            for (let i = 0; i < 3; i++) {
                console.log("ss");
                restaurantDisplay.innerHTML += `<h4>${restaurant_data[i].name}</h4>`;
            }
        });
};

const initialize = () => {
    initMap();
};

initialize();
