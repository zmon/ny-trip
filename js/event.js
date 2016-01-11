/**
 * Event class
 */
var Event = (function ($) {
    var constructor = function () {
        this.data = {};
        this.latlng = null;
        this.marker = null;
        this.infobox = null;
        this.infoboxtext = null;

        // Oh dear lord, browser detection. -10 Charisma. Is the browser android or iPhone or Blackberry or Windows mobile?
        this.isPhone = (navigator.userAgent.match(/iPhone/i) || (navigator.userAgent.toLowerCase()
            .indexOf("android") > -1) || (navigator.userAgent.toLowerCase()
            .indexOf("blackberry") > -1) || navigator.userAgent.match(/iemobile/i) || navigator.userAgent.match(/Windows Phone/i)) ? true : false;

        this.toggleInfoBox = function (Map, ThisEvent, i) {
            return function () {
                if (ThisEvent.infobox != null && ThisEvent.infobox.visible) {
                    ThisEvent.infobox.close(Map, ThisEvent.marker);
                } else {
                    ThisEvent.infoboxtext = '<div class="infoBox" style="border:2px solid rgb(16,16,16); margin-top:8px; background:#fff; color: black; padding:5px; font-family:Helvetica Neue,Helvetica,Arial,sans-serif; font-size: 20px;">';

                    var project_name = ThisEvent.data['Name'];
                    ThisEvent.infoboxtext += '   <p>' + "\n";
                    ThisEvent.infoboxtext += '                   <b> ' + project_name + "</b><br \>\n";
                    ThisEvent.infoboxtext += '                   ' + ThisEvent.data['Note'].substring(0, 200) + "<br>\n";
                    ThisEvent.infoboxtext += '                   <span style="color: grey;">Type: </span>' + ThisEvent.data['Category'] + "<br>\n";
                    ThisEvent.infoboxtext += '                   <span style="color: grey;">Location: </span>';

                        ThisEvent.infoboxtext += ThisEvent.data['FullAddress'] + "<br>\n";


                    ThisEvent.infoboxtext += '        </p>' + "\n";
                    ThisEvent.infoboxtext += '<p><a id="#more' + i + '"  document.getElementById(\'link' + i + '\').click();" href="#heading' + i + '">more....</a></p>';

                    ThisEvent.infoboxtext += '</div>';
                    ThisEvent.infobox.setContent(ThisEvent.infoboxtext);
                    ThisEvent.infobox.open(Map, ThisEvent.marker);
                }
            };
        };

        this.closeInfoBox = function (Map, Marker, InfoBox) {
            if (InfoBox.visible) {
                console.log('cccc');
                InfoBox.close(Map, Marker);
            }
        };

    };
    return constructor;
})(jQuery);
