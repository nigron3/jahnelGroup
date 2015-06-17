
$( document ).ready(function() {
	  

	function clearMe(){ // clears task text for new user input

		$('#taskText').val("");

	}

	function addNewItem() // adds a new item to the list
	{
		
		var itemDiv = document.createElement('div');// contains all elements of one item
		$(itemDiv).addClass('itemDivClass')
		var itemCheckBox = document.createElement('input');
		var itemTextLabel = document.createElement('p');
		var editDiv = document.createElement('div'); // contains edit and delete anchors
		var editItemA = document.createElement('a');
		var deleteItemA = document.createElement('a');


		var itemTextInputBox =  document.createElement('input');//hidden text input feild that alows user to edit text of item
		$(itemTextInputBox).attr('type','text');
		$(itemTextInputBox).addClass('itemTextInputBox');
		$(itemTextInputBox).hide();


		$(itemCheckBox).attr('type','checkbox');
		$(itemCheckBox).addClass("itemCheckbox");


		$(itemTextLabel).attr('style','display:inline');
		txt = document.createTextNode($('#taskText').val());
		$(itemTextLabel).append(txt);
		$(itemTextLabel).addClass('itemTextLabel');

		$(editDiv).addClass('editDiv');

		$(editItemA).addClass('editA');

		txt = document.createTextNode('edit|');
		$(editItemA).append(txt);
		$(deleteItemA).addClass('deleteA');
		txt = document.createTextNode('delete');
		$(deleteItemA).append(txt);

		$(editDiv).append(editItemA);
		$(editDiv).append(deleteItemA);
		$(itemDiv).append(itemCheckBox);
		$(itemDiv).append(itemTextLabel);
		$(itemDiv).append(itemTextInputBox);
		$(itemDiv).append(editDiv);

		$('#list').append(itemDiv);


		//clearMe();
		$('#taskText').focus();
	}



	$('#taskText').on('focus',clearMe); // anytime  task text gets focus the current text is cleared


	$('#list').on('click', '.deleteA', function(){ // delete anchor removes an item from the list
		$(this).parent().parent().remove();
	});


	$('#list').on('keypress', '.itemTextInputBox', function(evt){ //allows user to press enter when editing a text item
		if(evt.which===13 )
		{
			$(this).hide();

			$(this).parent().children('.itemTextLabel').text($(this).val());
			$(this).parent().children('.itemTextLabel').show();
			$('#taskText').focus();

		}
	});


	$('#list').on('click', '.itemCheckbox', function(){			// toggles the strike through on text depeding on if a box is checked

		if(!$(this).parent().children('.itemTextLabel').hasClass('finishedItem'))
		{
			$(this).parent().children('.itemTextLabel').addClass('finishedItem');
		}
		else
		{
			$(this).parent().children('.itemTextLabel').removeClass('finishedItem');
		}
	});


	$('#list').on('click', '.editA', function(){ // allows user to edit text item

		$(this).parent().parent().children('.itemTextLabel').hide();
		$(this).parent().parent().children('.itemTextInputBox').show();
		$(this).parent().parent().children('.itemTextInputBox').focus();

	});

	$('#clearAll').click(function(){ // clears all items in the list
		
		$('#list').children().remove();
		$('#list').html('<div id="placeholdertext"> <p id="placeholdertext" name="placeholdertext" style="display:inline"> tasks: </p> </br>');
		clearMe();
	

	})

	$('#clearSelected').click(function(){ // removes only items that have been checked from the list
		
		$('#list').children().children('input[type=checkbox]:checked').parent().remove();
	})


	$( "#taskText" ).keypress(function(event) { //updates list with enter keystroke instead of submiting the form
	  if(event.which===13)
	  {
	  	addNewItem();
	  }
	});


	$('#submitbutton').click(addNewItem);

});// end of doc on ready