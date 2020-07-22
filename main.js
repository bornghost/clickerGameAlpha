var cookies = 0;
var cursors = 0;
var ovens = 0;
var bakeries = 0;
var factories = 0;
var cps = 0;

function cookieClick(number){
	cookies = cookies + number;
	cps = number;
	document.getElementById("cookies").innerHTML = cookies;
	document.getElementById("cps").innerHTML = cps;
};

function buyCursor(){
	var cursorCost = Math.floor(10 * Math.pow(1.2,cursors));
	if(cookies >= cursorCost){
		cursors = cursors + 1;
		cookies = cookies - cursorCost;
		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('cookies').innerHTML = cookies;
	};
	var nextCursorCost = Math.floor(10 * Math.pow(1.2,cursors));
	document.getElementById('cursorCost').innerHTML = nextCursorCost;
};

function buyOven(){
	var ovenCost = Math.floor(250 * Math.pow((1.2+(.05*ovens)),ovens));
	if(cookies >= ovenCost){
		ovens = ovens + 1;
		cookies = cookies - ovenCost;
		document.getElementById('ovens').innerHTML = ovens;
		document.getElementById('cookies').innerHTML = cookies;
	};
	var nextOvenCost = Math.floor(250 * Math.pow((1.2+(.05*ovens)),ovens));
	document.getElementById('ovenCost').innerHTML = nextOvenCost;
};

function buyBakery(){
	var bakeryCost = Math.floor(2000 * Math.pow((1.2+(.075*bakeries)),bakeries));
	if(cookies >= bakeryCost){
		bakeries = bakeries + 1;
		cookies = cookies - bakeryCost;
		document.getElementById('bakeries').innerHTML = bakeries;
		document.getElementById('cookies').innerHTML = cookies;
	};
	var nextBakeryCost = Math.floor(2000 * Math.pow((1.2+(.075*bakeries)),bakeries));
	document.getElementById('bakeryCost').innerHTML = nextBakeryCost;
};

function buyFactory(){
	var factoryCost = Math.floor(10000 * Math.pow((1.2+(.09*factories)),factories));
	if(cookies >= factoryCost){
		factories = factories + 1;
		cookies = cookies - factoryCost;
		document.getElementById('factories').innerHTML = factories;
		document.getElementById('cookies').innerHTML = cookies;
	};
	var nextFactoryCost = Math.floor(2000 * Math.pow((1.2+(.09*factories)),factories));
	document.getElementById('factoryCost').innerHTML = nextFactoryCost;
};

window.setInterval(function(){
	cookieClick(cursors + (ovens*6) + (bakeries*24) + (factories*96));
}, 1000);