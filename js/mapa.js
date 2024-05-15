function iniciarMap(){
    var coord = {lat:-33.3572438 ,lng: -70.5009744};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}