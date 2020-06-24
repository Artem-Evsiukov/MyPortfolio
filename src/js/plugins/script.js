$(document).ready(function () {
    //mobile menu

   $('.navigation').on('click', '.navigation__button', function () {
        $('.navigation__menu').addClass('active');
    });

   $('.navigation').on('click', '.navigation__close', function () {
        $('.navigation__menu').removeClass('active');
    });

   //close menu
   	$(document).mouseup(function (e){
		var menu = $(".navigation__menu");
		if (!menu.is(e.target) && menu.has(e.target).length === 0) {
		    menu.removeClass('active');
		}
	});

	// anchor

    $( ".navigation__menu ul").on('click', 'a.js-anchor', function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});

