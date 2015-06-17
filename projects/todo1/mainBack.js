
function edit()
{
alert("edit");
}

function deleteMe()
{
alert("delete");
}

function checkme()
{
	alert("test");
}

function add(taskText)
{
	alert(taskText);

	 var newItem = document.createElement('newItem');
	 newItem.innerHTML="<input type='checkbox' onchange='checkme()' > " + taskText  +"</input> <a onclick='edit()'>edit| </a> <a onclick='deleteMe()'>delete </a>" ; 
	 document.getElementById('list').appendChild(newItem);
}


