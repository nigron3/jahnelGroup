$(document).ready(function(){

	$('#resumeNavUl li').click(toggleActiveLi);

});


function toggleActiveLi(){

$('#resumeNavUl li').each(resetNav);

$(this).addClass('active');

}

function resetNav(){
	$(this).removeClass('active');
}