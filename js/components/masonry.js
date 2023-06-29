// Masonry
var Masonry = function() {
    "use strict";

    // Menangani Masonry Grid
    var handleMasonryGrid = function() {
        var $container = $('.masonry-grid');

        // inisialisasi Masonry setelah semua gambar dimuat
        $container.imagesLoaded( function() {
            $container.masonry({
                itemSelector: '.masonry-grid-item', // gunakan kelas terpisah untuk itemSelector, selain .col-
                columnWidth: '.masonry-grid-sizer',
                percentPosition: true
            });
        });

        $.fn.masonryImagesReveal = function( $items ) {
		  	var msnry = this.data('masonry');
		  	var itemSelector = msnry.options.itemSelector;
		  	// sembunyikan secara default
		  	$items.hide();
		  	// tambahkan ke wadah
		  	this.append( $items );
		  	$items.imagesLoaded().progress( function( imgLoad, image ) {
			    // Dapatkan item
			    // image adalah kelas imagesLoaded, bukan <img>, <img> adalah image.img
			    var $item = $( image.img ).parents( itemSelector );
			    // sembunyikan item
			    $item.show();
			    // batu melakukan tugasnya
			    msnry.appended( $item );
		  	});
		  
		  	return this;
		};
    }

    return {
        init: function() {
            handleMasonryGrid(); //setup awal untuk jaringan pasangan bata
        }
    }
}();

$(document).ready(function() {
    Masonry.init();
});
