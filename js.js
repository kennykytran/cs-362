initMap = (lattitude = 33.883415, longitutde = -117.885626) => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lattitude, lng: longitutde },
        zoom: 16,
    });
};

let submitButton = document.querySelector("#submit");
let form = document.querySelector("#form");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    formData = Object.fromEntries(formData.entries());
    initMap(parseFloat(formData.lattitude), parseFloat(formData.longitude));
});
