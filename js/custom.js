$(function () {
  $('#ws').floatingWhatsApp({
    phone: '60107996055',
    zIndex: 1000,
    position: 'right',
    message: "I would like to know more about your services.",
  });
});

// NIVO LIGHTBOX
$('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });

// HIDE MOBILE MENU AFTER CLIKING ON A LINK
   $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });