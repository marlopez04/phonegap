var app = {
	inicio: function(){
		this.iniciaFastClick();
	},

	iniciaFastClick: function () {
		FastClick.attach(document.body);
	},

	dispositivoListo: function(){
		navigator.geolocation.getCurrentPosition(app.pintaCoordenadasEnMapa, app.errorAlSolicitarLocalizacion);
	},

	pintaCoordenadasEnMapa: function(position){
		var miMapa = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
//		var coordsDiv = document.querySelector('#coords');

//		coordsDiv.innerHTML = 'Latitud: ' + position.coords.latitude + ' Longitud:' + position.coords.longitude;
		L.titleLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFybG9wZXowNCIsImEiOiJjaXh1bXlsMmswMDU4MzFrOGlmbjhyY2VuIn0.zq_rBmYTuMYW_4I5WyCTGQ', { 
//		pk.eyJ1IjoibWFybG9wZXowNCIsImEiOiJjaXh1bXlsMmswMDU4MzFrOGlmbjhyY2VuIn0.zq_rBmYTuMYW_4I5WyCTGQ
		//	atribution: 'map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 18
		}).addTo(miMapa);
	},

	errorAlSolicitarLocalizacion: function(error){
		console.log(error.code + ': ' + error.message);
	}
};

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function(){
		app.inicio();
	}, false);
	document.addEventListener('deviceready', function(){
		app.dispositivoListo();
	}, false);
}