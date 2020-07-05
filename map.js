$(document).ready(function(){
	
});

let mapsImg = {
	originalMap:'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png',
	officeMap : 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png',
	industryMap : 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png',
	playgroundMap : 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png',
	houseMap: 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png',
	countryMap : 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png'
};

let mapsIds = {
	original : document.getElementById('map'),
	office : document.getElementById('office'),
	industry : document.getElementById('industry'),
	playground : document.getElementById('playground'),
	house : document.getElementById('house'),
	country : document.getElementById('country')
};


mapsIds.office.addEventListener('mouseover', function(){
	map.src=mapsImg.officeMap;
});
mapsIds.office.addEventListener('mouseleave', function(){
	map.src=mapsImg.originalMap;
});


mapsIds.industry.addEventListener('mouseover', function(){
	map.src=mapsImg.industryMap;
});
mapsIds.industry.addEventListener('mouseleave', function(){
	map.src=mapsImg.originalMap;
});


mapsIds.playground.addEventListener('mouseover', function(){
	map.src=mapsImg.playgroundMap;
});
mapsIds.playground.addEventListener('mouseleave', function(){
	map.src=mapsImg.originalMap;
});


mapsIds.house.addEventListener('mouseover', function(){
	map.src=mapsImg.houseMap;
});
mapsIds.house.addEventListener('mouseleave', function(){
	map.src=mapsImg.originalMap;
});


mapsIds.country.addEventListener('mouseover', function(){
	map.src=mapsImg.countryMap;
});
mapsIds.country.addEventListener('mouseleave', function(){
	map.src=mapsImg.originalMap;
});

