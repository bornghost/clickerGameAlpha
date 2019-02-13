var cookies = 0;
var helpers = 0;
var cookieMakers = 0;
var cps = helpers + (cookieMakers*5);
var helperCost = 0;
var nextHelperCost = 0;
var cookieMakerCost = 0;
var nextCookieMakerCost = 0;

function cookieClick(number){
	cookies = cookies + number;
	document.getElementById("cookies").innerHTML = cookies;
};

function buyHelper(){
	helperCost = Math.floor(10 * Math.pow(1.1,helpers));
	if(cookies >= helperCost){										//checks player can afford
		helpers = helpers + 1;										//increases number of cursors
		cookies = cookies - helperCost;								//removes the cookies spent
		document.getElementById('helpers').innerHTML = helpers;		//updates cursor count
		document.getElementById('cookies').innerHTML = cookies;		//updates cookie count
	};
	nextHelperCost = Math.floor(10 * Math.pow(1.1,helpers));			//find cost of next cursor
	document.getElementById('helperCost').innerHTML = nextHelperCost;		//updates next cursor cost
};

function buyCookieMaker(){
	cookieMakerCost = Math.floor(5 * Math.pow(2.1,cookieMakers));		//works out the cost of this cursor
	if(helpers >= cookieMakerCost){										//checks player can afford
		cookieMakers = cookieMakers + 1;										//increases number of cursors
		helpers = helpers - cookieMakerCost;								//removes the cookies spent
		document.getElementById('cookieMakers').innerHTML = cookieMakers;		//updates cursor count
		document.getElementById('helpers').innerHTML = helpers;		//updates cookie count
	};
	helperCost = Math.floor(10 * Math.pow(1.1,helpers));
	nextCookieMakerCost = Math.floor(12 * Math.pow(2.1,cookieMakers));			//find cost of next cursor
	document.getElementById('cookieMakerCost').innerHTML = nextCookieMakerCost;		//updates next cursor cost
	nextHelperCost = Math.floor(10 * Math.pow(1.1,helpers));
	document.getElementById('helperCost').innerHTML = nextHelperCost;
};

window.setInterval(function(){
	cookieClick(helpers);
	cookieClick(cookieMakers*12);
}, 1000);