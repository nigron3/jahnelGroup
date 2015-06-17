var itemNum = 0;
$( document ).ready(function() {
  
});


function clicked(){
	
}

function entered(){
	alert('hi');
}

function clearMe(){

$('#taskText').val("");

}

$('#taskText').on('focus',clearMe);



$(function(){
	$('.editA').on('click',clicked)
});



$('#list').on('click', '.deleteA', function(){
	$(this).parent().parent().remove();
});


$('#list').on('keypress', '.inputTextBox', function(evt){
	if(evt.which===13 )
	{
		$(this).hide();

		$(this).parent().children('.itemText').text($(this).val());
		$(this).parent().children('.itemText').show();

	}
});


$('#list').on('click', '.itemCheckbox', function(){


		if(!$(this).parent().children('.itemText').hasClass('finishedItem'))
		{
		$(this).parent().children('.itemText').addClass('finishedItem');
		}
		else
		{
			$(this).parent().children('.itemText').removeClass('finishedItem');
		}

		//$(this).parent().children('.itemText').toggleClass('.finishedItem');

	//$(this).parent().parent().children('.itemText').attr('style','text-decoration: line-through');


});


$('#list').on('click', '.editA', function(){

/*
	var itemTextBox =  document.createElement('input');
	$(itemTextBox).attr('type','text');
	$(itemTextBox).addClass('inputTextBox');
	$(this).parent().parent().children('.itemText').replaceWith(itemTextBox);
	*/
	$(this).parent().parent().children('.itemText').hide();
	$(this).parent().parent().children('.inputTextBox').show();

});

$('#clearAll').click(function(){
	$('#list').children().remove();
	$('#list').html('<div id="placeholdertext"> <p id="placeholdertext" name="placeholdertext" style="display:inline"> tasks: </p> </br>');

})

$('#clearSelected').click(function(){
	$('#list').children().children('input[type=checkbox]:checked').parent().remove();
	//$('#list').html('<div id="placeholdertext"> <p id="placeholdertext" name="placeholdertext" style="display:inline"> tasks: </p> </br>');

})



$('#submitbutton').click(function() 
{
	itemNum++;


	/*
		var p1 = document.createElement('input');
		txt = document.createTextNode('This is the text in new element.');
		$(p1).addClass('itemCheckbox');
		$(p1).attr('type','checkbox')
		$(p1).attr('id','checkbox' +itemNum);
		$(p1).append(txt);
		*/


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

	$(editDiv).attr('style','display:inline');

	$(editItemA).addClass('editA');
	$(editItemA).onClick=clicked;
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

		//$('#list').append("<div id='item"+ itemNum +"' name='item" + itemNum +"'>  <input id='checkbox"+itemNum +"' name='checkbox"+itemNum +"' type='checkbox'  >  </input> <p style='display:inline' id='checkboxText" + itemNum+"'> " + taskText  +" </p>  <div style='display:inline' id='editContainer'> <a id='edit "+itemNum+"'> edit| </a> <a>delete </a> </div> </div>" );


});








