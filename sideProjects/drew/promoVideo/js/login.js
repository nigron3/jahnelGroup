$(document).ready(function(){


	$('button').click(function(){


		if($('#inputPassword').val()=='3')
		{
			window.location = "video.html";
		}
		else{
			alert('wrong!');
			$('#inputPassword').val("");
		}


	});

});