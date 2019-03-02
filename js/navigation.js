$(document).ready(function () {

	var threshold = 200;	// Pixels before menu activation	

	var body = $('body');

	var home = $('#home');
	var manifesto = $('#manifesto');
	var portfolio = $('#portfolio');
	var about = $('#about');

	var homeLink = $('nav a[href="#home"]');
	var manifestoLink = $('nav a[href="#manifesto"]');
	var portfolioLink = $('nav a[href="#portfolio"]');
	var aboutLink = $('nav a[href="#about"]');

	$('nav a').on('click', function(event) {
		activate($(this));
	});

	$(document).on('scroll', function(event) {
		if (body.hasClass('scrolling')) {
			return false;
		}
		
		var scroll = $('html').scrollTop();

    	if (scroll <= manifesto.offset().top - threshold) {
    		activate(homeLink);
    	} else if(manifesto.offset().top - threshold <= scroll
    		&& scroll < (manifesto.offset().top + manifesto.height() - threshold)) {
    		activate(manifestoLink);
    	} else if(portfolio.offset().top - threshold <= scroll
    		&& scroll < (portfolio.offset().top + portfolio.height() - threshold)) {
    		activate(portfolioLink);
    	} else if(about.offset().top - threshold <= scroll
    		&& scroll < (about.offset().top + about.height() - threshold)) {
    		activate(aboutLink);
    	}
	})

	var activeClass = 'active';

	function deactivateAll() {
		return $('.' + activeClass).removeClass(activeClass);
	}

	function activate(elem) {
		if(elem.hasClass(activeClass)) {
			return true;
		}

		deactivateAll();
		return elem.addClass(activeClass);
	}
});
