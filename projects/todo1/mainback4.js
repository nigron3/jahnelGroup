var itemNum =0; // for giving each element a unique ID
var totalItems = 0;// for checking when the list is empty

function checkme(thisCheckbox,thischeckboxText) // displays each list items text with a line through if its checkbox is checked
{
	if(thisCheckbox.checked)
	{
		thischeckboxText.style.textDecoration ='line-through';
	}
	else
	{
		thischeckboxText.style.textDecoration ='none';
	}

}

function entered(e,inputText) // adds new text to each item after the user presses the enter key
{
	 if (e.keyCode == 13)
	  {
		var newText =inputText.value;

		var parent = inputText.parentNode;
		var newId = inputText.id;

		parent.removeChild(inputText);
	
		var newItem = document.createElement('newItem');
		newItem.innerHTML="<p style='display:inline' id='"+inputText.id+"'> " + newText  +" </p>";
		parent.appendChild(newItem);

	}
}



function deleteMe(thischeckbox)
{
	thischeckbox.parentNode.removeChild(thischeckbox); // removes a list item when the user clicks delete
	--totalItems;
	if(totalItems==0)
	{

		var newItem = document.createElement('newItem');
		newItem.innerHTML = '<div id="placeholdertext"><p id="placeholdertext" name="placeholdertext" style="display:inline"> tasks: </p> </br></div>';
		document.getElementById('list').appendChild(newItem);
	}

}

function edit(thischeckboxText) // replaces text element with a text input feild where a user can enter a new list item
{
	var text = thischeckboxText.innerHTML;
	var parent =thischeckboxText.parentNode;
	
	var newItem = document.createElement('newItem');
	newItem.innerHTML="<input id='"+thischeckboxText.id+"' type='text' value ='"+text +"' onkeypress='entered(event, this)'> </input>";
	parent.replaceChild(newItem,thischeckboxText);

	
	
}



function add(taskText) // adds a new item to the list
{

	totalItems++;
	itemNum++;
	
	var newItem = document.createElement('newItem');
	newItem.innerHTML="<div id='item"+ itemNum +"' name='item" + itemNum +"'>  <input id='checkbox"+itemNum +"' name='checkbox"+itemNum +"' type='checkbox' onchange='checkme(checkbox"+itemNum +",checkboxText"+itemNum+")' >  </input> <p style='display:inline' id='checkboxText" + itemNum+"'> " + taskText  +" </p>  <div style='display:inline' id='editContainer'> <a onclick='edit(checkboxText"+itemNum+")'>edit| </a> <a onclick='deleteMe(item" + itemNum+")'>delete </a> </div> </div>" ; 
    document.getElementById('list').appendChild(newItem);
	
	cleartext(document.getElementById('tasktext'));
	
}


function place(p) // removes the place holder text 'Tasks:' to the list
{
	if(totalItems ==1)
	{
		p.parentNode.removeChild(p);	
	}


}

function cleartext(p) // clears the text in the user input feild
{
	p.value="";
}