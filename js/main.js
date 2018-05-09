$(document).ready(function(){
	
	var $menuIcon = $('.menu-icon');
	var $mobileNavMenu = $('.mobile-nav');

	$menuIcon.click(function(){
		$mobileNavMenu.toggleClass('open');
	});





});

/*      var menu = document.querySelector('#menu');
      var main = document.querySelector('main');
      var drawer = document.querySelector('#drawer');

      menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
      });

      main.addEventListener('click', function() {
        drawer.classList.remove('open');
      });*/