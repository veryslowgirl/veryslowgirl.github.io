let images = [];
var honse = false;
function horse() {
	honse = !honse;
}
function boxtoggle(page) {
	boxreset();
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
    var width = window.innerWidth;
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    for (let n = 0; n <= 35; n++) {
        var num;
        if (honse == true) {
            num = 120;
        } else {
            num = 45;
        }

        let img = new Image(num);
        img.className = "star";
        img.style.left = Math.floor(Math.random() * width) + "px";
        img.style.top = Math.floor(Math.random() * height) + "px";
        let hueRotation = Math.floor(Math.random() * 360);
        img.style.filter = `hue-rotate(${hueRotation}deg)`;
        setTimeout(() => {
            document.getElementById('booty').appendChild(img);
            stars.push(img);

            if (honse == true) {
                img.src = "imgs/sitestuff/honse.gif";
                img.style.width = "120px";
                img.style.height = "120px";
            } else {
                img.src = "imgs/sitestuff/star.gif";
                img.style.width = "45px";
                img.style.height = "45px";
            }

            if (stars.length > 35) {
                let oldStar = stars.shift();
                oldStar.remove();
            }
        }, n * 180);

        if (n == 25) {
            setTimeout(() => {
                sparkle();
            }, n * 180);
        }
    }
}
