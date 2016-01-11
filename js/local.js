var local_default = {
    // City
    city: 'New York',
    // DOM ID of where the Google Map is to be rendered
    domid: 'map-canvas',
    // Google maps API key
    googlemapsapikey: 'AIzaSyDQNzkJUiUJBqI_pex-Xe9_1JD4sf2KZS8',
    // Spread Sheet key
    spread_sheet_key: '1H3QGGflklE90sHKYAyeFYIGA-78m4NZHImlocHLiuPI', // Production
    infoboxoptions: {
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-121, 0),
        zIndex: null,
        boxStyle: {
            background: "url('img/tipbox.gif') no-repeat",
            opacity: 0.92,
            width: "370px",
            height: "370px"
        },
        closeBoxMargin: "11px 4px 4px 4px",
        closeBoxURL: "img/close-button.png",
        infoBoxClearance: new google.maps.Size(25, 60),
        visible: false,
        pane: "floatPane",
        enableEventPropagation: false
    },
    // Start center latutude of the Google map
    lat: 40.75543649999999,
    // Start center longitude of the Google map
    lng: -73.97264179999999,
    // State
    state: 'NY',
    // Defined style types passed to TkMap
    styles: 'grey minlabels',
    // Initial zoom level for the Google map
    zoom: 12,
    // Zoom for finding address
    zoomaddress: 16
};
