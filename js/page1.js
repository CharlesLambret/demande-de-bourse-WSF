$(document).ready(function() {
	$('#tabs div').hide();
	$('#tabs div:first').show();
	$('li:first').addClass('active');
	$('#tabs li a').click(function(){
		$('ul li').removeClass("active");
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#tabs div').hide();
		$(currentTab).show();
	});
});
