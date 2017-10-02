/**
 * Google Maps JavaScript API
 */
window.initMap = function() {
    var germany = { lat: 51.078, lng: 9.835 };
    if (document.getElementById("googleMap") != null) {
        var map = new google.maps.Map(document.getElementById("googleMap"), {
            center: germany,
            zoom: 6,
            styles: mapStyle,
            // disableDefaultUI: false,
            // draggable: false
            scrollwheel: false,
            streetViewControl: false,
            mapTypeControl: false
        });

        setMarkers(map);
    }
};

function setMarkers(map) {
    var image = {
        url: "/assets/img/map-marker.png",
        size: new google.maps.Size(167, 208),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 50),
        scaledSize: new google.maps.Size(40, 50)
    };

    var locations = [
        {
            title: "Standort Berlin-Schönefeld",
            lat: 52.367566,
            long: 13.561229,
            zIndex: 3,
            window:
                "<strong>Standort Berlin-Schönefeld</strong><br>Zeppelinstraße 3<br>12529 Berlin-Schönefeld<br>Telefon: +49 (0)30 21300038-0"
        },
        {
            title: "Standort Mundelsheim",
            lat: 48.99239,
            long: 9.21073,
            zIndex: 2,
            window:
                "<strong>Standort Mundelsheim</strong><br>Seelhofenstraße 76<br>74395 Mundelsheim<br>Telefon: +49 (0)30 21300038-0"
        },
        {
            title: "Standort Düren",
            lat: 50.81364,
            long: 6.47322,
            zIndex: 1,
            window:
                "<strong>Standort Düren</strong><br>Neue Jülicher Straße 60<br>52353 Düren<br>Telefon: +49 (0)30 21300038-0"
        }
    ];

    for (var i = 0; i < locations.length; i++) {
        var l = locations[i];
        var marker = new google.maps.Marker({
            position: { lat: l.lat, lng: l.long },
            map: map,
            icon: image,
            title: l.title,
            zIndex: l.zIndex,
            anchorPoint: new google.maps.Point(0, -50)
        });
        google.maps.event.addListener(
            marker,
            "click",
            (function(marker, i) {
                return function() {
                    new google.maps.InfoWindow({
                        content: locations[i].window
                    }).open(map, marker);
                };
            })(marker, i)
        );
    }
}

var mapStyle = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#f5f5f5"
            }
        ]
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#616161"
            }
        ]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#f5f5f5"
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#767674"
            }
        ]
    },
    {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#767674"
            },
            {
                weight: 3
            }
        ]
    },
    {
        featureType: "administrative.land_parcel",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#bdbdbd"
            }
        ]
    },
    {
        featureType: "administrative.neighborhood",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#eeeeee"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#757575"
            }
        ]
    },
    {
        featureType: "poi.business",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#e5e5e5"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.arterial",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#757575"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#D9DADA"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#616161"
            }
        ]
    },
    {
        featureType: "road.local",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e"
            }
        ]
    },
    {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
            {
                color: "#e5e5e5"
            }
        ]
    },
    {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
            {
                color: "#eeeeee"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#91abbd"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e"
            }
        ]
    }
];
