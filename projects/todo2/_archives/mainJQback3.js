$( document ).ready(function() {
	  

	//functions
	function clearMe(){ // clears task text for new user input

		$('#taskText').val("");

	}




	function addNewItem() // adds a new item to the list
	{
		//itemNum++;

		var itemDiv = document.createElement('div');
		$(itemDiv).addClass('itemDivClass')
		var itemCheckBox = document.createElement('input');
		var itemText = document.createElement('p');
		var editDiv = document.createElement('div');
		var editItemA = document.createElement('a');
		var deleteItemA = document.createElement('a');


		var itemTextBox =  document.createElement('input');
		$(itemTextBox).attr('type','text');
		$(itemTextBox).addClass('inputTextBox');
		$(itemTextBox).hide();


		$(itemCheckBox).attr('type','checkbox');
		$(itemCheckBox).addClass("itemCheckbox");


		$(itemText).attr('style','display:inline');
		txt = document.createTextNode($('#taskText').val());
		$(itemText).append(txt);
		$(itemText).addClass('itemText');

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
		$(itemDiv).append(itemText);
		$(itemDiv).append(itemTextBox);
		$(itemDiv).append(editDiv);

		$('#list').append(itemDiv);


		clearMe();
		$('#taskText').focus();
	}

	//events

	$('#taskText').on('focus',clearMe); // anytime  task text gets focus the current text is cleared


	$('#list').on('click', '.deleteA', function(){ // delete anchor removes an item from the list
		$(this).parent().parent().remove();
	});


	$('#list').on('keypress', '.inputTextBox', function(evt){ //allows user to press enter when editing a text item
		if(evt.which===13 )
		{
			$(this).hide();

			$(this).parent().children('.itemText').text($(this).val());
			$(this).parent().children('.itemText').show();
			$('#taskText').focus();

		}
	});


	$('#list').on('click', '.itemCheckbox', function(){			// toggles the strike through on text depeding on if a box is checked

		if(!$(this).parent().children('.itemText').hasClass('finishedItem'))
		{
			$(this).parent().children('.itemText').addClass('finishedItem');
		}
		else
		{
			$(this).parent().children('.itemText').removeClass('finishedItem');
		}
	});


	$('#list').on('click', '.editA', function(){ // allows user to edit text item

		$(this).parent().parent().children('.itemText').hide();
		$(this).parent().parent().children('.inputTextBox').show();
		$(this).parent().parent().children('.inputTextBox').focus();

	});

	$('#clearAll').click(function(){ // clears all items in the list
		
		$('#list').children().remove();
		$('#list').html('<div id="placeholdertext"> <p id="placeholdertext" name="placeholdertext" style="display:inline"> tasks: </p> </br>');
		clearMe();
		//$('#taskText').focus(); not working

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


	$('#submitbutton').click(addNewItem());


	$('.itemText').draggable({
      cursorAt: {left: -10, top: -10}
	});


	

});// end of doc on ready