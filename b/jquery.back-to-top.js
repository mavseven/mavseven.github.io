$(document).ready(function($){
    // gulir jendela browser (dalam piksel) setelah tautan "kembali ke atas" ditampilkan
    var offset = 300,
        //gulir jendela browser (dalam piksel) setelah itu opasitas tautan "kembali ke atas" dikurangi
        offset_opacity = 1200,
        //durasi animasi pengguliran atas (dalam md)
        scroll_top_duration = 700,
        //ambil tautan "kembali ke atas".
        $back_to_top = $('.js-back-to-top');

    //sembunyikan atau tampilkan tautan "kembali ke atas".
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible back-to-top-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('back-to-top-fade-out');
        }
    });

    //gulir halus ke atas
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
});
