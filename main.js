function detectMobile() {
    return ( window.innerWidth <= 1200 );
}
  
function onInit()
{
	checkUrl();
	document.getElementById('homeicon').src = getRandomImage("imgs/sitestuff/bunny.png", "imgs/sitestuff/bunny2.png");
	if (detectMobile())
	{
		setupMobile();
	}
	setupSparkle();
	setupMusic();
}

function checkUrl() {
    let command = decodeURIComponent(window.location.search.substring(1));
    if (command) {
        if (pages.includes(command)) {
            pageSwitcher(command);
			if (detectMobile()) {
            setupMobile();
        }
        }
    }
	history.replaceState(null, null, window.location.pathname);
}
function setupMobile()
{
	toggleNavi();
}

function toggleNavi() {
    if (navi.style.display === "none") {
        	navi.style.display = "block";
    }
	else {
    		navi.style.display = "none"; 
	}
}

const pages = ["homepage", "musicpage", "artpage", "extraspage"];

function pageSwitcher(page) {
    pageReset();
    let x = document.getElementById(page);	
    if (x) {
        x.style.display = "block";
    }
}

function pageReset() {
	if (detectMobile())
	{
		toggleNavi();
	}
	document.getElementById('homeicon').src = "imgs/sitestuff/bunny.png";
    pages.forEach(page => {
        let x = document.getElementById(page);
        if (x) {
            x.style.display = "none";
        }
    });
}

function setupMusic() {
    const stopButton = document.getElementById('stop');
    const audio = document.getElementById('audio');
    const cds = document.querySelectorAll('.cd');
	    cds.forEach(cd => {
        cd.addEventListener('click', () => {
            const newSrc = cd.getAttribute('data-audio-src');
           // audio.src = newSrc;
           // audio.play();
            cds.forEach(c => c.style.animation = '');
            cd.style.animation = 'spin 1s linear 5';
        });
    });
	//stopButton.addEventListener('click', () => {
   //     audio.pause();
  //      audio.currentTime = 0; 
  //      cds.forEach(cd => cd.style.animation = ''); 
  //  });
	//audio.addEventListener('ended', () => {
   //     cds.forEach(cd => cd.style.animation = '');
  //  });
}

const maxStars = 10;
const starSize = 45;
const HorseSize = 85;
const timeBetween = 120;
const mobilebounds = 0;
let stars = []; 

function setupSparkle() {	
    for (let i = 0; i <= maxStars; i++) {
		let width = ((document.documentElement.getBoundingClientRect().width) - 170); 
        let height = ((document.documentElement.getBoundingClientRect().height) - 100);
        setTimeout(() => {
            createStar(width, height);

            if (stars.length > maxStars) {
                stars.shift().remove();
            }

            if (i === maxStars) {
                setTimeout(setupSparkle, timeBetween * i);
            }
        }, i * timeBetween);
    }
}

function createStar(width, height) {
    let img = new Image();
    img.className = "star";
    img.style.left = (Math.floor(Math.random() * width)+85) + "px";
    img.style.top = Math.floor(Math.random() * height) + "px";

    let isHonse = honse === true;
    img.src = isHonse ? "imgs/sitestuff/honse.gif" : "imgs/sitestuff/star.gif";
    img.style.width = isHonse ? HorseSize + "px" : starSize + "px";
    img.style.height = isHonse ? HorseSize + "px" : starSize + "px";

    document.getElementById('starContainer').appendChild(img);
    stars.push(img);
}

function getRandomImage(defaultSrc, altSrc) {
    return Math.random() < 0.05 ? altSrc : defaultSrc;
}


let honse = false;
let sfb = false;

function BTN_home(){
	const randomNum = Math.floor(Math.random() * 25);
	if (randomNum === 0) {
		honse = true;
		vsg.src = "imgs/sitestuff/honse.gif";
	}
	else {
    honse = false;
	vsg.src = "imgs/icons/characters/meflip.png";
	}
	
	vsg.style.animation = 'spin 0.5s linear 1';
	vsg.onanimationend = () => {
	vsg.style.animation = '';
	if (detectMobile())
	{
		pageSwitcher('homepage');
		toggleNavi();
	}
	}
}





    


    






