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

let stars = []; 
function sparkle() {
        for (let n = 0; n <= 30; n++) {
			var width = window.innerWidth;
			var height = window.innerHeight;
            let img = new Image(45);
            img.src = "images/star.gif";
            img.className = "star";
            img.style.left = Math.floor(Math.random() * width) + "px";
            img.style.top = Math.floor(Math.random() * height) + "px";
			let hueRotation = Math.floor(Math.random() * 360);
            img.style.filter = `hue-rotate(${hueRotation}deg)`;
            setTimeout(() => {
					document.getElementById('booty').appendChild(img);
					stars.push(img); 
					if (stars.length > 30) {
						let oldStar = stars.shift(); 
						oldStar.remove();
					}
				}, n * 251);
                
				if (n == 30) {
					setTimeout(() => {sparkle(); }, n * 251);
                }
            }
        }