// Wow
var Wow = function() {
    "use strict";

    // Handle Wow
    var handleWow = function() {
        var wow = new WOW({
		    boxClass:     'wow',      // kelas elemen animasi css (defaultnya adalah wow)
		    offset:       0,          // jarak ke elemen saat memicu animasi (default adalah 0)
		    mobile:       false,      // memicu animasi pada perangkat seluler (true adalah default) (animasi buat tampilan hp)
		    tablet:       false       // memicu animasi pada perangkat tablet (true adalah default)  (animasi buat tampilan tablet)
		});
		wow.init();
    }

    return {
        init: function() {
            handleWow(); // initial setup for counter
        }
    }
}();

$(document).ready(function() {
    Wow.init();
});