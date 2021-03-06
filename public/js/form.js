// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;
var cmd = "";
var timer;
var formObj;

function pageLoad_init()
{
	trace("pageLoad_init();");

	form_setup();

	timer = setTimeout(form_request, 1 * 1000);
}

function form_setup()
{
	displayList = {};
	displayList.layerForm 	= document.querySelector(".layer-form");
	displayList.formBlock 	= document.querySelector(".form-block");
	displayList.formInner	= document.querySelector(".form-inner");
	displayList.form 		= document.querySelector(".cmd-form");
	displayList.formField 	= document.querySelector(".cmd-form .cmd-field");
	displayList.formButton 	= document.querySelector(".cmd-form button");

	formObj = {};
	formObj.cmd = "";
	formObj.interface = false;
	formObj.gameList = new Array();
	formObj.flowNum = 0;

	form_data();
}

function form_data()
{
	var l = {};

	l.action0 		= "forwards";
	l.action1 		= "left";
	l.action2 		= "back";
	l.actionAll 	= 3;
	l.reaction0		= "F";
	l.reaction1		= "L";
	l.reaction2		= "B";

	formObj.gameList.push(l);
}

function form_request()
{
	displayList.layerForm.classList.remove("layer-hide");

	displayList.formButton.addEventListener("click", form_event, false);

	formObj.interface = true;
}

function form_cancel()
{
	displayList.formButton.removeEventListener("click", form_event, false);

	displayList.layerForm.classList.add("layer-hide");
}

function form_event(event)
{
	event.preventDefault();

	form_read();
}

function form_read()
{
	var checkAction = {};
	var catchAction;
	var applyAction = "";
	
	var cmdFound = false;

	if(formObj.interface)
	{
		formObj.interface = false;

		checkAction = formObj.gameList[formObj.flowNum];

		formObj.cmd = displayList.formField.value.toUpperCase();

		for(var i = 0; i < checkAction.actionAll; i++)
		{
			var checkFor = checkAction['action' + i].toUpperCase();

			trace(formObj.cmd + " " + checkFor);

			if(checkFor === formObj.cmd)
			{
				cmdFound = true;

				catchAction = i;
				
				applyAction = checkAction['reaction' + catchAction];

				trace(applyAction);
				
				break;
			}
		}

		if(cmdFound)
		{
			form_cancel();
		}

		else
		{
			formObj.interface = true;
			displayList.form.reset();
			displayList.formInner.classList.add("cmd-fault");
		}
	}
}


// DEAD

function formTest()
{
	var delay;

	formObj.cmd = displayList.formField.value;
	
	if(formObj.cmd === "forwards")
	{
		alert("YES");
	}

	else
	{
		alert("NO");
	}
	
	// return false;
	trace(formObj.cmd);

	delay = setTimeout(form_cancel, 0.5 * 1000);
}