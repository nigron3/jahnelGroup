$( document ).ready(function() {


function createFormElements()
{
 

	$('#buttonContainer').empty();

	//resetform
	var divNewContent = $('<div>');
	divNewContent.attr('id', 'divNewContent');
	divNewContent.addClass('divNewContent');

	

	var btnShadeEveryOtherRow = $('<input>');
	btnShadeEveryOtherRow.attr('type','button');
	btnShadeEveryOtherRow.attr('value','Shade Every Other Row');

	btnShadeEveryOtherRow.addClass('btnShadeEveryOtherRow');

	var btnunderLineshadeEveryTenRows = $('<input>');
	btnunderLineshadeEveryTenRows.attr('type','button');
	btnunderLineshadeEveryTenRows.addClass('btnunderLineshadeEveryTenRows');
	btnunderLineshadeEveryTenRows.attr('value','Shade Every Tenth Row');

	var btnResetTable = $('<input>');
	btnResetTable.attr('type','button');
	btnResetTable.attr('value','Reset');
	btnResetTable.addClass('btnResetTable');


	var tblContent = $('<table>');
	tblContent.addClass('tblContent'); // might want to set and id because there is only 1
	//tblContent.append('<td> hi </td>');
	
	//$('.tblContent').append("<td> hi </td>");
	generateTable();
	

	$('#buttonContainer').append(btnShadeEveryOtherRow);
	$('#buttonContainer').append(btnunderLineshadeEveryTenRows);
	$('#buttonContainer').append(btnResetTable);
	$('#buttonContainer').append(tblContent);

	$('#tableArea').append(divNewContent);

}

function generateTable()
{
	resetTable();
	var numRows =  parseInt($('#userInput').val(),10);
	//alert(typeof numRows);
	//typeof numRows ==integer;

	for( i =0; i<numRows; i++)
	{

		//$('#userInput').val('yesss');

		$('#tblContent').append('<tr><td>'+i+'</td><td>nick</td></tr> ')

		//$('.tblContent').append("<td> hi </td>");
	}

	

}

function resetTable()
{

	//alert('y');
	$('#tblContent tr').remove();
}

function shadeEveryOtherRow()
{
	$('tr:odd').attr('bgcolor','#DDD');
}

function underLineshadeEveryTenRows()
{
	//$('tr:nth-child(10n)').css('border-bottom:','1pt solid black');
	//$('tr:nth-child(10n)').css("border", "3px solid red");


	//$("tr:nth-child(10n)").attr('bgcolor','#DDD');
	$("tr:nth-child(10n) td").addClass("formatedTenth");
	$('div').hide();
	$('div').show();
}	




$('#submitButton').click(createFormElements);


$('div').on('click', '.btnResetTable',  resetTable);


$('div').on('click', '.btnShadeEveryOtherRow',  shadeEveryOtherRow);

$('div').on('click', '.btnunderLineshadeEveryTenRows',  underLineshadeEveryTenRows);




});

