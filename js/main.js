$(document).ready(function(){
	
	var $menuIcon = $('.menu-icon');
	var $mobileNavMenu = $('.main-nav');

	$menuIcon.click(function(){
		$mobileNavMenu.toggleClass('open');
	});
  
});
