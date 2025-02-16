var honse = false;
var num = false;
function horse() {
	honse = !honse;
	vsg.style.animation = 'spin 0.5s linear 1';
	vsg.onanimationend = () => {
	vsg.style.animation = '';
	};
	if (honse)
	{
		vsg.src = "imgs/sitestuff/honse.gif";
	}
	else
	{
		vsg.src = "imgs/icons/characters/meflip.png";
	}
}
function boxtoggle(page, special) {
	if (!special)
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

function togglenavi() {
	if (num == false)
	{
		num = true;
		togglenavi();
	}
        if (navi.style.display === "none") {
        	navi.style.display = "block";
        } 

	else {
    		navi.style.display = "none"; }
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

document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const stopButton = document.getElementById('stop');
    const audio = document.getElementById('audio');
    const cds = document.querySelectorAll('.cd');

    cds.forEach(cd => {
        cd.addEventListener('click', () => {
            const newSrc = cd.getAttribute('data-audio-src');
            audio.src = newSrc;
            audio.play();
            cds.forEach(c => c.style.animation = '');
            cd.style.animation = 'spin 1s linear infinite';
        });
    });

    playButton.addEventListener('click', () => {
        audio.play();
        cds.forEach(cd => cd.style.animation = 'spin 1s linear infinite');
    });

    stopButton.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0; 
        cds.forEach(cd => cd.style.animation = ''); 
    });


    audio.addEventListener('ended', () => {
        cds.forEach(cd => cd.style.animation = '');
    });
});




let stars = []; 
function sparkle() {
    var width = (window.innerWidth - 120);
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    for (let n = 0; n <= 15; n++) {
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
        setTimeout(() => {
            document.getElementById('booty').appendChild(img);
            stars.push(img);

            if (honse == true) {
                img.src = "imgs/sitestuff/honse.gif";
                img.style.width = "85px";
                img.style.height = "85px";
            } else {
                img.src = "imgs/sitestuff/star.gif";
                img.style.width = "45px";
                img.style.height = "45px";
            }

            if (stars.length > 15) {
                let oldStar = stars.shift();
                oldStar.remove();
            }
        }, n * 180);

        if (n == 15) {
            setTimeout(() => {
                sparkle();
            }, n * 180);
        }
    }
}
