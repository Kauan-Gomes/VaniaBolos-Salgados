window.onload = function(){
var map;

function initialize(){
    var mapProp = {
        center: new google.maps.LatLng(-23.504800, -46.799220),
        scrollwheel:false,
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById('mapa'),mapProp)
}

function addMarker(Lat,Long,icon,content,click){
    var LatLng = {'lat':Lat,'Lng':Long};

    var marker = new google.maps.Marker({
        position:LatLng,
        map:map,
        icon:icon
    });

    var infoWindow = new google.maps.InfoWindow({
        content:content,
        maxWidth:200,
        pixelOFFset: new google.maps.Size(0,20)
    })

    google.maps.event.addListener(marker,'click',function(){
        infoWindow.open(map,marker);

    })

}
    initialize()
    

    var conteudo = '<p style="color: black; font-size: 13px; padding: 10px; border-bottom:1px solid black;">Meu Endereço</p>'

    addMarker(-23.504800, -46.799220,'',conteudo,true)
};