
$(document).ready(function(){

	$('#btnHide').click(toggleFooter);

	$('form').on('click', 'input[type=text]', function(){ $(this).val('');});

});



function toggleFooter(){
	if( $('footer').hasClass('hidden')){
		$('footer').slideDown();
		$('footer').removeClass('hidden');
		$('#btnHideTitleSpan').text('Hide');
		$('#btnHide').html('-');
	}
	else{
		$('footer').slideUp();
		$('footer').addClass('hidden');
		$('#btnHideTitleSpan').text('Contact');
		$('#btnHide').html('+');
	}
}