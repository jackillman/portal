
$(document).ready(function() {

    //filtering
	var mixer = mixitup(".projectContainer");

    $(".menubar li").on("click", function(){
        $(".menubar li").removeClass("active");
        $(this).addClass("active")
    });

  $('.sl-slider').slick({ 
        arrows: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              dots: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
      });
  
    // GOOGLE MAP API
    // if HTML DOM Element that contains the map is found...
  if (document.getElementById('map-canvas')){
  
      // Coordinates to center the map
      var myLatlng = new google.maps.LatLng(50.469287,30.448317);
  
      // Other options for the map, pretty much selfexplanatory
      var mapOptions = {
          zoom: 14,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      
      // Attach a map to the DOM Element, with the defined settings
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      
      var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
          });

  }
    
    
    
});


