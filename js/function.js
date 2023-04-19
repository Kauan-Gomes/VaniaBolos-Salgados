var map;

function initMap(){
    var mapOptions = {
        center: {lat: -23.504800, lng: -46.799220},
        zoom: 14,
        mapTypeId:'roadmap'
    }
    
   map = new google.maps.Map(document.getElementById('map'), mapOptions)

    var marker = new google.maps.Marker({
        position:{lat: -23.504800, lng: -46.799220},
        map:map,
        title: 'Vania Bolos e Salgados'
    })


}


 