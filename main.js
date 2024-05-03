let images = [];
function onInit()
{
	for (let n = 1; n <= 67; n++)
	{
	images.push("images/random/" + n + ".webp");
	}
}

function boxtoggle(page) {
	if (page <= 5)
	{
	boxreset();
	}
        var x = document.getElementById(page);
		
        if (x.style.display === "none") {
        	x.style.display = "block";
        } 

	else {
    		x.style.display = "none"; }
}
function boxreset()
{
for (let n = 1; n <= 3; n++)
	{
	 	var x = document.getElementById(n);
		if (x.style.display === "block") {
        	x.style.display = "none";
        	}
	}
}

function RandomScreenshot() {
	document.getElementById("imagerandom").src = images[Math.floor(Math.random() * images.length)];
}
window.onload = onInit();