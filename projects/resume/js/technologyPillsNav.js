$(document).ready(function(){

	$('#btnTechnologyPillNav').click(toggleNavigation);

});


function toggleNavigation(){



	if($('#technologyPillsUL').hasClass('collapse'))
	{
	$('#technologyPillsUL').removeClass('collapse');	
	}
	else
	{
		$('#technologyPillsUL').addClass('collapse');
		
	}
	

}