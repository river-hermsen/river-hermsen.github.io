var options = {
    strings: ['Hoi! Ik ben River<span class="theme-color">.</span>', 'Ik ben een Software Engineer student<span class="theme-color">.</span>'],
    typeSpeed: 80,
    backDelay: 1000,
    loop: true
}

var typed = new Typed("#typed-strings", options);

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.674, lng: -73.945 },
        zoom: 12,
    });
}

