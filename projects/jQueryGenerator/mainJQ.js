$(function() {

	//initalizes page with focus in the userInputTextbox
	$('#userInput').focus();


	//functions
	function createFormElements() //creates new form elements and adds them to the page
	{
	 

		$('#buttonContainer').empty(); // resests the button container to avoid duplicating form elements


		//make a container for all new content
		var divNewContent = $('<div>');
		divNewContent.attr('id', 'divNewContent');
		divNewContent.addClass('divNewContent');

		
		//button to shade every other row
		var btnShadeEveryOtherRow = $('<input>');
		btnShadeEveryOtherRow.attr('type','button');
		btnShadeEveryOtherRow.attr('value','Shade Every Other Row');
		btnShadeEveryOtherRow.addClass('btnShadeEveryOtherRow');

		//button to underline tenth row
		var btnunderLineEveryTenRows = $('<input>');
		btnunderLineEveryTenRows.attr('type','button');
		btnunderLineEveryTenRows.addClass('btnunderLineEveryTenRows');
		btnunderLineEveryTenRows.attr('value','Underline Every Tenth Row');

		//button to reset table
		var btnResetTable = $('<input>');
		btnResetTable.attr('type','button');
		btnResetTable.attr('value','Reset');
		btnResetTable.addClass('btnResetTable');


		//table element
		var tblContent = $('<table>');
		tblContent.addClass('tblContent'); 
		
		//calls function to generate table based on text input
		generateTable();
		
		//adds elements to the page
		$('#buttonContainer').append(btnShadeEveryOtherRow);
		$('#buttonContainer').append(btnunderLineEveryTenRows);
		$('#buttonContainer').append(btnResetTable);
		$('#buttonContainer').append(tblContent);

		$('#tableArea').append(divNewContent);

	}

	function generateTable() //dynamicly creates table based on user input text box
	{
		resetTable();//clears old table to make new one

		var numRows =  parseInt($('#userInput').val(),10); // gets the number of rows from user text input

		if(numRows> 0)
		{
			for( i =0; i<numRows; i++)
			{
				$('#tblContent').append('<tr><td>'+i+'</td><td>nick</td></tr> ');
			}
		}
		else
		{
			alert('Please enter a number larger than 0');
			resetUserInputTextBox();
		}

	}

	function resetTable() // empties all elements in the table
	{
		$('#tblContent tr').remove();
	}

	function resetTableFormating() // empties all elements in the table
	{

	$('#tblContent tr:odd').attr('bgcolor','white');
		$("#tblContent tr:nth-child(10n) td").removeClass("formatedTenth");
	}

	function resetUserInputTextBox() // empties all elements in the table
	{
		$('#userInput').val('');
		$('#userInput').focus();
	}

	function shadeEveryOtherRow() // shades every other row of the table
	{
		$('#tblContent tr:odd').attr('bgcolor','#DDD');
	}

	function underLineEveryTenRows() //formats every tenth element
	{
		$("#tblContent tr:nth-child(10n) td").addClass("formatedTenth");
	}	



	//event handling
	$('#submitButton').click(createFormElements);
	$('#userInput').on('keypress', function(event){ if(event.which ===13){createFormElements()};});

	$('div').on('click', '.btnResetTable',  function(){resetTableFormating(); resetUserInputTextBox()});

	//resetTableFormating

	$('div').on('click', '.btnShadeEveryOtherRow',  shadeEveryOtherRow);

	$('div').on('click', '.btnunderLineEveryTenRows',  underLineEveryTenRows);


});

