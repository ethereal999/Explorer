 !(function($) {
  "use strict";
 if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 2000
    });
  }// Activate smooth scroll on page load with hash links in the url
 if ($('.typeds').length) {
    var typed_strings = $(".typeds").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typeds', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 2000
    });
  }
document.getElementById('switchy').addEventListener('click', function() {
	if ( document.getElementById('switchy').checked ) {
		document.body.classList.add('active');
	} else {
		document.body.classList.remove('active');
	}
});
  })(jQuery);