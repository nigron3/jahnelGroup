$(document).ready(function(){

	$('#resumeNavUl li').click(toggleActiveLi);

});


function toggleActiveLi(){

$('#resumeNavUl li').each(test);

$(this).addClass('active');

}

function test(){
	$(this).removeClass('active');
}