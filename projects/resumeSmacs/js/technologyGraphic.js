$(document).ready(function(){

$('#technologySkillSetGraphicContainer').on('click', '.technologySkillSetGraphicUserInterfaceDiv', veiwUIPills);
$('#technologySkillSetGraphicContainer').on('click', '.technologySkillSetGraphicMidTierDiv', viewMidTier);
$('#technologySkillSetGraphicContainer').on('click', '.technologySkillSetGraphicDatabaseDiv', veiwDatabase);

});


function veiwUIPills() {

	$('#yellowcog').removeClass('active');
	$('#bluecog').removeClass('active');
	$('#redcog').addClass('active');
	$('#technologyPillsUL li').each(changePillsToUI);

}

function viewMidTier(){
	$('#bluecog').addClass('active');
	$('#redcog').removeClass('active');
	$('#yellowcog').removeClass('active');
	$('#technologyPillsUL li').each(changePillsToMidTier);
}

function veiwDatabase(){
	$('#yellowcog').addClass('active');
	$('#bluecog').removeClass('active');
	$('#redcog').removeClass('active');
	
	$('#technologyPillsUL li').each(changePillsToDatabase);
}


function changePillsToUI() {
	//in the future this will reload the pills for now i am just chaning classes
	$(this).addClass('ui');
	$(this).removeClass('database');
	$(this).removeClass('midTier');
}

function changePillsToMidTier(){
	$(this).removeClass('ui');
	$(this).removeClass('database');
	$(this).addClass('midTier');

}

function changePillsToDatabase(){
	$(this).removeClass('ui');
	$(this).addClass('database');
	$(this).removeClass('midTier');

}