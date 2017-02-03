var app={
	inicio: function(){
		this.iniciaBotones();
		this.iniciaFastClick();
		this.iniciaHammer();
	},

	iniciaFastClick: function () {
		FastClick.attach(document.body);
	},

	iniciaBotones: function () {
		var botonClaro = document.querySelector('#claro');
		var botonOscuro = document.querySelector('#oscuro');

		botonClaro.addEventListener('click',this.ponloClaro,false);
		botonOscuro.addEventListener('click',this.ponloOscuro,false);
	},

	iniciaHammer: function () {
		var zona = document.getElementById('zona-gestos');
		var hammertime = new Hammer(zona);

		hammertime.get('pinch').set({ enable:true });
		hammertime.get('rotate').set({ enable:true });

		hammertime.on('tap doubletap swipe press rotate', function(ev){
			document.querySelector('#info').innerHTML=ev.type+' ' + ev.direction;
		});
		
		zona.addEventListener('webkitAnimationEnd', function (e){
			zona.className='';
		});

		hammertime.on('doubletap', function(ev){
			zona.className= 'doubletap';
		});

		hammertime.on('press', function(ev){
			zona.className= 'press';
		});

		hammertime.on('swipe', function(ev){
			var clase=undefined;
			var direction=ev.direction;

			if (direction==4) clase = 'swipe-derecha';
			if (direction==2) clase = 'swipe-izquierda';

			zona.className= clase;
		});

		hammertime.on('rotate', function(ev){
			var umbral = 4;
		 //	if(ev.distance > umbral) zona.className= 'rotate';
		 zona.className= 'rotate';
		});

	},

	ponloClaro: function(){
		document.body.className = 'claro';
	},

	ponloOscuro: function(){
		document.body.className = 'oscuro';
	},
};

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
		app.inicio();
	}, false);
}

