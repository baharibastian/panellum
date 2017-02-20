// Create viewer
viewer = pannellum.viewer('panorama', ﻿{
    "type": "equirectangular",
    "panorama": "/images/bma-1.jpg",
    "hotSpots": [
        {
            "pitch": 14.1,
            "yaw": 1.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Baltimore Museum of Art"
        },
        {
            "pitch": -9.4,
            "yaw": 222.6,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Art Museum Drive"
        },
        {
            "pitch": -0.9,
            "yaw": 144.4,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "North Charles Street"
        }
    ]
});

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}
