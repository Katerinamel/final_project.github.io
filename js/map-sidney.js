function initMap() {
                          var uluru = {lat: -7.9726493, lng: 112.6586009};
                          var map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 12,
                            center: uluru
                          });
                          var marker = new google.maps.Marker({
                            position: uluru,
                            map: map
                          });
                        }