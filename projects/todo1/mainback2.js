var itemNum =0;
function checkme(thisCheckbox,thischeckboxText)
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

function entered(e,inputText)
{
	 if (e.keyCode == 13) {
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
thischeckbox.parentNode.removeChild(thischeckbox);
}

function edit(thischeckboxText)
{
	var text = thischeckboxText.innerHTML;
	var parent =thischeckboxText.parentNode;
	parent.removeChild(thischeckboxText);

	var newItem = document.createElement('newItem');


	newItem.innerHTML="<input id='"+thischeckboxText.id+"' type='text' value ='"+text +"' onkeypress='entered(event, this)'> </input>";
	parent.appendChild(newItem);
}

function add(taskText)
{
	alert(taskText);
	itemNum++;
	 var newItem = document.createElement('newItem');
	 newItem.innerHTML="<div id='item"+ itemNum +"' name='item" + itemNum +"'>  <input id='checkbox"+itemNum +"' name='checkbox"+itemNum +"' type='checkbox' onchange='checkme(checkbox"+itemNum +",checkboxText"+itemNum+")' >  </input> <p style='display:inline' id='checkboxText" + itemNum+"'> " + taskText  +" </p>  <div style='display:inline' id='editContainer'> <a onclick='edit(checkboxText"+itemNum+")'>edit| </a> <a onclick='deleteMe(item" + itemNum+")'>delete </a> </div> </div" ; 
	 document.getElementById('list').appendChild(newItem);
}


