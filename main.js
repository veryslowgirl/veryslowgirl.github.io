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
for (let n = 1; n <= 4; n++)
	{
	 	var x = document.getElementById(n);
		if (x.style.display === "block") {
        	x.style.display = "none";
        	}
	}
}

function generateRandomScreenshot() {
	document.getElementById('imagerandom').src = "images/random/" + (Math.floor(Math.random() * 68) + 1) + ".png";
}