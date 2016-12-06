// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;
var cmd = "";
var timer;

function pageLoad_init()
{
	trace("pageLoad_init();");

	form_setup();

	timer = setTimeout(form_request, 1 * 1000);
}

function form_setup()
{
	displayList = {};
	displayList.layerForm = document.querySelector(".layer-form");
	displayList.form = document.querySelector(".cmd-form");
	displayList.formField = document.querySelector(".cmd-form .cmd-field");
	displayList.formButton = document.querySelector(".cmd-form button");
}

function form_request()
{
	displayList.layerForm.classList.remove("layer-hide");

	displayList.formButton.addEventListener("click", form_event, false);
}

function form_cancel()
{
	displayList.layerForm.classList.add("layer-hide");
}

function form_event(event)
{
	event.preventDefault();

	displayList.formButton.removeEventListener("click", form_event, false);

	formTest();
}

function formTest()
{
	var delay;

	cmd = displayList.formField.value;
	
	if(cmd === "forwards")
	{
		alert("YES");
	}

	else
	{
		alert("NO");
	}
	
	// return false;
	trace(cmd);

	delay = setTimeout(form_cancel, 0.5 * 1000);
}